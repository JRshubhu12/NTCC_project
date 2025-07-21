import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PersonalityQuiz.css";

function PersonalityQuiz({ onClose }) {
  const [answers, setAnswers] = useState({
    q1: "", q2: "", q3: "", q4: "", q5: "",
    q6: "", q7: "", q8: "", q9: "", q10: ""
  });

  const questions = [
    "Are you more of an introvert or extrovert?",
    "Do you prefer working in teams or alone?",
    "Do you make decisions based on logic or feelings?",
    "Do you prefer structured plans or flexibility?",
    "How do you handle stress?",
    "Are you more detail-oriented or big-picture focused?",
    "Do you prefer following rules or creating your own?",
    "Are you more of a thinker or a doer?",
    "Do you enjoy multitasking?",
    "Are you motivated more by rewards or self-achievement?"
  ];

  // Customize options per question (example)
  const options = [
    ["Introvert", "Extrovert"],
    ["Teams", "Alone"],
    ["Logic", "Feelings"],
    ["Structured plans", "Flexibility"],
    ["Stay calm", "Get anxious"],
    ["Detail-oriented", "Big-picture"],
    ["Follow rules", "Create own"],
    ["Thinker", "Doer"],
    ["Yes", "No"],
    ["Rewards", "Self-achievement"]
  ];

  const handleChange = (e) => {
    setAnswers({ ...answers, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const unanswered = Object.values(answers).some(val => val === "");
    if (unanswered) {
      alert("Please answer all questions before submitting.");
      return;
    }
    alert("Quiz submitted successfully!");
    onClose();
  };

  return (
    <div className="d-flex justify-content-center align-items-center min-vh-100 bg-light p-3">
      <div className="card shadow-lg p-4 rounded-4" style={{ maxWidth: "700px", width: "100%" }}>
        <h2 className="text-center text-primary mb-4">🧠 Personality Quiz</h2>
        <form onSubmit={handleSubmit}>
          {questions.map((question, idx) => (
            <div className="mb-4" key={idx}>
              <label className="form-label fw-semibold">
                {idx + 1}. {question}
              </label>
              <select
                className="form-select"
                name={`q${idx + 1}`}
                value={answers[`q${idx + 1}`]}
                onChange={handleChange}
                required
              >
                <option value="">Select</option>
                {options[idx].map((opt, i) => (
                  <option key={i} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
          ))}
          <div className="d-grid">
            <button type="submit" className="btn btn-primary btn-lg rounded-pill">
              Submit Quiz
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default PersonalityQuiz;
