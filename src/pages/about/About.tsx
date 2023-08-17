import React from "react";
import "./About.css";

// Components

function About() {
  return (
    <div className="about-wrapper">
      <h2 className="about-title">
        Welcome to my demo project <span>Learn Armenian</span>!
      </h2>
      <p className="about-text">
        It is an educational app, and the main goal is quite straight: teach you
        some Armenian! So far the demo consists of one section, Picture
        Dictionary, where you can find some useful words and phrases with
        explanatory illustrations.
      </p>
      <p className="about-text">
        The futher sections may include: Armenian phonetics theory and
        exercises, Grammar rules, Vocabulary and grammar exercises...
      </p>
    </div>
  );
}

export default About;
