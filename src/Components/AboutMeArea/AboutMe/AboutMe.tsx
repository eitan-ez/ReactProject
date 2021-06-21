import "./AboutMe.css";
import { NavLink } from "react-router-dom";

function AboutMe(): JSX.Element {
  return (
    <div className="AboutMe">
      <p>
        My name is Eitan Etzion and this site is a showcase for my capabilities.
        The frontend uses React (TS) and the backend runs on Java. <br />
      </p>
      Backend git: &nbsp;
      <a href="https://github.com/eitan-ez/CouponsWebsite">here</a>
      <br />
      Frontend git: &nbsp;
      <a href="https://github.com/eitan-ez/ReactProject">here</a>
      <br />
      And contact me &nbsp;
      <a href="https://www.linkedin.com/in/eitan-etzion-217b8a1b1/">
        in LinkedIn
      </a>
      <p>
        How to use this site: <br />
        Login as admin, the email is "admin@admin.com" and the password is
        "admin".
      </p>
      <p>
        After the login, you'll be redirected to the Admin Area, where you'll be
        able to add customers and companies. add them and you'll be able to
        login as one of them, add and delete coupons (as a company) or buy
        coupons (as a customer). Enjoy!
      </p>
      <NavLink to="/home">Link Home</NavLink>, cause you need one.
    </div>
  );
}

export default AboutMe;
