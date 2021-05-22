import { Component, useEffect } from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import { UserType } from "../../../Models/UserModel";
import store from "../../../Redux/Store";
import AddCompany from "../AddCompany/AddCompany";
import AddCustomer from "../AddCustomer/AddCustomer";
import DeleteCompany from "../DeleteCompany/DeleteCompany";
import DeleteCustomer from "../DeleteCustomer/DeleteCustomer";
import GetAllCustomers from "../GetAllCustomers/GetAllCustomers";
import GetOneCompany from "../getOneComapny/getOneCompany";
import GetOneCustomer from "../getOneCustomer/getOneCustomer";
import UpdateCompany from "../UpdateCompany/UpdateCompany";
import UpdateCustomer from "../UpdateCustomer/UpdateCustomer";
import GetAllCompanies from "../GetAllCompanies/GetAllCompanies";
import "./AdminMenu.scss";

interface AdminMenuState {
	addCompany: boolean;
}

class AdminMenu extends Component<{}, AdminMenuState> {
    // history = useHistory();

    public constructor(props: {}) {
        super(props);
        this.state = {
			addCompany: false
        };
    }

    public render(): JSX.Element {
           // useEffect(() => {
            // if(store.getState().authState.user?.userType === UserType.ADMIN){
            //   console.log("aaaa");
            //   // notify.error("please log in in order to add a product")
            //   alert("pls log in");
            //   history.push("/home");
            // }
            // });
            return (
              <div className="AdminMenu">
                <div>
                  {/* <AddCompany /> */}
                  <div className="menu-card" onClick={() => this.setState({addCompany: true})}>
                    <div className="menu-card__inner">
                      <div className="menu-card__shape">
                        <div className="menu-card__trace">{this.state.addCompany === false && "+"}</div>
                        <div className="menu-card__method">{this.state.addCompany === true && <div><AddCompany /> </div>}</div>
                      </div>
                      <div className="menu-card__name">
                      {this.state.addCompany === false &&<> <h5>Add company</h5>
                        <p>Add a new company to the DB</p> </>}
                      </div>
                    </div>
                  </div>
        
                  <br />
                  <UpdateCompany />
                  <br />
                  <DeleteCompany />
                  <br />
                  <GetAllCompanies />
                  <br />
                  <GetOneCompany />
                  <br />
                  <AddCustomer />
                  <br />
                  <UpdateCustomer />
                  <br />
                  <DeleteCustomer />
                  <br />
                  <GetAllCustomers />
                  <br />
                  <GetOneCustomer />
                </div>
              </div>
            );
          }
        
}

export default AdminMenu;
