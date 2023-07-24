import React from "react";
import FirstStep from "../../components/bookingFirstStep";
import { Fragment } from "react";
import Footer from "../../components/footer";

import NavigationBar from "../../components/navBar";

export default function BookingScreen() {
  return (
    <Fragment>
     <NavigationBar/>
      <FirstStep />
     
    </Fragment>
  );
}
