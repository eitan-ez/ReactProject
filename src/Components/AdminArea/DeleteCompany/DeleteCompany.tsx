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
import "./DeleteCompany.css";

function DeleteCompany(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CompanyModel>();

  async function send(company: CompanyModel) {
    try {
      const response = await jwtAxios.delete(
        globals.urls.adminDelete + "company/" + company.id
      );
      notify.success("company with id: " + company.id + " has been deleted.");
    } catch (err) {
      notify.error(err);
    }
  }

  return (
    <ThemeProvider theme={darkTheme}>
      <form className="DeleteCompany Box" onSubmit={handleSubmit(send)}>
        <Typography variant="h2" className="Headline">
          Delete a Company
        </Typography>

        <TextField
          {...register("id", {
            min: { value: 0, message: "Company ID must be a positive number" },
          })}
          label="Company ID"
          variant="filled"
          type="number"
          required
          fullWidth
        />
        {errors.id && <span className="ErrorMessage">{errors.id.message}</span>}
        <br />
        <br />

        <ButtonGroup variant="text" fullWidth>
          <Button type="submit" color="primary" variant="contained">
            Send
          </Button>
          <Button type="reset" color="secondary" variant="contained">
            Clear
          </Button>
        </ButtonGroup>
      </form>
    </ThemeProvider>
  );
}
export default DeleteCompany;
