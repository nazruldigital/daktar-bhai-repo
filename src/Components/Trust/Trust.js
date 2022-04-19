import React from "react";
import "./Trust.css";
import { AiOutlineArrowRight } from "react-icons/ai";
import img1 from '../../Images/trust/doctor1.jpg' 
import img2 from '../../Images/trust/doctor2.jpg' 
import img3 from '../../Images/trust/doctor3.jpg' 

const Trust = () => {
  return (
    <div className="container">
      <h2 className="text-start mb-4 mt-5">Why use Daktar Bhai?</h2>
      <div className="cart-container mb-5">
        <div className="cart">
          <img className="w-100" src={img1} alt="" />
          <h5 className="text-start ps-3 mt-3">Easy to use</h5>
          <p className="pragruph ps-3">
            <small>
            Get the best user experience on DocTime App. Search for a doctor and get an instant consultation.
            </small>
          </p>
          <button className="btn d-flex ps-4 text-primary">
            See more
            <span className="ps-2">
              <AiOutlineArrowRight />
            </span>
          </button>
        </div>
        <div className="cart">
          <img className="w-100" src={img2} alt="" />
          <h5 className="text-start ps-3 mt-3">Any Time</h5>
          <p className="pragruph ps-3">
            <small>
            Talk to a doctor within minutes. Our qualified network of doctors is available 24/7. You can get a consultation whenever you need.
            </small>
          </p>
          <button className="btn d-flex ps-4 text-primary">
            See more
            <span className="ps-2">
              <AiOutlineArrowRight />
            </span>
          </button>
        </div>
        <div className="cart">
          <img className="w-100" src={img3} alt="" />
          <h5 className="text-start ps-3 mt-3">Trusted</h5>
          <p className="pragruph ps-3">
            <small>
            DocTime's experienced doctors, specialists and therapists are selected carefully. Safety and quality is at the heart of everything we do.
            </small>
          </p>
          <button className="btn d-flex ps-4 text-primary">
            See more
            <span className="ps-2">
              <AiOutlineArrowRight />
            </span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Trust;
