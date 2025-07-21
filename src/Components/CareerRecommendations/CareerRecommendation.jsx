import React, { useState } from "react";
import "./CareerRecommendations.css";

function CareerRecommendations() {
  const [likes, setLikes] = useState([0, 0, 0, 0, 0]);

  const handleLike = (index) => {
    const updatedLikes = [...likes];
    updatedLikes[index] += 1;
    setLikes(updatedLikes);
  };

  const recommendations = [
    {
      title: "Machine Learning Engineer (AI/ML)",
      confidence: "92%",
      salary: "₹10L – ₹25L per annum",
      companies: "Google, Amazon, Microsoft, TCS",
      resources: [
        { name: "Coursera – Andrew Ng ML", link: "https://www.coursera.org/learn/machine-learning" },
        { name: "Fast.ai", link: "https://www.fast.ai/" },
        { name: "Kaggle Learn", link: "https://www.kaggle.com/learn" },
      ],
    },
    {
      title: "Data Analyst",
      confidence: "88%",
      salary: "₹5L – ₹12L per annum",
      companies: "Flipkart, Deloitte, IBM, MuSigma",
      resources: [
        { name: "Google Data Analytics", link: "https://www.coursera.org/professional-certificates/google-data-analytics" },
        { name: "Kaggle", link: "https://www.kaggle.com/" },
        { name: "SQLBolt", link: "https://sqlbolt.com/" },
      ],
    },
    {
      title: "Frontend Developer",
      confidence: "90%",
      salary: "₹6L – ₹15L per annum",
      companies: "Swiggy, Zomato, Paytm, Infosys",
      resources: [
        { name: "freeCodeCamp – Frontend", link: "https://www.freecodecamp.org/learn/" },
        { name: "React Docs", link: "https://reactjs.org/docs/getting-started.html" },
        { name: "MDN Web Docs", link: "https://developer.mozilla.org/" },
      ],
    },
    {
      title: "Cybersecurity Analyst",
      confidence: "85%",
      salary: "₹6L – ₹18L per annum",
      companies: "Wipro, Accenture, EY, Palo Alto Networks",
      resources: [
        { name: "Cybrary", link: "https://www.cybrary.it/" },
        { name: "EC-Council CEH", link: "https://www.eccouncil.org/" },
        { name: "TryHackMe", link: "https://tryhackme.com/" },
      ],
    },
    {
      title: "Cloud Engineer",
      confidence: "87%",
      salary: "₹8L – ₹22L per annum",
      companies: "Amazon AWS, Google Cloud, Microsoft Azure",
      resources: [
        { name: "AWS Training", link: "https://aws.amazon.com/training/" },
        { name: "Google Cloud Training", link: "https://cloud.google.com/training" },
        { name: "Azure Learn", link: "https://learn.microsoft.com/en-us/training/azure/" },
      ],
    },
  ];

  return (
    <section className="recommendations">
      <h2>Top Career Paths for You</h2>

      {recommendations.map((career, index) => (
        <div className="recommendation-card" key={index}>
          <h3>{career.title}</h3>
          <p><strong>Confidence Score:</strong> <span style={{ color: "green" }}>{career.confidence}</span></p>
          <p><strong>Average Salary:</strong> {career.salary}</p>
          <p><strong>Top Companies:</strong> {career.companies}</p>
          <p><strong>Resources:</strong></p>
          <ul>
            {career.resources.map((res, i) => (
              <li key={i}>
                <a href={res.link} target="_blank" rel="noreferrer">
                  {res.name}
                </a>
              </li>
            ))}
          </ul>

          <button className="like-button" onClick={() => handleLike(index)}>
            👍 Like {likes[index]}
          </button>
        </div>
      ))}
    </section>
  );
}

export default CareerRecommendations;
