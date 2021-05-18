import { useEffect } from "react";
import { useHistory } from "react-router";
import { UserType } from "../../../Models/UserModel";
import store from "../../../Redux/Store";
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
        </div>
    );
}


export default AdminMenu;
