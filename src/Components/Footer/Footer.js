import React from "react";
import "./Footer.css";
import logo from "../../Images/logo.png";
import { FiPhoneCall } from "react-icons/fi";
import { MdEmail } from "react-icons/md";

const Footer = () => {
    const currentYear = new Date().getFullYear()
  return (
    <div className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-sm-12 my-2">
            <img className="logo" src={logo} alt="" />
            <h5 className="text-start mt-3">
              <span className="me-4">
                <FiPhoneCall></FiPhoneCall>
              </span>
              09617885599
            </h5>
            <h5 className="text-start mt-3">
              <span className="me-4">
              <MdEmail></MdEmail>
              </span>
              support@daktarbhai.com.bd
            </h5>
          </div>
          <div className="col-md-3 col-sm-12 my-2">
            <p className="text-start">
              <small>About Us</small>
            </p>
            <p className="text-start">
              <small>How It Works</small>
            </p>
            <p className="text-start">
              <small>Features</small>
            </p>
            <p className="text-start">
              <small>Blogs</small>
            </p>
            <p className="text-start">
              <small>Contact Us</small>
            </p>
          </div>
          <div className="col-md-3 col-sm-12 my-2">
            <p className="text-start">
              <small>For Doctor</small>
            </p>
            <p className="text-start">
              <small>Terms & Conditions</small>
            </p>
            <p className="text-start">
              <small>Privacy Policy</small>
            </p>
            <p className="text-start">
              <small>FAQs</small>
            </p>
            <p className="text-start">
              <small>DaktarBhai for Enterprises</small>
            </p>
          </div>
        </div>
        <div className="mt-4">
            <p><small>Copyright &#169; {currentYear} DaktarBhai. All rights reserved.</small></p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
