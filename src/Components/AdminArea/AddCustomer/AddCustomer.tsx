import { Button, ButtonGroup, TextField, Typography } from "@material-ui/core";
import { useForm } from "react-hook-form";
import CustomerModel from "../../../Models/CustomerModel";
import globals from "../../../Services/Globals";
import jwtAxios from "../../../Services/JwtAxios";
import notify from "../../../Services/Notification";
import "./AddCustomer.css";

function AddCustomer(): JSX.Element {
    const { register, handleSubmit } = useForm<CustomerModel>();

    async function send(customer: CustomerModel) {
      try {
  
          const response = await jwtAxios.post<CustomerModel>(globals.urls.adminAdd + "customer", customer);
          const addedCustomer = response.data;
  
          notify.success("customer has been added id: " + addedCustomer.id);
      }
      catch (err) {
          notify.error(err);
      }
  }
  
  
    return (
        <form  className="AddCustomer Box" onSubmit={handleSubmit(send)}>
          <Typography variant="h2" className="Headline">
            Add a customer
          </Typography>
  
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
export default AddCustomer;
