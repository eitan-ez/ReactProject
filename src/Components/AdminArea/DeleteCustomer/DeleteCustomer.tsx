import {
  Button,
  ButtonGroup,
  TextField,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import { useForm } from "react-hook-form";
import CustomerModel from "../../../Models/CustomerModel";
import globals from "../../../Services/Globals";
import jwtAxios from "../../../Services/JwtAxios";
import notify from "../../../Services/Notification";
import darkTheme from "../../SharedArea/CreateMuiTheme/CreateMuiTheme";
import "./DeleteCustomer.css";

function DeleteCustomer(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CustomerModel>();

  async function send(customer: CustomerModel) {
    try {
      await jwtAxios.delete(
        globals.urls.adminDelete + "customer/" + customer.id
      );
      notify.success("customer with id: " + customer.id + " has been deleted.");
    } catch (err) {
      notify.error(err);
    }
  }

  return (
    <form className="DeleteCustomer Box" onSubmit={handleSubmit(send)}>
      <ThemeProvider theme={darkTheme}>
        <Typography align="center" variant="h2" >
          Delete a Customer
        </Typography>

        <TextField
          {...register("id", {
            min: { value: 0, message: "Customer ID must be a positive number" },
          })}
          label="Customer ID"
          variant="filled"
          fullWidth
          type="number"
          required
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
      </ThemeProvider>
    </form>
  );
}
export default DeleteCustomer;
