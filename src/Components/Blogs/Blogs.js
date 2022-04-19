import React from "react";
import "./Blogs.css";

const Blogs = () => {
  return (
    <div>
      <div className="mt-5 px-5">
        <h2 className="text-start">
          What is Difference between Authorization and Authentication
        </h2>
        <p className="paragraph">
          Authentication is about validating your credentials like Username and
          password to verify your identity. Authentication is the process of
          verifying who someone is, whereas. If user and password are mached
          then it called Authentication user. And this process is called
          Authentication. Authorization is the process to determine whether the
          authenticated user has access to the particular resources. It checks
          your rights to grant you access to resources such as information,
          databases, files, etc.
        </p>
      </div>
      <div className="mt-5 px-5">
        <h2 className="text-start">
          Why are you using firebase? What other options do you have to
          implement authentication?
        </h2>
        <p className="paragraph">
          I use firebase to secure the website I made. First of all Firebase
          authentication are free and easy to use and it gives me access many
          kind of authentication in my website. I can customize my website and
          authentication. I can send email and password authentication , google
          authentication, facebook authentication, github authentication, game
          center authentication, apple authentication, microsoft authentication,
          twitter authentication, yahoo authentication, etc. I can verified user
          by sending verified email and much more can do.
        </p>
      </div>
      <div className="mt-5 px-5">
        <h2 className="text-start">
          What other services does firebase provide other than authentication?
        </h2>
        <p className="paragraph">
          There are many services which Firebase provides, Most useful of them
          are: Cloud Firestore, Cloud Functions, Hosting, Cloud
          Storage, Google Analytics, Predictions, Cloud Messaging, Dynamic
          Links, Remote Config, Firebase is a full package that can help in
          developing your mobile or web applications faster with fewer resources and more efficiency. Now, let's look at some of the services and use
          of it.
        </p>
      </div>
    </div>
  );
};

export default Blogs;
