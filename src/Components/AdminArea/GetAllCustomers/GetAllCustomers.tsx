import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  ThemeProvider,
} from "@material-ui/core";
import { Component } from "react";
import CustomerModel from "../../../Models/CustomerModel";
import globals from "../../../Services/Globals";
import jwtAxios from "../../../Services/JwtAxios";
import notify from "../../../Services/Notification";
import darkTheme from "../../SharedArea/CreateMuiTheme/CreateMuiTheme";

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
    
  public async componentDidMount() {
    try {
      const response = await jwtAxios.get<CustomerModel[]>(
        globals.urls.adminGet + "all-customers"
      );
      this.setState({ customers: response.data });
    } catch (err) {
      notify.error(err);
    }
  }

  public render(): JSX.Element {
    return (
      <ThemeProvider theme={darkTheme}>
        <Paper>
          <TableContainer>
            <Table stickyHeader aria-label="stickyHeader">
              <TableHead>
                <TableCell>First Name: </TableCell>
                <TableCell>Last Name: </TableCell>
                <TableCell>Email: </TableCell>
              </TableHead>
              <TableBody>
                {this.state.customers.map((customer) => (
                  <TableRow key={customer.id}>
                    <TableCell>{customer.firstName}</TableCell>
                    <TableCell>{customer.lastName}</TableCell>
                    <TableCell>{customer.email}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </ThemeProvider>
    );
  }
}

export default GetAllCustomers;
