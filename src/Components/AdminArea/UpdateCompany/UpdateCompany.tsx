import {
  Button,
  ButtonGroup,
  TextField,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import CompanyModel from "../../../Models/CompanyModel";
import store from "../../../Redux/Store";
import globals from "../../../Services/Globals";
import jwtAxios from "../../../Services/JwtAxios";
import notify from "../../../Services/Notification";
import darkTheme from "../../SharedArea/CreateMuiTheme/CreateMuiTheme";
import "./UpdateCompany.css";

function UpdateCompany(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CompanyModel>();

  async function send(company: CompanyModel) {
    try {
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
      notify.error(err);
    }
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <form className="UpdateCompany Box" onSubmit={handleSubmit(send)}>
        <Typography align="center" variant="h3" >
          Update Existing Company
        </Typography>

        <TextField
          {...register("id", {
            min: { value: 0, message: "Company ID must be a positive number" },
          })}
          label="Company ID"
          type="number"
          fullWidth
          required
        />
        {errors.id && <span className="ErrorMessage">{errors.id.message}</span>}

        <TextField
          {...register("name", {
            minLength: {
              value: 3,
              message: "Name must be at least 3 letters.",
            },
          })}
          label="Name"
          variant="standard"
          required
          fullWidth
        />
        {errors.name && (
          <span className="ErrorMessage">{errors.name.message}</span>
        )}

        <TextField
          {...register("email", {
            minLength: {
              value: 3,
              message: "Email must be at least 3 letters.",
            },
            pattern: {
              value: /\S+@\S+\.\S+/,
              message: "This field must be an Email",
            },
          })}
          label="Email"
          variant="standard"
          required
          fullWidth
        />
        {errors.email && (
          <span className="ErrorMessage">{errors.email.message}</span>
        )}

        <TextField
          {...register("password", {
            minLength: {
              value: 3,
              message: "Email must be at least 3 letters.",
            },
          })}
          label="Password"
          variant="standard"
          type="password"
          required
          fullWidth
        />
        {errors.password && (
          <span className="ErrorMessage">{errors.password.message}</span>
        )}

        <ButtonGroup variant="text" fullWidth>
          <Button type="submit" color="primary">
            Send
          </Button>
          <Button type="reset" color="secondary">
            Cancel
          </Button>
        </ButtonGroup>
      </form>
    </ThemeProvider>
  );
}

export default UpdateCompany;
