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
import CredentialsModel from "../../../../Models/CredentialsModel";
import { UserModel, UserType } from "../../../../Models/UserModel";
import { loginAction } from "../../../../Redux/AuthState";
import store from "../../../../Redux/Store";
import globals from "../../../../Services/Globals";
import notify from "../../../../Services/Notification";
import "./SignForm.css";

function SignForm(): JSX.Element {
  const history = useHistory();
  const { register, handleSubmit } = useForm<CredentialsModel>();

  async function send(credentials: CredentialsModel) {
    try {
      if (credentials.userType === UserType.ADMIN) {
        const response = await axios.post<UserModel>(
          globals.urls.adminLogin,
          credentials
        );
        store.dispatch(loginAction(response.data));
        notify.success("You have been successfully logged in!");
        history.push("/admin");
      }
      if (credentials.userType === UserType.COMPANY) {
        const response = await axios.post<UserModel>(
          globals.urls.companyLogin,
          credentials
        );
        store.dispatch(loginAction(response.data));
        notify.success("You have been successfully logged in!");
        history.push("/company");
      }
      if (credentials.userType === UserType.CUSTOMER) {
        const response = await axios.post<UserModel>(
          globals.urls.customerLogin,
          credentials
        );
        store.dispatch(loginAction(response.data));
        notify.success("You have been successfully logged in!");
        history.push("/customer");
      }
    } catch (err) {
      // notify.error(err);
      alert(err);
    }
  }

  return (
    <form className="SignForm Box" onSubmit={handleSubmit(send)}>
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
        fullWidth
      />
      <br />

      <InputLabel>Customer Type</InputLabel>
      <Select {...register("userType")} variant="outlined" fullWidth>
        <MenuItem value={"ADMIN"}>Admin</MenuItem>
        <MenuItem value={"COMPANY"}>Company</MenuItem>
        <MenuItem value={"CUSTOMER"}>Customer</MenuItem>
      </Select>

      <br />
      <br />
      <ButtonGroup variant="text" fullWidth>
        <Button className= "muiButton" type="submit" color="primary" variant="contained">
          Send
        </Button>
        <Button type="reset" color="secondary" variant="contained">
          Cancel
        </Button>
      </ButtonGroup>
    </form>
  );
}

export default SignForm;
