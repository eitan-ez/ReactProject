import { BrowserRouter } from "react-router-dom";
import Header from "../Header/Header";
import "./Layout.css";

function Layout(): JSX.Element {
    return (
        <BrowserRouter> {}
            <div className="Layout">

                <header>
                    <Header />
                </header>

                <aside>
                    Menu
                </aside>

                <main>
                    Main
                </main>

                <footer>
                    Footer
                </footer>

            </div>
        </BrowserRouter>
    );
}

export default Layout;
