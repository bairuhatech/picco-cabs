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
import { navigationActions } from "../../../../store/navigation";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const SidebarNavigation = () => {
  const dispatch = useDispatch();
  const nav_status = useSelector((state: any) => {
    return state.navigation;
  });

  const setNavUsers = () => {
    dispatch(navigationActions.setNavUsers());
  };
  const setNavLocations = () => {
    dispatch(navigationActions.setNavLocation());
  };
  const setNavHome = () => {
    dispatch(navigationActions.setNavHome());
  };
  const setNavBooking = () => {
    dispatch(navigationActions.setNavBooking());
  };
  const setNavOffers = () => {
    dispatch(navigationActions.setNavOffers());
  };
  const setNavBookingAttempt = () => {
    dispatch(navigationActions.setNavBookingAttempts());
  };
  const setNavLoginAttempts = () => {
    dispatch(navigationActions.setNavLoginAttempts());
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
              to=""
              end
              style={({ isActive }) =>
                isActive
                  ? { fontWeight: "bolder", color: "#FFFF99" }
                  : undefined
              }
              onClick={setNavHome}
            >
              <CDBSidebarMenuItem
                icon="home"
                iconSize="lg"
                className="nav-link"
              >
                Dashboard
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              to="bookings"
              style={({ isActive }) =>
                isActive
                  ? { fontWeight: "bolder", color: "#FFFF99" }
                  : undefined
              }
              onClick={setNavBooking}
            >
              <CDBSidebarMenuItem
                icon="table"
                iconSize="lg"
                className="nav-link nav-link-hover"
                // suffix={
                //   <CDBBadge className="rounded-pill p-0 m-0 px-3 bg-light text-dark fw-bold">
                //     6
                //   </CDBBadge>
                // }
              >
                Bookings
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              to="users"
              style={({ isActive }) =>
                isActive
                  ? { fontWeight: "bolder", color: "#FFFF99" }
                  : undefined
              }
              onClick={setNavUsers}
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
                icon="table"
                className="nav-link"
                iconSize="lg"
              >
                Locations
              </CDBSidebarMenuItem>
            </NavLink>
            <NavLink
              to="offers"
              style={({ isActive }) =>
                isActive
                  ? { fontWeight: "bolder", color: "#FFFF99" }
                  : undefined
              }
              onClick={setNavOffers}
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
                // suffix={
                //   <CDBBadge className="rounded-pill p-0 m-0 px-3 bg-light text-dark fw-bold">
                //     4
                //   </CDBBadge>
                // }
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
              onClick={setNavLoginAttempts}
            >
              <CDBSidebarMenuItem
                icon="user"
                className="nav-link"
                iconSize="lg"
                // suffix={
                //   <CDBBadge className="rounded-pill p-0 m-0 px-3 bg-light text-dark fw-bold">
                //     2
                //   </CDBBadge>
                // }
              >
                Login Attempts
              </CDBSidebarMenuItem>
            </NavLink>
          </CDBSidebarMenu>
        </CDBSidebarContent>

        {/* <CDBSidebarFooter className='text-center'>
          <div className="sidebar-btn-wrapper" style={{ padding: "20px 5px" }}>
            Sidebar Footer
          </div>
        </CDBSidebarFooter> */}
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
