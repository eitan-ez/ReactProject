import "./Page404.css"
import { NavLink } from "react-router-dom";

function Page404(): JSX.Element {
  return (
    <div className="Page404">
      <div>
        The page you are looking for doesn't exist :( <br/> you can try returning
        <NavLink to="/home">Home</NavLink> instead.
      </div>
      <img
        src="http://www.quickmeme.com/img/cb/cbc49c853e2e5b93734077b153d944cb491d6c277ada4a516153dbbe4446e208.jpg"
        title="Page not found"
        alt="A cool meme about page not found."
      />
    </div>
  );
}

export default Page404;
