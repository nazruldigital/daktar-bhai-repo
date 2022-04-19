import React from "react";
import { Carousel } from "react-bootstrap";
import banner1 from "../../Images/banner/banner1.png";
import banner2 from "../../Images/banner/banner2.png";
import banner3 from "../../Images/banner/banner3.png";

const Banner = () => {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={banner1} alt="First slide" />
        <Carousel.Caption>
          <h3 className="text-black">Medical Services</h3>
          <p className="text-black ">
          Every mountain top is within reach if you just keep climbing.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={banner2} alt="Second slide" />

        <Carousel.Caption>
          <h3 className="text-white">The Best Surgeons</h3>
          <p className="text-white">
          Every mountain top is within reach if you just keep climbing.
          </p>
        </Carousel.Caption>
      </Carousel.Item> 
      <Carousel.Item>
        <img className="d-block w-100" src={banner3} alt="Third slide" />
        <Carousel.Caption>
          <h3 className="text-black">We care about your health!</h3>
          <p className="text-black">
          Every mountain top is within reach if you just keep climbing.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
  );
};

export default Banner;
