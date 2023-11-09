import "./config/styleVariables.scss";
import "bootstrap/dist/js/bootstrap.min.js";
import HomeScreen from "./screens/homeScreen";
import { RouterProvider } from "react-router";
import { createBrowserRouter } from "react-router-dom";
import BookingScreen from "./screens/bookingscreen";
import LoginScreen from "./screens/loginScreen";
import { Fragment } from "react";
import { Navbar } from "react-bootstrap";
import Footer from "./components/footer";
import NavigationBar from "./components/navBar";
import FloateringButton from "./components/floatingButton";
import PageNotFound from "./screens/errorPage";
import Login from "./AdminPage/components/loginPage";
import ProtectedRoute from "./AdminPage/components/protectedRoute";
import DashbordMain from "./AdminPage/components/header";
import AdminHomePage from "./AdminPage/components/adminDefaultPage";
import BookingAttempts from "./AdminPage/components/bookingAttempts";
import Bookings from "./AdminPage/components/bookings";
import LoginAttempts from "./AdminPage/components/loginAttempts";
import OfferSectionManagement from "./AdminPage/components/offerSectionManagement";
import Users from "./AdminPage/components/users";
import LocationsTable from "./AdminPage/components/locations";
import BookingSecondStep from "./components/bookingSecondStep";
import DriversTable from "./AdminPage/components/driverList";
import CarsTable from "./AdminPage/components/carsList";
import OnGoing from "./AdminPage/components/ongoing";
import Charts from "./AdminPage/components/charts";
import CompletedTrips from "./AdminPage/components/completedTrips";
import CancelledTrips from "./AdminPage/components/cancelledTrips";


const routes = createBrowserRouter([
  {
    path: "/",
    element: <HomeScreen />,
  },
  {
    path: "booking",
    element: <BookingScreen />,
  },
  {
    path: "/index",
    element: <LoginScreen />,
  },
  {
    path: "login",
    element: <LoginScreen />,
  },
  {
    path: "/404",
    element: <PageNotFound />,
  },
  {
    path: "*",
    element: <PageNotFound />,
  },
  {
    path: "/adminpanel/login",
    element: <Login />,
  },
  {
    path: "selectCars",
    element: <BookingSecondStep />,
  },
  {
    //admin panel protected section starts here
    path: "/adminpanel",
    element: <ProtectedRoute />,
    children: [
      {
        path: "",
        element: <DashbordMain />,
        children: [
          {
            index: true,
            element: <AdminHomePage />,
          },
          {
            path: "booking-attempts",
            element: <BookingAttempts />,
          },
          {
            path: "bookings",
            element: <Bookings />,
          },
          {
            path: "login-attempts",
            element: <LoginAttempts />,
          },
          {
            path: "dashboard",
            element: <Charts/>,
          },
          {
            path: "offers",
            element: <OfferSectionManagement />,
          },
          {
            path: "users",
            element: <Users />,
          },
          {
            path: "locations",
            element: <LocationsTable />,
          },
          {
            path: "driver-List",
            element: <DriversTable/>,
          },
          {
            path: "cars",
            element: <CarsTable/>,
          },
          {
            path: "ongoing",
            element: <OnGoing/>,
          },
          {
            path: "completedTrips",
            element: <CompletedTrips/>,
          },
          {
            path: "cancelledTrips",
            element: <CancelledTrips/>,
          },
        ],
      },
    ],
  },
]);

export default routes;
