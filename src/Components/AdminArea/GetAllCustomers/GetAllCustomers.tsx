import { Button } from "@material-ui/core";
import { Component } from "react";
import CustomerModel from "../../../Models/CustomerModel";
import globals from "../../../Services/Globals";
import jwtAxios from "../../../Services/JwtAxios";
import "./GetAllCustomers.css";

interface GetAllCustomersState {
  customers: CustomerModel[];
}

class GetAllCustomers extends Component<{}, GetAllCustomersState> {
  public constructor(props: {}) {
    super(props);
    this.state = {
      customers: [],
    };
  }

  public async getFromDb() {
    try {
      const response = await jwtAxios.get<CustomerModel[]>(
        globals.urls.adminGet + "all-customers"
      );
      this.setState({ customers: response.data });
      console.log(this.state.customers.map((p) => <span key={p.id}>Customer = {p.email}</span>));
    } catch (err) {
      alert(err.message);
    }
  }

  public render(): JSX.Element {
    return (
      <div className="GetAllCustomers Box">
        <Button
          onClick={async () => {
            try {
              const response = await jwtAxios.get<CustomerModel[]>(
                globals.urls.adminGet + "all-customers"
              );
              this.setState({ customers: response.data });
              console.log(this.state);
            } catch (err) {
              alert(err.message);
            }}
          }>
          Get All Customers
        </Button>
      </div>
    );
  }
}

export default GetAllCustomers;