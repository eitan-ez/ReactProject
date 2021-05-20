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
  
          console.log(customer);
          const response = await jwtAxios.post<CustomerModel>(globals.urls.adminAdd + "customer", customer);
          const addedCustomer = response.data;
          console.log(customer);
  
          notify.success("customer has been added id: " + addedCustomer.id);
      }
      catch (err) {
          console.log(err);
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
export default AddCustomer;