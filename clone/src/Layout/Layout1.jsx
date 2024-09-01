import React from "react";
import Header from "../Common/Header";
import { Outlet } from "react-router-dom";
import Footer from "../Components/Home/Footer";
import SubHeader from "../Components/Login/SubHeader";

const Layout1 = () => {
  return (
    <div>
      <Header />
      <SubHeader/>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layout1;
