import { useRef } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import auth from "../../firabase.init";
import SocialLogin from "../SocialLogin/SocialLogin";
import "./Login.css";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Loading from "../Loading/Loading";
const Login = () => {
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const location = useLocation();
  let errorElement;

  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail] = useSendPasswordResetEmail(auth);

  if (loading ) {
    return <Loading></Loading>;
  }

  if (user) {
    navigate(from, { replace: true });
  }
  if (error) {
    errorElement = (
      <div>
        <p className="text-danger">Error: {error?.message}</p>
      </div>
    );
  }
  const restePassword = async () => {
    const email = emailRef.current.value;
    if (email) {
      await sendPasswordResetEmail(email);
      toast.success("Sent email");
    } else {
      toast.error("Please Enter Your Email Address");
    }
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    signInWithEmailAndPassword(email, password);
  };
  return (
    <div className="login-from">
      <div className="mb-3">
        <h2>Please Login</h2>
      </div>
      <form onSubmit={handleLogin}>
        <input ref={emailRef} type="email" placeholder="Email" required />
        <input
          ref={passwordRef}
          type="password"
          placeholder="Password"
          required
        />
        <button className="btn w-50 d-block mx-auto my-4">Login</button>
      </form>
      {errorElement}
      <p className="text-start ">
        <Link to="/registration" className="login-text text-decoration-none">
          Don't have any account?
        </Link>
      </p>
      <p className="text-start ">
        <Link
          to="/login"
          onClick={restePassword}
          className="login-text text-warning text-decoration-none"
        >
          Forget Password?
        </Link>
      </p>
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
      <SocialLogin></SocialLogin>
    </div>
  );
};

export default Login;
