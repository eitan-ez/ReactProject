import {
  Button,
  ButtonGroup,
  InputLabel,
  MenuItem,
  Select,
  TextField,
  Typography,
} from "@material-ui/core";
import axios from "axios";
import { useForm } from "react-hook-form";
import { useHistory } from "react-router";
import CredentialsModel from "../../../Models/CredentialsModel";
import { UserModel } from "../../../Models/UserModel";
import { loginAction } from "../../../Redux/AuthState";
import store from "../../../Redux/Store";
import globals from "../../../Services/Globals";
import notify from "../../../Services/Notification";
import "./SignForm.css";

function SignForm(): JSX.Element {
  const history = useHistory();
  const { register, handleSubmit } = useForm<CredentialsModel>();

  async function send(credentials: CredentialsModel) {
    try {
      const response = await axios.post<UserModel>(
        globals.urls.adminLogin,
        credentials
      );
      store.dispatch(loginAction(response.data));
      notify.success("You have been successfully logged in!");
      history.push("/admin"); // Redirect to /admin on success
    } catch (err) {
      // notify.error(err);
      alert(err);
    }
  }

  return (
    <form
      className="SignForm Box"
      onSubmit={handleSubmit(send)}
    >
      <Typography variant="h2" className="Headline">
        Sign in
      </Typography>

      <TextField
        {...register("email")}
        label="Email"
        variant="outlined"
        // className="TextBox"
        fullWidth
      />
      <br />
      <br />

      <TextField
        {...register("password")}
        label="Password"
        variant="outlined"
        type="password"
        // className="TextBox"
        fullWidth
      />
      <br />
      <br />

      <InputLabel>Customer Type</InputLabel>
      <Select {...register("userType")} variant="outlined" fullWidth>
        <MenuItem value={"ADMIN"}>Admin</MenuItem>
        <MenuItem value={"COMPANY"}>Company</MenuItem>
        <MenuItem value={"CUSTOMER"}>Customer</MenuItem>
      </Select>

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

export default SignForm;
