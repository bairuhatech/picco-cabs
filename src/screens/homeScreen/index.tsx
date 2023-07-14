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

function HomeScreen() {
  return (
    <Fragment>
      <HomeBanner></HomeBanner>
      <FirstStep></FirstStep>
      <BookingBanner></BookingBanner>
      <AboutUs></AboutUs>
      <TestimonalSection></TestimonalSection>
      <WhyChooseSection></WhyChooseSection>
      <HomeFooter></HomeFooter>
      <Footer />
      <FloateringButton></FloateringButton>
    </Fragment>
  );
}

export default HomeScreen;
