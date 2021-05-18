import {Redirect, Route, Switch} from "react-router";
import AdminMenu from "../../AdminArea/AdminMenu/AdminMenu";
import Main from "../Home/Main"
import CompanyMenu from "../../CompanyArea/CompanyMenu";
import CustomerMenu from "../../CustomerArea/CustomerMenu";
import AddCompany from "../../AdminArea/AddCompany/AddCompany";

function Routing(): JSX.Element {
    return (
        <div>
            <Switch>

                <Route path="/home" component={Main} exact/>
                <Route path="/admin" component={AdminMenu} exact/>
                <Route path="/admin/add-company" component={AddCompany} exact/>
                <Route path="/company" component={CompanyMenu} exact/>
                <Route path="/customer" component={CustomerMenu} exact/>

                <Redirect from="/" to="/home" exact/>

            </Switch>


        </div>
    );
}

export default Routing;
