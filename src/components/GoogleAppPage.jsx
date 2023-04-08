import React from "react";
import Header from "./Header";
import SearchSection from "./SearchSection";
import Footer from "./Footer";

const GoogleAppPage = () => {
  return (
    <>
     <div style={{height: '100%', boxSizing: 'border-box'}}> 
    <Header />
    <SearchSection />
    <Footer />
  </div>;
    </>
  )
};

export default GoogleAppPage;
