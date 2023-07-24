import React from "react";
import SidebarNavigation from "./headerComponents/appSideBarNav";
import { Fragment } from "react";
import AppHeader from "./headerComponents/appHeader";
import BookingAttempts from "../bookingAttempts";
import { Outlet } from "react-router-dom";
import AddLocationModal from "../modals/addNewLocation";

function DashbordMain() {
  return (
    <Fragment>
      <div
        style={{ display: "flex", height: "100vh", overflow: "scroll initial" }}
      >
        <SidebarNavigation />
        <div className="w-100">
          <AppHeader />
          <div className="px-3 py-3">
            <div className="border rounded">
              <Outlet />
            </div>
          </div>
        </div>
      </div>
      <AddLocationModal />
    </Fragment>
  );
}

export default DashbordMain;
