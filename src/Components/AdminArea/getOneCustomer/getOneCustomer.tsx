import { Button, ButtonGroup, TextField, Typography } from "@material-ui/core";
import { useState } from "react";
import { useForm } from "react-hook-form";
import CustomerModel from "../../../Models/CustomerModel";
import globals from "../../../Services/Globals";
import jwtAxios from "../../../Services/JwtAxios";
import "./getOneCustomer.css";

function GetOneCustomer(): JSX.Element {
  const { register, handleSubmit } = useForm<CustomerModel>();
  const [customer, setCustomer] = useState(null);

  return (
    <>
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
            console.log(err);
          }
        })}
      >
        <Typography variant="h2" className="Headline">
          Get Customer Details
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
      <div>
      {customer != null && <span>First Name = {customer.firstName}, Last Name = {customer.lastName}, email = {customer.email}, password = {customer.password} </span> }
      </div>
    </>
  );
}

export default GetOneCustomer;
