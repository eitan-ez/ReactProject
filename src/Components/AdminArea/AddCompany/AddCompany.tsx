import { Button, ButtonGroup, InputLabel, TextField, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";
import CompanyModel from "../../../Models/CompanyModel";
import store from "../../../Redux/Store";
import globals from "../../../Services/Globals";
import jwtAxios from "../../../Services/JwtAxios";
import notify from "../../../Services/Notification";
import "./AddCompany.css";

function AddCompany(): JSX.Element {
  const { register, handleSubmit } = useForm<CompanyModel>();

  async function send(company: CompanyModel) {
    try {

        console.log(company);
        const response = await jwtAxios.post<CompanyModel>(globals.urls.adminAddCompany, company);
        const addedCompany = response.data;

        notify.success("company has been added id: " + addedCompany.id);
        // history.push("/products");
    }
    catch (err) {
        console.log(store.getState().authState.user.token );
        console.log(err);
    }
}


  return (
      <form  className="AddCompany Box" onSubmit={handleSubmit(send)}>
        <Typography variant="h2" className="Headline">
          Add a Company
        </Typography>

        <TextField
          {...register("name")}
          label="Name"
          variant="outlined"
          fullWidth
        />
        <br />
        <br />

        <TextField
          {...register("email")}
          label="Email"
          variant="outlined"
          fullWidth
        />
        <br />
        <br />

        <TextField
          {...register("password")}
          label="Password"
          variant="outlined"
          type="password"
          fullWidth
        />
        <br />
        <br />


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

export default AddCompany;
