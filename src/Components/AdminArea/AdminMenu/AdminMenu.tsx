import { useEffect } from "react";
import { useHistory } from "react-router";
import { NavLink } from "react-router-dom";
import { UserType } from "../../../Models/UserModel";
import store from "../../../Redux/Store";
import AddCompany from "../AddCompany/AddCompany";
import AddCustomer from "../AddCustomer/AddCustomer";
import DeleteCompany from "../DeleteCompany/DeleteCompany";
import DeleteCustomer from "../DeleteCustomer/DeleteCustomer";
import UpdateCompany from "../UpdateCompany/UpdateCompany";
import UpdateCustomer from "../UpdateCustomer/UpdateCustomer";
import "./AdminMenu.css";

function AdminMenu(): JSX.Element {
  const history = useHistory();

  useEffect(() => {
    // if(store.getState().authState.user?.userType === UserType.ADMIN){
    //   console.log("aaaa");
    //   // notify.error("please log in in order to add a product")
    //   alert("pls log in");
    //   history.push("/home");
    // }
  });
  return (
    <div className="AdminMenu">
      <div>
        <AddCompany />
        <br />
        <UpdateCompany />
        <br />
        <DeleteCompany />
        <br />
        getAllCompanies getOneCompany
        <br />
        <AddCustomer />
        <br />
        <UpdateCustomer />
        <br />
        <DeleteCustomer />
        <br />
        getAllCustomers getOneCustomer
      </div>
    </div>
  );
}

export default AdminMenu;
