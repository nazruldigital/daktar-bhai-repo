import React from "react";
import google from "../../Images/Social/google.svg";
import facebook from "../../Images/Social/Facebook.svg";
import github from "../../Images/Social/github.svg";
import {
  useSignInWithFacebook,
  useSignInWithGithub,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import { useLocation, useNavigate } from "react-router-dom";
import auth from "../../firabase.init";
import Loading from "../Loading/Loading";

const SocialLogin = () => {
  const [signInWithGoogle, googleUser, googleLoading, googleError] =
    useSignInWithGoogle(auth);
  const [signInWithGithub, gitUser, gitLoading, gitError1] =
    useSignInWithGithub(auth);
  const [signInWithFacebook, fbUser, fbLoading, fbError] =
    useSignInWithFacebook(auth);
    const location=useLocation()
  const navigate = useNavigate();
  let errorElement;

  let from = location.state?.from?.pathname || "/";

  if (googleLoading || gitLoading || fbLoading) {
    return <Loading></Loading>;
  }

  if (googleError || gitError1 || fbError) {
    errorElement = (
      <div>
        <p className="text-danger">
          Error: {googleError?.message}
          {gitError1?.message}
          {fbError?.message}
        </p>
      </div>
    );
  }

  if (googleUser || gitUser || fbUser) {
    navigate(from, { replace: true });
  }

  return (
    <div>
      <div className="d-flex align-items-center justify-content-center">
        <div style={{ height: "1px" }} className="bg-secondary  w-25"></div>
        <p className="mt-3 mx-2">or</p>
        <div style={{ height: "1px" }} className="bg-secondary  w-25"></div>
      </div>
      {errorElement}
      <div>
        <button
          onClick={() => signInWithGoogle()}
          className="btn btn-info w-50 d-block mx-auto my-2"
        >
          <img style={{ height: "30px" }} src={google} alt="" />
          <span className="px-3">Google SignIn</span>
        </button>
        <button
          onClick={() => signInWithFacebook()}
          className="btn btn-info w-50 d-block mx-auto my-2"
        >
          <img style={{ height: "30px" }} src={facebook} alt="" />
          <span className="px-3">Facebook SignIn</span>
        </button>
        <button
          onClick={() => signInWithGithub()}
          className="btn btn-info w-50 d-block mx-auto"
        >
          <img style={{ height: "30px" }} src={github} alt="" />
          <span className="px-3">Github SignIn</span>
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
