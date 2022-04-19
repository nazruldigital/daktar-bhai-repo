import React from "react";
import "./About.css";
import user from '../../Images/user.jpg'

const About = () => {
  return (
    <div>
      <h2>About</h2>
      <div className="mx-auto w-50 about">
        <img height={"200px"} src={user} alt="" />
        <div className="d-flex ms-4">
          <h2>
            <b>Name :</b>
          </h2>
          <h2 className="ms-2">Nazrul Islam</h2>
        </div>
        <div className="mt-3">
          <p>
            <b>My goals:</b>
          </p>
          <p className="ms-2 paragrph">My future goals is I become a millionaire. I will be own many company. I have a plan for it. And I working on it. My plan is invest money in different business and idea. I believe hard work can change a man and give you the success what you want.</p>
        </div>
      </div>
    </div>
  );
};

export default About;
