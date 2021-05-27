import { Component, useEffect } from "react";
import AddCompany from "../AddCompany/AddCompany";
import AddCustomer from "../AddCustomer/AddCustomer";
import DeleteCompany from "../DeleteCompany/DeleteCompany";
import DeleteCustomer from "../DeleteCustomer/DeleteCustomer";
import GetAllCustomers from "../GetAllCustomers/GetAllCustomers";
import GetOneCompany from "../getOneCompany/getOneCompany";
import GetOneCustomer from "../getOneCustomer/getOneCustomer";
import UpdateCompany from "../UpdateCompany/UpdateCompany";
import UpdateCustomer from "../UpdateCustomer/UpdateCustomer";
import GetAllCompanies from "../GetAllCompanies/GetAllCompanies";
import "./AdminMenu.scss";
import store from "../../../Redux/Store";
import notify from "../../../Services/Notification";
import { UserType } from "../../../Models/UserModel";
import { RouteComponentProps } from "react-router";
import MethodCard from "../MethodCard/MethodCard";
import { Typography } from "@material-ui/core";

interface AdminMenuProps extends RouteComponentProps {}

class AdminMenu extends Component<AdminMenuProps> {
  public constructor(props: AdminMenuProps) {
    super(props);
  }

  componentDidMount() {
    if (store.getState().authState.user?.userType !== UserType.ADMIN) {
      notify.error("please log in as admin in order to access the Admin Menu");
      this.props.history.push("/home");
    }
  }

  public render(): JSX.Element {
    return (
      <>
        <Typography variant="h1">Admin Methods Menu</Typography>
        <Typography variant="h5">
          Choose a method and click on it (magic will happen)
        </Typography>
        <ul className="AdminMenu">
          <li className="menuCard">
            <MethodCard
              name="Add company"
              description="Add a new company to the DB"
              sign="&#10009;"
            >
              <AddCompany />
            </MethodCard>
          </li>

          <li className="menuCard">
            <MethodCard
              name="Update Company"
              description="Update existing company"
              sign="?"
            >
              <UpdateCompany />
            </MethodCard>
          </li>

          <li className="menuCard">
            <MethodCard
              name="Delete Company"
              description="Completely delete existing company from DB"
              sign="&#10006;"
            >
              <DeleteCompany />
            </MethodCard>
          </li>

          <li className="menuCard">
            <MethodCard
              name="Get All Companies"
              description="Get a list of all existing Companies"
              sign="&darr;"
            >
              <GetAllCompanies />
            </MethodCard>
          </li>

          <li className="menuCard">
            <MethodCard
              name="Get One Company"
              description="Get one company by it's ID"
              sign="&darr;"
            >
              <GetOneCompany />
            </MethodCard>
          </li>

          <li className="menuCard">
            <MethodCard
              name="Add Customer"
              description="Add customer to the DB"
              sign="&#10009;"
            >
              <AddCustomer />
            </MethodCard>
          </li>
          <li className="menuCard">
            <MethodCard
              name="Update Customer"
              description="Update existing customer"
              sign="?"
            >
              <UpdateCustomer />
            </MethodCard>
          </li>

          <li className="menuCard">
            <MethodCard
              name="Delete Customer"
              description="completely delete existing customer"
              sign="&#10006;"
            >
              <DeleteCustomer />
            </MethodCard>
          </li>

          <li
            className="menuCard"
            onClick={() => this.setState({ getAllCustomers: true })}
          >
            <MethodCard
              name="Get All Customers"
              description="Get all customers from the DB"
              sign="&darr;"
            >
              <GetAllCustomers />
            </MethodCard>
          </li>

          <li
            className="menuCard"
            onClick={() => this.setState({ getOneCustomer: true })}
          >
            <MethodCard
              name="Get One Customer"
              description="Get one customer from the DB"
              sign="&darr;"
            >
              <GetOneCustomer />
            </MethodCard>
          </li>
        </ul>
      </>
    );
  }
}

export default AdminMenu;
