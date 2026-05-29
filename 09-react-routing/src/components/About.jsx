import React from "react";
import "./About.css";
import { useNavigate } from "react-router-dom";

const About = () => {
  const navigate = useNavigate();

  function handleClick() {
    navigate("/");
  }
  return (
    <div className="about-main">
      <h1>About</h1>
      <button onClick={handleClick}>Home</button>
    </div>
  );
};

export default About;
