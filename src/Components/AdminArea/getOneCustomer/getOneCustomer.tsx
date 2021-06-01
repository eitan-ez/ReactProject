import {
  Button,
  ButtonGroup,
  TextField,
  ThemeProvider,
  Typography,
} from "@material-ui/core";
import { useState } from "react";
import { useForm } from "react-hook-form";
import CustomerModel from "../../../Models/CustomerModel";
import globals from "../../../Services/Globals";
import jwtAxios from "../../../Services/JwtAxios";
import notify from "../../../Services/Notification";
import darkTheme from "../../SharedArea/CreateMuiTheme";
import "./getOneCustomer.css";

function GetOneCustomer(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CustomerModel>();
  const [customer, setCustomer] = useState(null);

  return (
    <ThemeProvider theme={darkTheme}>
      <form
        className="getOneCustomer Box"
        onSubmit={handleSubmit(async (sendCustomer: CustomerModel) => {
          try {
            const response = await jwtAxios.get<CustomerModel>(
              globals.urls.adminGet + "one-customer/" + sendCustomer.id
            );
            const customerSent = response.data;
            setCustomer(customerSent);
          } catch (err) {
            notify.error(err);
          }
        })}
      >
        <Typography variant="h2" className="Headline">
          Get Customer Details
        </Typography>

        <TextField
          {...register("id", {
            min: { value: 0, message: "Company ID must be a positive number" },
          })}
          label="Customer ID"
          variant="outlined"
          type="number"
          fullWidth
          required
        />
        {errors.id && <span className="ErrorMessage">{errors.id.message}</span>}

        <br />
        <br />
        <ButtonGroup variant="text" fullWidth>
          <Button type="submit" color="primary">
            Send
          </Button>
          <Button
            type="reset"
            color="secondary"
            onClick={() => setCustomer(null)}
          >
            Cancel
          </Button>
        </ButtonGroup>
        {customer != null && (
          <div className="customerDetails">
            <br /> First Name = {customer.firstName}
            <br />
            <br /> Last Name = {customer.lastName}
            <br />
            <br /> email = {customer.email}
            <br />
            <br /> password = {customer.password}
          </div>
        )}
      </form>
    </ThemeProvider>
  );
}

export default GetOneCustomer;
