import React from "react";
import Layout from "../components/layout";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import MainSlider from "../components/slider/main-slider";
import VideoCardTwo from "../components/videos/video-card-two";
import ServiceOne from "../components/services/service-one";
import ServiceTwo from "../components/services/service-two";
import CausesHome from "../components/causes/causes-home";
import Footer from "../components/footer";
import MenuContextProvider from "../context/menu-context";
import SearchContextProvider from "../context/search-context";

const HomeOne = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
      <Layout pageTitle="Prisoners Aid ACT">
          <HeaderOne />
          <StickyHeader />
          <MainSlider />
          <ServiceOne />
          <ServiceTwo />
          <CausesHome />
          <VideoCardTwo />
          <br/>
          <br/>
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default HomeOne;
