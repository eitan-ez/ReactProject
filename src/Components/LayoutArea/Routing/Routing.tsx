import { Route } from "react-router";
import Main from "../Main/Main"
import "./Routing.css";

function Routing(): JSX.Element {
    return (
        <div>
			<Route path="/home" component={Main} exact />

            
        </div>
    );
}

export default Routing;
