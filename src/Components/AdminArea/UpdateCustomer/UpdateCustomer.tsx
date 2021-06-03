import { Button, ButtonGroup, TextField, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";
import CustomerModel from "../../../Models/CustomerModel";
import globals from "../../../Services/Globals";
import jwtAxios from "../../../Services/JwtAxios";
import notify from "../../../Services/Notification";
import "./UpdateCustomer.css";

function UpdateCustomer(): JSX.Element {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<CustomerModel>();

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
      <Typography align="center" variant="h3" >
        Update Existing Customer
      </Typography>

      <TextField
        {...register("id", {
          min: { value: 0, message: "Customer ID must be a positive number" },
        })}
        label="Company ID"
        type="number"
        fullWidth
        required
      />
      {errors.id && <span className="ErrorMessage">{errors.id.message}</span>}

      <TextField
        {...register("firstName", {
          minLength: {
            value: 3,
            message: "First Name must be at least 3 letters.",
          },
        })}
        label="First Name"
        variant="standard"
        required
        fullWidth
      />
      {errors.firstName && (
        <span className="ErrorMessage">{errors.firstName.message}</span>
      )}

      <TextField
        {...register("lastName", {
          minLength: {
            value: 3,
            message: "Last Name must be at least 3 letters.",
          },
        })}
        label="Last Name"
        variant="standard"
        required
        fullWidth
      />
      {errors.lastName && (
        <span className="ErrorMessage">{errors.lastName.message}</span>
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
  );
}

export default UpdateCustomer;
