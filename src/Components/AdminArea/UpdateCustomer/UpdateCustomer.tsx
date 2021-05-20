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
      console.log(customer);
      const response = await jwtAxios.put<CustomerModel>(
        globals.urls.adminUpdate + "customer",
        customer
      );
      const addedCustomer = response.data;

      notify.success(
        "customer with id: " + addedCustomer.id + " has been updated."
      );
    } catch (err) {
      console.log(store.getState().authState.user.token);
      console.log(err);
    }
  }

  return (
    <form className="UpdateCustomer Box" onSubmit={handleSubmit(send)}>
      <Typography variant="h2" className="Headline">
        Update Existing Customer
      </Typography>

      <TextField
        {...register("id")}
        label="Customer ID"
        variant="outlined"
        fullWidth
      />
      <br />
      <br />

      <TextField
        {...register("firstName")}
        label="First Name"
        variant="outlined"
        fullWidth
      />
      <br />
      <br />

      <TextField
        {...register("lastName")}
        label="First Name"
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

export default UpdateCustomer;
