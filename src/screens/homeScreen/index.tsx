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

function HomeScreen() {
  return (
    <Fragment>
      <NavBar></NavBar>
      <HomeBanner></HomeBanner>
      <FirstStep></FirstStep>
      <BookingBanner></BookingBanner>
      <OfferSections></OfferSections>
      <WhyChooseSection></WhyChooseSection>
      <OurExpertise></OurExpertise>
      <PopularDestination></PopularDestination>
      <AboutUs></AboutUs>
      <TestimonalSection></TestimonalSection>
      <HomeFooter></HomeFooter>
      <Footer />
      <FloateringButton></FloateringButton>
    </Fragment>
  );
}

export default HomeScreen;
