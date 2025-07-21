import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-container">
      <div className="about-card">
        <h2 className="about-title">About Career Pathfinder</h2>
        <p className="about-text">
          <strong>Career Pathfinder</strong> is an AI-powered career guidance platform designed to help students discover and pursue the right career path based on their interests, personality, and skills.
        </p>
        <p className="about-text">
          Our platform provides personalized recommendations by analyzing your uploaded resume and quiz responses using intelligent machine learning algorithms.
        </p>
        <p className="about-text">
          Whether you're confused about which stream to choose or which job suits you best, Career Pathfinder is here to guide you every step of the way.
        </p>
        <p className="about-text">
          <strong>Mission:</strong> Empower students and job seekers with personalized, data-driven career decisions using AI and technology.
        </p>
      </div>
    </div>
  );
}

export default About;
