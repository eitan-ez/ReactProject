import { Button, ButtonGroup, TextField, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";
import CompanyModel from "../../../Models/CompanyModel";
import store from "../../../Redux/Store";
import globals from "../../../Services/Globals";
import jwtAxios from "../../../Services/JwtAxios";
import notify from "../../../Services/Notification";
import "./UpdateCompany.css";

function UpdateCompany(): JSX.Element {
  const { register, handleSubmit } = useForm<CompanyModel>();

  async function send(company: CompanyModel) {
    try {
      console.log(company);
      const response = await jwtAxios.put<CompanyModel>(
        globals.urls.adminUpdate + "company",
        company
      );
      const addedCompany = response.data;

      notify.success(
        "company with id: " + addedCompany.id + " has been updated."
      );
      // history.push("/products");
    } catch (err) {
      console.log(store.getState().authState.user.token);
      console.log(err);
    }
  }

  return (
    <form className="UpdateCompany Box" onSubmit={handleSubmit(send)}>
      <Typography variant="h3" className="Headline">
          Update Existing Company
      </Typography>

      <TextField
        {...register("id")}
        label="Company ID"
        variant="outlined"
        fullWidth
      />

      <TextField
        {...register("name")}
        label="Name"
        variant="outlined"
        fullWidth
      />

      <TextField
        {...register("email")}
        label="Email"
        variant="outlined"
        fullWidth
      />

      <TextField
        {...register("password")}
        label="Password"
        variant="outlined"
        type="password"
        fullWidth
      />

      <ButtonGroup variant="text" fullWidth>
        <Button type="submit" color="primary">
          Send
        </Button>
        <Button type="reset" color="secondary">
          Cancel
        </Button>
      </ButtonGroup>
    </form>
  );
}

export default UpdateCompany;
