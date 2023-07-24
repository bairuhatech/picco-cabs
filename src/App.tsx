import React from "react";
import logo from "./logo.svg";
import "./config/styleVariables.scss";
import "bootstrap/dist/js/bootstrap.min.js";
import HomeScreen from "./screens/homeScreen";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import AboutUs from "./components/aboutUs";
import OfferSections from "./components/offerSections";
import BookingScreen from "./screens/bookingscreen";
import LoginScreen from "./screens/loginScreen";
import { Fragment } from "react";
import { Navbar } from "react-bootstrap";
import Footer from "./components/footer";
import FareDetails from "./components/fareDetails/index";
import NavigationBar from "./components/navBar";
import FloateringButton from "./components/floatingButton";
import PageNotFound from "./screens/errorPage";
import BookingSecondStep from "./components/bookingSecondStep";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "/booking",
    element: <BookingScreen />,
  },
  // {
  //   path: "/fareDetails",
  //   element: <FareDetails />,
  // },
  {
    path: "/login",
    element: <LoginScreen />,
  },
  {
    path: "/bookingSecondStep",
    element: <BookingSecondStep />,
  },
  {
    path: "/404",
    element: <PageNotFound />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
]);

function App() {
  return (
    <Fragment>
      <NavigationBar />
      <RouterProvider router={routes} />
      <Footer></Footer>
      <FloateringButton />
    </Fragment>
  );
}

export default App;
