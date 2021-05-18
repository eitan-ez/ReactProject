import { Redirect, Route, Switch } from "react-router";
import AdminMenu from "../../AdminArea/AdminMenu/AdminMenu";
import Main from "../Home/Main"

function Routing(): JSX.Element {
    return (
        <div>
            <Switch>
                
			<Route path="/home" component={Main} exact />
			<Route path="/admin" component={AdminMenu} exact />


            <Redirect from="/" to="/home" exact />

            </Switch>

            
        </div>
    );
}

export default Routing;
