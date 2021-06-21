import SignForm from "../AuthArea/SignForm/SignForm";
import { NavLink } from "react-router-dom";
import "./Main.css";

function Main(): JSX.Element {
  return (
    <div className="Main">
      <p className="text">
        Hello and welcome to my humble coupons project! <br />
        If you wish to learn how to use the site or contact me (hopefully both)
        go to the <NavLink to="/about">About Me</NavLink> page. <br /> <br />
        If you already know how to use it you probably wish to login: <br />
      </p>
      <div className="signForm">
        <SignForm />
      </div>
    </div>
  );
}

export default Main;
