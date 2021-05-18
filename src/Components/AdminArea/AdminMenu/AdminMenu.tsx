import { useHistory } from "react-router";
import { UserType } from "../../../Models/UserModel";
import store from "../../../Redux/Store";
import "./AdminMenu.css";

function AdminMenu(): JSX.Element {
  // if(!store.getState().AuthState.user.userType != UserType.ADMIN){

  // }
    return (
        <div className="AdminMenu">
			addCompany
            updateCompany
            deleteCompany
            getAllCompanies
            getOneCompany
            addCustomer
            updateCustomer
            deleteCustomer
            getAllCustomers
            getOneCustomer
        </div>
    );
}


export default AdminMenu;
