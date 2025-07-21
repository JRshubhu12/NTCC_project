import { useState } from "react";

function ActionSection({ setShowRecommendations }) {
  const [loading, setLoading] = useState(false);

  const handleRecommendation = () => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setShowRecommendations(true);
    }, 2000);
  };

  return (
    <section className="action-section">
      <div className="card">
        <h3>Upload Resume</h3>
        <p>Upload your resume to extract skills automatically.</p>
        <button>Upload Resume</button>
      </div>
      <div className="card">
        <h3>Personality Quiz</h3>
        <p>Take a quick quiz to assess your personality traits.</p>
        <button>Start Quiz</button>
      </div>
      <div className="card">
        <h3>Get Recommendations</h3>
        <button onClick={handleRecommendation} disabled={loading}>
          {loading ? "Processing..." : "Get Career Recommendations"}
        </button>
      </div>
    </section>
  );
}

export default ActionSection;
