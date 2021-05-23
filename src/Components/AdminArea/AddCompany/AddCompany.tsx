import {
  Button,
  ButtonGroup,
  InputLabel,
  TextField,
  Typography,
} from "@material-ui/core";
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
      const response = await jwtAxios.post<CompanyModel>(
        globals.urls.adminAdd + "company",
        company
      );
      const addedCompany = response.data;

      notify.success("company has been added id: " + addedCompany.id);
      // history.push("/products");
    } catch (err) {
      console.log(store.getState().authState.user.token);
      console.log(err);
    }
  }

  return (
    <form className="AddCompany" onSubmit={handleSubmit(send)}>
      <Typography variant="h2" className="Headline" color="textPrimary">
        Add a Company
      </Typography>

      <TextField
        className="button"
        {...register("name")}
        label="Name"
        variant="filled"
        fullWidth
      />

      <TextField
        className="button"
        {...register("email")}
        label="Email"
        variant="filled"
        fullWidth
      />

      <TextField
        className="button"
        {...register("password")}
        label="Password"
        variant="filled"
        type="password"
        fullWidth
      />

      <ButtonGroup variant="text" fullWidth>
        <Button type="submit" color="primary" variant="outlined">
          Send
        </Button>
        <Button type="reset" color="secondary" variant="outlined">
          Cancel
        </Button>
      </ButtonGroup>
    </form>
  );
}

export default AddCompany;
