import "./config/styleVariables.scss";
import HomeScreen from "./screens/homeScreen";
import { RouterProvider } from "react-router";
import { Fragment } from "react";
import { Navbar } from "react-bootstrap";
import NavigationBar from "./components/navBar";
import FloateringButton from "./components/floatingButton";
import PageNotFound from "./screens/errorPage";
import Footer from "./components/footer";
import { createBrowserRouter } from "react-router-dom";
import BookingScreen from "./screens/bookingscreen";
import LoginScreen from "./screens/loginScreen";
// import Modal from "../src/components/loginForm/index";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/booking",
    element: <BookingScreen />,
  },
  {
    path: "/index",
    element: <LoginScreen />,
  },
  // {
  //   path: "/loginForm",
  //   element: <Modal />,
  // },
  {
    path: "/404",
    element: <PageNotFound />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);
// import routes from "./routes";
// import Footer from "./components/footer";
// import { createBrowserRouter } from "react-router-dom";

function App() {
  return (
    <Fragment>
      {/* <NavigationBar /> */}
      <RouterProvider router={routes} />
      <Footer></Footer>
      <FloateringButton />
      {/* <Footer></Footer> */}
      <FloateringButton />
    </Fragment>
  );
}

export default App;
