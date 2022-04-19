import React from "react";
import { useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./ChackOut.css";

const ChackOut = () => {
  const { chackout } = useParams();

  const handleSubmit = (event) => {
    event.preventDefault();
    toast.success("Thanks For Booking", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };

  return (
    <div>
      <h2>Chackout Here: {chackout}</h2>
      <form className="form" onSubmit={handleSubmit}>
        <input type="text" name="name" id="" placeholder="Your Name" required />
        <input
          type="email"
          name="email"
          id=""
          placeholder="Your Email"
          required
        />
        <input
          type="text"
          name="address"
          id=""
          placeholder="Your Address"
          required
        />
        <input
          type="text"
          name="phone"
          id=""
          placeholder="Your Number"
          required
        />
        <button className="btn w-50 d-block mx-auto my-4">Chackout</button>
        <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
      </form>
    </div>
  );
};

export default ChackOut;
