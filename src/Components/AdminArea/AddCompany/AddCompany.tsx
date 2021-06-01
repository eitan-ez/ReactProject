import {
  Button,
  ButtonGroup,
  TextField,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import CompanyModel from "../../../Models/CompanyModel";
import globals from "../../../Services/Globals";
import jwtAxios from "../../../Services/JwtAxios";
import notify from "../../../Services/Notification";
import darkTheme from "../../SharedArea/CreateMuiTheme";

function AddCompany(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CompanyModel>();

  async function send(company: CompanyModel) {
    try {
      const response = await jwtAxios.post<CompanyModel>(
        globals.urls.adminAdd + "company",
        company
      );
      const addedCompany = response.data;

      notify.success("company has been added. id: " + addedCompany.id);
    } catch (err) {
      notify.error(err);
    }
  }

  return (
    <form className="Box" onSubmit={handleSubmit(send)}>
      <ThemeProvider theme={darkTheme}>
        <Typography variant="h2" className="Headline">
          Add a Company
        </Typography>

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
            Clear
          </Button>
        </ButtonGroup>
      </ThemeProvider>
    </form>
  );
}

export default AddCompany;
