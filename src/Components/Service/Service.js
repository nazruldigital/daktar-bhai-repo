import React from "react";
import { useNavigate } from "react-router-dom";
import "./Service.css";

const Service = ({service}) => {
  const {id, name, about, img, price } = service;
  const navigate = useNavigate()
const navigateToServiceDetail = (id)=>{
  navigate(`/services/${id}`)
}
  return (
    <div className="service">
      <img src={img} alt="" />
      <h4 className="mt-3">{name}</h4>
      <p className="pragruph">
        <small>{about}</small>
      </p>
      <h5 className="text-start">Cost: <b>${price}</b></h5>
      <button className="btn" onClick={()=>navigateToServiceDetail(id)} >Add</button>
    </div>
  );
};

export default Service;
