import React, { Fragment } from "react";
import Footer from "../../components/footer";
import NavBar from "../../components/navBar";
import OfferSections from "../../components/offerSections";
import PopularDestination from "../../components/popularDestinationss";
import OurExpertise from "../../components/ourExpertise";
import NavigationBar from "../../components/navBar";
import FirstStep from "../../components/bookingFirstStep";
import HomeBanner from "../../components/HomeBannerSlider";
import BookingBanner from "../../components/bookingBanner";
import WhyChooseSection from "../../components/whyChooseUs";
import AboutUs from "../../components/aboutUs";
import TestimonalSection from "../../components/whatClientsSay";
import HomeFooter from "../../components/ourTopCabRoots";
import Form from "../../components/bookingSecondStep";

function HomeScreen() {
  return (
    <Fragment>
      <NavigationBar />
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
      <Footer />
    </Fragment>
  );
}

export default HomeScreen;
