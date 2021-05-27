import { Button, ButtonGroup, TextField, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";
import CustomerModel from "../../../Models/CustomerModel";
import globals from "../../../Services/Globals";
import jwtAxios from "../../../Services/JwtAxios";
import notify from "../../../Services/Notification";
import "./DeleteCustomer.css";

function DeleteCustomer(): JSX.Element {
  const { register, handleSubmit } = useForm<CustomerModel>();

  async function send(customer: CustomerModel) {
    try {
      const response = await jwtAxios.delete(
        globals.urls.adminDelete + "customer/" + customer.id
      );
      notify.success("customer with id: " + customer.id + " has been deleted.");
    } catch (err) {
      notify.error(err);
    }
  }

  return (
    <form className="DeleteCustomer Box" onSubmit={handleSubmit(send)}>
      <Typography variant="h2" className="Headline">
        Delete a Customer
      </Typography>

      <TextField
        {...register("id")}
        label="Customer ID"
        variant="outlined"
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
export default DeleteCustomer;
