import React from "react";

import logo from "../assets/iac_logo_NEW_No_Web.png";

const Hero = () => (
  <div className="text-center hero my-5">
    <img className="mb-3 app-logo" src={logo} alt="React logo" width="120" />
    <h1 className="mb-4">IAC Pricing Portal</h1>

    <p className="lead">
      This is an Application for Customers to get Product Pricing 
    </p>
  </div>
);

export default Hero;
