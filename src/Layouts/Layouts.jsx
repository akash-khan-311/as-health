import { Navbar } from "@material-tailwind/react";
import React from "react";
import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import NavManu from "../components/NavMenu/NavManu";

const Layouts = () => {
  return (
    <div>
      <Outlet />
      <Footer />
    </div>
  );
};

export default Layouts;
