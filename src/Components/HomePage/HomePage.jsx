import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./HomePage.css";
import UserProfile from "../UserProfile/UserProfile"; // Adjust the path

function HomePage() {
  const [showProfile, setShowProfile] = useState(false); // 👈 only flag

  const handleLoginClick = () => {
    setShowProfile(true); // 👈 just show the profile on button click
  };

  return (
    <div className="homepage-container">
      <div className="container py-5">
        <div className="row justify-content-center">
          {/* Left Column: Profile */}
          <div className="col-lg-5 mb-4">
            <div className="card profile-card shadow-lg border-0 rounded-4">
              <div className="card-body">
                <h4 className="card-title text-info fw-bold">👩‍💻 User Profile</h4>
                <hr />
                {showProfile ? (
                  <UserProfile />
                ) : (
                  <>
                    <p>Please log in to see your profile.</p>
                    <button className="btn btn-info w-100 login-btn" onClick={handleLoginClick}>
                      🔓 Login
                    </button>
                  </>
                )}
              </div>
            </div>
          </div>

          {/* Right Column: Action Cards */}
          <div className="col-lg-7">
            <div className="row g-4">
              {/* Upload Resume */}
              <div className="col-12">
                <div className="card action-card border-0 shadow-lg rounded-4">
                  <div className="card-body">
                    <h5 className="card-title">📄 Upload Resume</h5>
                    <p className="card-text">Upload your resume to extract skills automatically.</p>
                    <NavLink to="/upload-resume">
                      <button className="btn btn-primary w-100">Upload Resume</button>
                    </NavLink>
                  </div>
                </div>
              </div>

              {/* Personality Quiz */}
              <div className="col-12">
                <div className="card action-card border-0 shadow-lg rounded-4">
                  <div className="card-body">
                    <h5 className="card-title">🧠 Personality Quiz</h5>
                    <p className="card-text">Take the quiz to assess your personality traits.</p>
                    <NavLink to="/personality-quiz">
                      <button className="btn btn-success w-100">Start Quiz</button>
                    </NavLink>
                  </div>
                </div>
              </div>

              {/* Get Recommendations */}
              <div className="col-12 text-center">
                <NavLink
                  to="/recommendations"
                  className="btn btn-warning btn-lg rounded-pill shadow-sm w-75 get-recommendations-btn"
                >
                  🚀 Get Career Recommendations
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
