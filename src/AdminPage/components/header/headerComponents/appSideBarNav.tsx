import React, { useEffect } from "react";
import { faLocationDot } from "@fortawesome/free-solid-svg-icons/faLocationDot";
import {
  CDBSidebar,
  CDBSidebarContent,
  CDBSidebarFooter,
  CDBSidebarHeader,
  CDBSidebarMenu,
  CDBSidebarMenuItem,
  CDBBadge,
} from "cdbreact";
import { NavLink } from "react-router-dom";
import "./navbar.scss";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { FaCar } from "react-icons/fa";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  setNavBooking,
  setNavOngoings,
  setNavCompletedTrips,
  setNavCancelledTrips,
  setNavBookingAttempts,
  setNavHome,
  setNavLocation,
  setNavLoginAttempts,
  setNavOffers,
  setNavUsers,
  setNavDrivers,
} from "../../../../store/navigation";

const SidebarNavigation = () => {
  const dispatch = useDispatch();
  const nav_status = useSelector((state: any) => {
    return state.navigation;
  });

  const setNavUser = () => {
    dispatch(setNavUsers());
  };
  const setNavLocations = () => {
    dispatch(setNavLocation());
  };
  const setNavHomes = () => {
    dispatch(setNavHome());
  };
  const setNavBookings = () => {
    dispatch(setNavBooking());
  };
  const setNavOngoing = () => {
    dispatch(setNavOngoings());
  };
  const setNavCompletedTrip = () => {
    dispatch(setNavCompletedTrips());
  };
  const setNavCancelledTrip = () => {
    dispatch(setNavCancelledTrips());
  };
  const setNavOffer = () => {
    dispatch(setNavOffers());
  };
  const setNavBookingAttempt = () => {
    dispatch(setNavBookingAttempts());
  };
  const setNavLoginAttempt = () => {
    dispatch(setNavLoginAttempts());
  };
  const setNavDriver = () => {
    dispatch(setNavDrivers());
  };
  const setNavCars = () => {
    dispatch(setNavDrivers());
  };

  return (
    <div>
      <CDBSidebar
        textColor="#fff"
        backgroundColor="#68af44"
        className=""
        maxWidth="300px"
        minWidth="80px"
        breakpoint={768}
        toggled
      >
        <CDBSidebarHeader
          prefix={<i className="fa fa-bars" />}
          className="border-bottom"
        >
          <div
            className="container"
            style={{ display: "flex", alignItems: "center" }}
          >
            <h6 className="ms-2">PiccoCabs ™</h6>
          </div>
        </CDBSidebarHeader>

        <CDBSidebarContent className="sidebar-content mx-0">
          <CDBSidebarMenu>
            <NavLink
              to="bookings"
              style={({ isActive }) =>
                isActive
                  ? { fontWeight: "bolder", color: "#FFFF99" }
                  : undefined
              }
              onClick={setNavBookings}
            >
              <CDBSidebarMenuItem
                icon="address-book"
                iconSize="lg"
                className="nav-link nav-link-hover"
              >
                Bookings
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              to="ongoing"
              style={({ isActive }) =>
                isActive
                  ? { fontWeight: "bolder", color: "#FFFF99" }
                  : undefined
              }
              onClick={setNavOngoing}
            >
              <CDBSidebarMenuItem
                icon=" fa-rocket"
                iconSize="lg"
                className="nav-link"
              >
                OnGoing Trips
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              to="completedTrips"
              style={({ isActive }) =>
                isActive
                  ? { fontWeight: "bolder", color: "#FFFF99" }
                  : undefined
              }
              onClick={setNavCompletedTrip}
            >
              <CDBSidebarMenuItem
                icon=" fa-check-square "
                iconSize="lg"
                className="nav-link"
              >
                Completed Trips
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              to="cancelledTrips"
              style={({ isActive }) =>
                isActive
                  ? { fontWeight: "bolder", color: "#FFFF99" }
                  : undefined
              }
              onClick={setNavCancelledTrip}
            >
              <CDBSidebarMenuItem
                icon=" fa fa-thumbs-down"
                iconSize="lg"
                className="nav-link"
              >
                Cancelled Trips34os
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              to="users"
              style={({ isActive }) =>
                isActive
                  ? { fontWeight: "bolder", color: "#FFFF99" }
                  : undefined
              }
              onClick={setNavUser}
            >
              <CDBSidebarMenuItem
                icon="user"
                iconSize="lg"
                className="nav-link"
              >
                Users
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              to="locations"
              style={({ isActive }) =>
                isActive
                  ? { fontWeight: "bolder", color: "#FFFF99" }
                  : undefined
              }
              onClick={setNavLocations}
            >
              <CDBSidebarMenuItem
                icon=" fa-map-marker "
                className="nav-link"
                iconSize="lg"
              >
                Locations1234567
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              to="offers"
              style={({ isActive }) =>
                isActive
                  ? { fontWeight: "bolder", color: "#FFFF99" }
                  : undefined
              }
              onClick={setNavOffer}
            >
              <CDBSidebarMenuItem
                icon="shopping-bag"
                iconSize="lg"
                className="nav-link"
              >
                Offers
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              to="booking-attempts"
              style={({ isActive }) =>
                isActive
                  ? { fontWeight: "bolder", color: "#FFFF99" }
                  : undefined
              }
              onClick={setNavBookingAttempt}
            >
              <CDBSidebarMenuItem
                icon="chart-line"
                className="nav-link"
                iconSize="lg"
              >
                Booking Attempts
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              to="login-attempts"
              style={({ isActive }) =>
                isActive
                  ? { fontWeight: "bolder", color: "#FFFF99" }
                  : undefined
              }
              onClick={setNavLoginAttempt}
            >
              <CDBSidebarMenuItem
                icon=" fa-street-view "
                className="nav-link"
                iconSize="lg"
              >
                Login Attempts
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              to="driver-List"
              end
              style={({ isActive }) =>
                isActive
                  ? { fontWeight: "bolder", color: "#FFFF99" }
                  : undefined
              }
              onClick={setNavDriver}
            >
              <CDBSidebarMenuItem
                icon=" fa-universal-access "
                iconSize="lg"
                className="nav-link"
              >
                Drivers
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              to="cars"
              end
              style={({ isActive }) =>
                isActive
                  ? { fontWeight: "bolder", color: "#FFFF99" }
                  : undefined
              }
              onClick={setNavCars}
            >
              <CDBSidebarMenuItem icon="car" iconSize="lg" className="nav-link">
                Cars
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              to="dashboard"
              end
              style={({ isActive }) =>
                isActive
                  ? { fontWeight: "bolder", color: "#FFFF99" }
                  : undefined
              }
              onClick={setNavHomes}
            >
              <CDBSidebarMenuItem
                icon="table"
                iconSize="lg"
                className="nav-link"
              >
                Dashboard
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        <CDBSidebarHeader>
          <div className="container align-items-end ">
            <p className="text-wrap fw-normal" style={{ fontSize: "12px" }}>
              {" "}
              Copyright © Picco Cabs. All rights reserved.
            </p>
          </div>
        </CDBSidebarHeader>
      </CDBSidebar>
    </div>
  );
};

export default SidebarNavigation;
