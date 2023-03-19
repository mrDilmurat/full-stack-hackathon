import React from "react";
import { Outlet } from "react-router-dom";
import AllLinks from "../AllLinks/AllLinks";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";




const Layout = () => {
  return (
    <>
      <Header />
      <AllLinks />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
