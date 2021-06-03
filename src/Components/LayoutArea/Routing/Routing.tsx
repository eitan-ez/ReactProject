import {Redirect, Route, Switch} from "react-router";
import AdminMenu from "../../AdminArea/AdminMenu/AdminMenu";
import Main from "../Home/Main"
import CompanyMenu from "../../CompanyArea/CompanyMenu/CompanyMenu";
import CustomerMenu from "../../CustomerArea/CustomerMenu/CustomerMenu";
import Logout from "../AuthArea/Logout/Logout";
import Page404 from "../../SharedArea/Page404/Page404";

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

                <Route component={Page404} />


            </Switch>


        </div>
    );
}

export default Routing;
