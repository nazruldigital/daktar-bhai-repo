import React, { useEffect, useState } from "react";
import Service from "../Service/Service";
import "./Services.css";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("FakeData.json")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div>
      <h2 id="services" className="my-4">Services</h2>
      <div className="services">
          {services.map((service) => (
        <Service key={service.id} service={service}></Service>
      ))}
      </div>
      
    </div>
  );
};

export default Services;