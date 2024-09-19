import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";

const Root = () => {
  return (
    <div>
      <Outlet></Outlet>
    </div>
  );
};

export default Root;
