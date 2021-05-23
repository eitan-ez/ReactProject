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
}

class AdminMenu extends Component<{}, AdminMenuState> {

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
          onClick={() => this.setState({ addCompany: true })}
        >
          <div className="menu-card__inner">
            {this.state.addCompany === true ? (
              <div className="menu-card__shape">
                <div className="menu-card__method">
                  <AddCompany />
                </div>
              </div>
            ) : (
              <>
                <div className="menu-card__trace">+</div>
                <div className="menu-card__name">
                  <h5>Add company</h5>
                  <p>Add a new company to the DB</p>{" "}
                </div>
              </>
            )}
          </div>
        </li>
        <li
          className="menu-card"
          onClick={() => this.setState({ updateCompany: true })}
        >
          <div className="menu-card__inner">
            {this.state.updateCompany === true ? (
              <div className="menu-card__shape">
                <div className="menu-card__method">
                  <UpdateCompany />
                </div>
              </div>
            ) : (
              <>
                <div className="menu-card__trace">^</div>
                <div className="menu-card__name">
                  <h5>Update Company</h5>
                  <p>Update existing company</p>
                </div>
              </>
            )}
          </div>
        </li>
        <li
          className="menu-card"
          onClick={() => this.setState({ deleteCompany: true })}
        >
          <div className="menu-card__inner">
            {this.state.deleteCompany === true ? (
              <div className="menu-card__shape">
                <div className="menu-card__method">
                  <DeleteCompany />
                </div>
              </div>
            ) : (
              <>
                <div className="menu-card__trace">-</div>
                <div className="menu-card__name">
                  <h5>Delete Company</h5>
                  <p>Completely delete existing company from DB</p>
                </div>
              </>
            )}
          </div>
        </li>
        <li
          className="menu-card"
          onClick={() => this.setState({ getAllCompanies: true })}
        >
          <div className="menu-card__inner">
            {this.state.getAllCompanies === true ? (
              <div className="menu-card__shape">
                <div className="menu-card__method">
                  <GetAllCompanies />
                </div>
              </div>
            ) : (
              <>
                <div className="menu-card__trace">^</div>
                <div className="menu-card__name">
                  <h5>Get All Companies</h5>
                  <p>Get a list of all existing Companies</p>
                </div>
              </>
            )}
          </div>
        </li>
        <li
          className="menu-card"
          onClick={() => this.setState({ getOneCompany: true })}
        >
          <div className="menu-card__inner">
            {this.state.getOneCompany === true ? (
              <div className="menu-card__shape">
                <div className="menu-card__method">
                  <GetOneCompany />
                </div>
              </div>
            ) : (
              <>
                <div className="menu-card__trace">~</div>
                <div className="menu-card__name">
                  <h5>Get One Company</h5>
                  <p>Get one company by it's ID</p>
                </div>
              </>
            )}
          </div>
        </li>
        <li
          className="menu-card"
          onClick={() => this.setState({ addCustomer: true })}
        >
          <div className="menu-card__inner">
            {this.state.addCustomer === true ? (
              <div className="menu-card__shape">
                <div className="menu-card__method">
                  <AddCustomer />
                </div>
              </div>
            ) : (
              <>
                <div className="menu-card__trace">^</div>
                <div className="menu-card__name">
                  <h5>Add Customer</h5>
                  <p>Add customer to the DB</p>
                </div>
              </>
            )}
          </div>
        </li>
        <li
          className="menu-card"
          onClick={() => this.setState({ updateCustomer: true })}
        >
          <div className="menu-card__inner">
            {this.state.updateCustomer === true ? (
              <div className="menu-card__shape">
                <div className="menu-card__method">
                  <UpdateCustomer />
                </div>
              </div>
            ) : (
              <>
                <div className="menu-card__trace">-</div>
                <div className="menu-card__name">
                  <h5>Update Customer</h5>
                  <p>Update existing customer</p>
                </div>
              </>
            )}
          </div>
        </li>

        <li
          className="menu-card"
          onClick={() => this.setState({ deleteCustomer: true })}
        >
          <div className="menu-card__inner">
            {this.state.deleteCustomer === true ? (
              <div className="menu-card__shape">
                <div className="menu-card__method">
                  <DeleteCustomer />
                </div>
              </div>
            ) : (
              <>
                <div className="menu-card__trace">-</div>
                <div className="menu-card__name">
                  <h5>Delete Customer</h5>
                  <p>completely delete existing customer</p>
                </div>
              </>
            )}
          </div>
        </li>

        <li
          className="menu-card"
          onClick={() => this.setState({ getAllCustomers: true })}
        >
          <div className="menu-card__inner">
            {this.state.getAllCustomers === true ? (
              <div className="menu-card__shape">
                <div className="menu-card__method">
                  <GetAllCustomers />
                </div>
              </div>
            ) : (
              <>
                <div className="menu-card__trace">^</div>
                <div className="menu-card__name">
                  <h5>Get All Customers</h5>
                  <p>Get all customers from the DB</p>
                </div>
              </>
            )}
          </div>
        </li>
        <li
          className="menu-card"
          onClick={() => this.setState({ getOneCustomer: true })}
        >
          <div className="menu-card__inner">
            {this.state.getOneCustomer === true ? (
              <div className="menu-card__shape">
                <div className="menu-card__method">
                  <GetOneCustomer />
                </div>
              </div>
            ) : (
              <>
                <div className="menu-card__trace">-</div>
                <div className="menu-card__name">
                  <h5>Get One Customer</h5>
                  <p>Get one customer from the DB</p>
                </div>
              </>
            )}
          </div>
        </li>
      </ul>
    );
  }
}

export default AdminMenu;
