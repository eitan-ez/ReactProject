import {Redirect, Route, Switch} from "react-router";
import AdminMenu from "../../AdminArea/AdminMenu/AdminMenu";
import Main from "../Home/Main"
import CompanyMenu from "../../CompanyArea/AddCoupon/CompanyMenu/CompanyMenu";
import CustomerMenu from "../../CustomerArea/CustomerMenu/CustomerMenu";
import AddCompany from "../../AdminArea/AddCompany/AddCompany";
import store from "../../../Redux/Store";
import Logout from "../AuthArea/Logout/Logout";

function Routing(): JSX.Element {
    return (
        <div>
            <Switch>

                <Route path="/home" component={Main} exact/>
                <Route path="/admin" component={AdminMenu} exact/>
                <Route path="/company" component={CompanyMenu} exact/>
                <Route path="/customer" component={CustomerMenu} exact/>

                <Route path="/logout" component={Logout} exact />


                <Redirect from="/" to="/home" exact/>

            </Switch>


        </div>
    );
}

export default Routing;
