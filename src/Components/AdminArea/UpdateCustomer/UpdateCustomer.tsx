import { Button, ButtonGroup, TextField, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";
import CustomerModel from "../../../Models/CustomerModel";
import store from "../../../Redux/Store";
import globals from "../../../Services/Globals";
import jwtAxios from "../../../Services/JwtAxios";
import notify from "../../../Services/Notification";
import "./UpdateCustomer.css";

function UpdateCustomer(): JSX.Element {
  const { register, handleSubmit } = useForm<CustomerModel>();

  async function send(customer: CustomerModel) {
    try {
      const response = await jwtAxios.put<CustomerModel>(
        globals.urls.adminUpdate + "customer",
        customer
      );
      const addedCustomer = response.data;

      notify.success(
        "customer with id: " + addedCustomer.id + " has been updated."
      );
    } catch (err) {
      notify.error(err);
    }
  }

  return (
    <form className="UpdateCustomer Box" onSubmit={handleSubmit(send)}>
      <Typography variant="h3" className="Headline">
        Update Existing Customer
      </Typography>

      <TextField
        {...register("id")}
        label="Customer ID"
        variant="outlined"
        fullWidth
      />

      <TextField
        {...register("firstName")}
        label="First Name"
        variant="outlined"
        fullWidth
      />

      <TextField
        {...register("lastName")}
        label="First Name"
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

export default UpdateCustomer;
