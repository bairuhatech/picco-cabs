
import "./config/styleVariables.scss";
import HomeScreen from "./screens/homeScreen";
import { RouterProvider } from "react-router";
import { Fragment } from "react";
import { Navbar } from "react-bootstrap";
import NavigationBar from "./components/navBar";
import FloateringButton from "./components/floatingButton";
import PageNotFound from "./screens/errorPage";
import routes from "./routes";
import Footer from "./components/footer";



function App() {
  return (
    <Fragment>
      {/* <NavigationBar /> */}
      <RouterProvider router={routes} />
      {/* <Footer></Footer> */}
	  <FloateringButton/>
    </Fragment>
  );
}

export default App;
