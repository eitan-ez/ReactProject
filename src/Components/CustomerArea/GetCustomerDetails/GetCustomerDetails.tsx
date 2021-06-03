import { Button, TextField, Typography } from "@material-ui/core";
import { Component, useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import CustomerModel from "../../../Models/CustomerModel";
import globals from "../../../Services/Globals";
import jwtAxios from "../../../Services/JwtAxios";
import notify from "../../../Services/Notification";
import "./GetCustomerDetails.css";

interface GetCustomerDetailsState {
  customer: CustomerModel;
}

class GetCustomerDetails extends Component<{}, GetCustomerDetailsState> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      customer: null,
    };
  }

  public async componentDidMount() {
      try {
        const response = await jwtAxios.get<CustomerModel>(
          globals.urls.customer + "customer"
        );
        const customerSent = response.data;
        this.setState({ customer: customerSent });
      } catch (err) {
        notify.error(err);
      }
  }

  public render(): JSX.Element {
    return (
      <div className="GetCustomerDetails">
        <Typography align="center" variant="h2">
          Get Customer Details
        </Typography>
        <div>
          {this.state.customer != null && (
            <div>
              First Name = {this.state.customer.firstName}
              <br />
              Last Name = {this.state.customer.lastName}
              <br />
              email = {this.state.customer.email}
              <br />
              password = {this.state.customer.password}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default GetCustomerDetails;
