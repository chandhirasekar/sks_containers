import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import About from "./About";
import Product from "./Product";
import Contact from "./Contact";

const Layout = () => {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <Product />
      <Contact />
    </div>
  );
};

export default Layout;
