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
import { Redirect } from "react-router";

interface AdminMenuState {
  addCompany: boolean;
  updateCompany: boolean;
  deleteCompany: boolean;
  getAllCompanies: boolean;
  getOneCompany: boolean;
  updateCustomer: boolean;
  addCustomer: boolean;
  getOneCustomer: boolean;
  getAllCustomers: boolean;
  deleteCustomer: boolean;
  addCompanyHeight: number;
}

class AdminMenu extends Component<{}, AdminMenuState> {
  // const history = ;

  public constructor(props: {}) {
    super(props);
    this.state = {
      addCompany: false,
      updateCompany: false,
      deleteCompany: false,
      getAllCompanies: false,
      getOneCompany: false,
      updateCustomer: false,
      addCustomer: false,
      getOneCustomer: false,
      getAllCustomers: false,
      deleteCustomer: false,
      addCompanyHeight: 200,
    };
  }

  componentDidMount() {
    console.log(store.getState().authState.user?.userType);
    if (store.getState().authState.user?.userType !== UserType.ADMIN) {
      notify.error("please log in in order to add a product");
      console.log("a");
    }
  }
  public render(): JSX.Element {
    return (
      <ul className="AdminMenu">
        <li
          className="menu-card"
          onClick={() =>
            this.setState({ addCompany: true, addCompanyHeight: 400 })
          }
        >
          <div
            className="menu-card__inner"
            style={{ width: "{this.state.addCompanyWidth}px" }}
          >
            <div className="menu-card__shape">
              {this.state.addCompany === true && (
                <div className="menu-card__method">
                  <AddCompany />
                </div>
              )}
              <div className="menu-card__trace">
                {this.state.addCompany === false && "+"}
              </div>
            </div>

            {this.state.addCompany === false && (
              <div className="menu-card__name">
                {" "}
                <h5>Add company</h5>
                <p>Add a new company to the DB</p>{" "}
              </div>
            )}
          </div>
        </li>
        <li
          className="menu-card"
          onClick={() => this.setState({ updateCompany: true })}
        >
          <div className="menu-card__inner">
            <div className="menu-card__shape">
              {this.state.updateCompany === true && (
                <div className="menu-card__method">
                  <UpdateCompany />
                </div>
              )}
              <div className="menu-card__trace">
                {this.state.updateCompany === false && "^"}
              </div>
            </div>

            {this.state.updateCompany === false && (
              <div className="menu-card__name">
                <h5>Update Company</h5>
                <p>Update existing company</p>
              </div>
            )}
          </div>
        </li>
        <li
          className="menu-card"
          onClick={() => this.setState({ deleteCompany: true })}
        >
          <div className="menu-card__inner">
            <div className="menu-card__shape">
              {this.state.deleteCompany === true && (
                <div className="menu-card__method">
                  <DeleteCompany />
                </div>
              )}
              <div className="menu-card__trace">
                {this.state.deleteCompany === false && "-"}
              </div>
            </div>
            {this.state.deleteCompany === false && (
              <div className="menu-card__name">
                <h5>Delete Company</h5>
                <p>Completely delete existing company from DB</p>
              </div>
            )}
          </div>
        </li>
        <li
          className="menu-card"
          onClick={() => this.setState({ getAllCompanies: true })}
        >
          <div className="menu-card__inner">
            <div className="menu-card__shape">
              {this.state.getAllCompanies === true && (
                <div className="menu-card__method">
                  <GetAllCompanies />
                </div>
              )}
              <div className="menu-card__trace">
                {this.state.getAllCompanies === false && "^"}
              </div>
            </div>

            {this.state.getAllCompanies === false && (
              <div className="menu-card__name">
                <h5>Get All Companies</h5>
                <p>Get a list of all existing Companies</p>
              </div>
            )}
          </div>
        </li>
        <li
          className="menu-card"
          onClick={() => this.setState({ getOneCompany: true })}
        >
          <div className="menu-card__inner">
            <div className="menu-card__shape">
              {this.state.getOneCompany === true && (
                <div className="menu-card__method">
                  <GetOneCompany />
                </div>
              )}
              <div className="menu-card__trace">
                {this.state.getOneCompany === false && "-"}
              </div>
            </div>

            {this.state.getOneCompany === false && (
              <div className="menu-card__name">
                <h5>Get One Company</h5>
                <p>Get one company by it's ID</p>
              </div>
            )}
          </div>
        </li>
        <li
          className="menu-card"
          onClick={() => this.setState({ addCustomer: true })}
        >
          <div className="menu-card__inner">
            <div className="menu-card__shape">
              {this.state.addCustomer === true && (
                <div className="menu-card__method">
                  <AddCustomer />
                </div>
              )}
              <div className="menu-card__trace">
                {this.state.addCustomer === false && "^"}
              </div>
            </div>

            {this.state.addCustomer === false && (
              <div className="menu-card__name">
                <h5>Add Customer</h5>
                <p>Add customer to the DB</p>
              </div>
            )}
          </div>
        </li>
        <li
          className="menu-card"
          onClick={() => this.setState({ updateCustomer: true })}
        >
          <div className="menu-card__inner">
            <div className="menu-card__shape">
              {this.state.updateCustomer === true && (
                <div className="menu-card__method">
                  <UpdateCustomer />
                </div>
              )}
              <div className="menu-card__trace">
                {this.state.updateCustomer === false && "-"}
              </div>
            </div>

            {this.state.updateCustomer === false && (
              <div className="menu-card__name">
                <h5>Update Customer</h5>
                <p>Update existing customer</p>
              </div>
            )}
          </div>
        </li>{" "}
        <li
          className="menu-card"
          onClick={() => this.setState({ deleteCustomer: true })}
        >
          <div className="menu-card__inner">
            <div className="menu-card__shape">
              {this.state.deleteCustomer === true && (
                <div className="menu-card__method">
                  <DeleteCustomer />
                </div>
              )}
              <div className="menu-card__trace">
                {this.state.deleteCustomer === false && "-"}
              </div>
            </div>

            {this.state.deleteCustomer === false && (
              <div className="menu-card__name">
                <h5>Delete Customer</h5>
                <p>completely delete existing customer</p>
              </div>
            )}
          </div>
        </li>
        <li
          className="menu-card"
          onClick={() => this.setState({ getAllCustomers: true })}
        >
          <div className="menu-card__inner">
            <div className="menu-card__shape">
              {this.state.getAllCustomers === true && (
                <div className="menu-card__method">
                  <GetAllCustomers />
                </div>
              )}
              <div className="menu-card__trace">
                {this.state.getAllCustomers === false && "^"}
              </div>
            </div>

            {this.state.getAllCustomers === false && (
              <div className="menu-card__name">
                <h5>Get All Customers</h5>
                <p>Get all customers from the DB</p>
              </div>
            )}
          </div>
        </li>
        <li
          className="menu-card"
          onClick={() => this.setState({ getOneCustomer: true })}
        >
          <div className="menu-card__inner">
            <div className="menu-card__shape">
              {this.state.getOneCustomer === true && (
                <div className="menu-card__method">
                  <GetOneCustomer />
                </div>
              )}
              <div className="menu-card__trace">
                {this.state.getOneCustomer === false && "-"}
              </div>
            </div>

            {this.state.getOneCustomer === false && (
              <div className="menu-card__name">
                <h5>Get One Customer</h5>
                <p>Get one customer from the DB</p>
              </div>
            )}
          </div>
        </li>
      </ul>
    );
  }
}

export default AdminMenu;
