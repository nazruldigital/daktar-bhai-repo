import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Registration.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../firabase.init";
import SocialLogin from "../SocialLogin/SocialLogin";

const Registration = () => {
  const navigate=useNavigate()
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});

    if(user){
      navigate('/')
    }

  const handleRegistration = (event) => {
    event.preventDefault();
    const name = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;

    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="register-from">
      <div className="mb-3">
        <h2>Registration</h2>
      </div>
      <form onSubmit={handleRegistration}>
        <input name="name" type="text" placeholder="Your Name" />
        <input name="email" type="email" placeholder="Email Address" required />
        <input
          name="password"
          type="password"
          placeholder="Your Password"
          required
        />
        <button className="btn w-50 d-block mx-auto my-4">Registration</button>
      </form>

      <p className="text-start">
        <Link to="/login" className="login-text text-decoration-none">
          Already have an account?
        </Link>
      </p>
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Registration;
