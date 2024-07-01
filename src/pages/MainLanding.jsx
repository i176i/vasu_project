import React from "react";
import Header from "../components/LandingPage/Header";
import Banner from "../components/LandingPage/Banner";
import ScrollableImageBanners from "../components/LandingPage/ScrollableImageBanners";
import BrandScroll from "../components/LandingPage/BrandScroll";
import ExperienceSection from "../components/LandingPage/ExperienceSection";
import InfoGraphicsSection from "../components/LandingPage/InfoGraphicsSection";
import CalendlySection from "../components/LandingPage/CalendlySection";
import SwiperVideo from "../components/LandingPage/SwiperVideo";
import Footer from "../components/LandingPage/Footer";

function MainLanding() {
  return (
    <div className="mainlanding">
        <Header />
        <Banner />
        <ScrollableImageBanners/>
        <BrandScroll/>
        <ExperienceSection />
        <InfoGraphicsSection />
        <SwiperVideo />
        <CalendlySection />
        <Footer/>
    </div>
  );
}

export default MainLanding;
