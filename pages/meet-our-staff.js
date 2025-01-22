import React from "react";
import Layout from "../components/layout";
import HeaderOne from "../components/header/header-one";
import StickyHeader from "../components/header/sticky-header";
import PageHeader from "../components/page-header";
import TeamPage from "../components/team/staff-page";
import Footer from "../components/footer";
import MenuContextProvider from "../context/menu-context";
import SearchContextProvider from "../context/search-context";

const Contact = () => {
  return (
    <MenuContextProvider>
      <SearchContextProvider>
        <Layout pageTitle="Prisoners Aid ACT">
          <HeaderOne />
          <StickyHeader />
          <PageHeader title="Meet Our Staff" crumbTitle="Meet Our Staff" />
          <TeamPage />
          <Footer />
        </Layout>
      </SearchContextProvider>
    </MenuContextProvider>
  );
};

export default Contact;
