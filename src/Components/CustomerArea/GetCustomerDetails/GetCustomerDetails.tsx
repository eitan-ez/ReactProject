import { Button, TextField, Typography } from "@material-ui/core";
import { useState } from "react";
import { useForm } from "react-hook-form";
import CustomerModel from "../../../Models/CustomerModel";
import globals from "../../../Services/Globals";
import jwtAxios from "../../../Services/JwtAxios";
import "./GetCustomerDetails.css";

function GetCustomerDetails(): JSX.Element {
    const { register, handleSubmit } = useForm<CustomerModel>();
    const [customer, setCustomer] = useState(null);
  
    return (
        <form
          className="GetCustomerDetails Box"
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
  
            <Button type="submit" color="primary">
              Get This Customer Details
            </Button>
        <div>
        {customer != null && <span>First Name = {customer.firstName}, Last Name = {customer.lastName}, email = {customer.email}, password = {customer.password} </span> }
        </div>
        </form>
    );
}

export default GetCustomerDetails;