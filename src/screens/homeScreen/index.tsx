import React, { Fragment } from "react";
import Footer from "../../components/footer";
import FirstStep from "../../components/bookingFirstStep";
import AboutUs from "../../components/aboutUs";
import TestimonalSection from "../../components/whatClientsSay";
import WhyChooseSection from "../../components/whyChooseUs";
import HomeFooter from "../../components/ourTopCabRoots";
import FloateringButton from "../../components/floatingButton";
import BookingBanner from "../../components/bookingBanner";
import HomeBanner from "../../components/HomeBannerSlider";
import NavBar from "../../components/navBar";
import OfferSections from "../../components/offerSections";
import PopularDestination from "../../components/popularDestinationss";
import OurExpertise from "../../components/ourExpertise";
import NavigationBar from "../../components/navBar";

function HomeScreen() {
  return (
    <Fragment>
      <FirstStep />
      <HomeBanner />
      <BookingBanner />
      <OfferSections />
      <WhyChooseSection />
      <OurExpertise />
      <PopularDestination />
      <AboutUs />
      <TestimonalSection />
      <HomeFooter />
    </Fragment>
  );
}

export default HomeScreen;
