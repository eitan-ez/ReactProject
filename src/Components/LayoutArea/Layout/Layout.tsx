import { BrowserRouter } from "react-router-dom";
import AuthMenu from "../AuthArea/AuthMenu/AuthMenu";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Home/Main";
import Routing from "../Routing/Routing";
import "./Layout.css";

function Layout(): JSX.Element {
  return (
    <BrowserRouter>
      {" "}
      {}
      <div className="Layout">
        <header>
          <Header />
        </header>

        <main>
          <Routing />
        </main>

        <footer>
          <Footer />
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default Layout;
