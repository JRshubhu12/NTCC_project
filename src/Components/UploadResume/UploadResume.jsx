import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import {
  BsBriefcase,
  BsEnvelope,
  BsFileEarmarkText,
  BsGraphUp,
  BsPerson,
  BsPhone,
  BsPuzzle,
  BsBarChart,
  BsBuilding,
  BsExclamationTriangle,
} from "react-icons/bs";
import "./UploadResume.css";

function UploadResume() {
  const [file, setFile] = useState(null);
  const [isAnalyzing, setIsAnalyzing] = useState(false);
  const [error, setError] = useState(null);
  const [showModal, setShowModal] = useState(false);

  const [personalDetails, setPersonalDetails] = useState(null);
  const [skills, setSkills] = useState([]);
  const [recommendations, setRecommendations] = useState([]);
  const [summary, setSummary] = useState("");

  const handleFileChange = (e) => {
    if (e.target.files.length > 0) {
      setFile(e.target.files[0]);
      setError(null);
    }
  };

  const analyzeResume = async () => {
    if (!file) return;

    setIsAnalyzing(true);
    setError(null);

    try {
      const formData = new FormData();
      formData.append("file", file);

      const response = await fetch("http://localhost:5000/analyze", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok || !data.success) {
        throw new Error(data.error || "Analysis failed. Please check the server.");
      }

      setPersonalDetails(data.personal_details);
      setSkills(data.skills_with_counts);
      setRecommendations(data.recommendations);
      setSummary(data.summary);
      setShowModal(true);
    } catch (err) {
      setError(err.message || "Failed to analyze resume.");
    } finally {
      setIsAnalyzing(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    analyzeResume();
  };

  const handleCloseModal = () => {
    setShowModal(false);
  };

  return (
    <div className="container-fluid py-5 upload-resume-page">
      <div className="row justify-content-center">
        <div className="col-lg-6 col-md-8">
          <div className="card shadow-lg border-0 rounded-4 p-4 text-center">
            <h3 className="text-primary mb-3">
              <BsFileEarmarkText className="me-2" size={30} />
              Upload Your Resume
            </h3>
            <p className="text-muted mb-4">
              Get instant analysis, skill extraction, and personalized career recommendations.
            </p>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <input
                  type="file"
                  className="form-control"
                  accept=".pdf,.docx"
                  onChange={handleFileChange}
                  required
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary btn-lg rounded-pill w-100"
                disabled={!file || isAnalyzing}
              >
                {isAnalyzing ? (
                  <>
                    <span className="spinner-border spinner-border-sm me-2" role="status" />
                    Analyzing...
                  </>
                ) : (
                  "Analyze Now"
                )}
              </button>
            </form>
            {file && !isAnalyzing && (
              <div className="alert alert-light mt-3 border">
                Selected: <strong>{file.name}</strong>
              </div>
            )}
            {error && (
              <div className="alert alert-danger mt-3">
                {error}
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal Overlay */}
      {showModal && <div className="modal-backdrop fade show" style={{ zIndex: 1050 }} />}

      {/* Modal Content */}
      <div className={`modal fade ${showModal ? "show d-block" : ""}`} style={{ zIndex: 1055 }} tabIndex={-1}>
        <div className="modal-dialog modal-xl modal-dialog-scrollable">
          <div className="modal-content rounded-4">
            <div className="modal-header border-0 pb-0">
              <h4 className="modal-title text-primary">
                <BsGraphUp className="me-2" /> Resume Analysis Report
              </h4>
              <button type="button" className="btn-close" onClick={handleCloseModal}></button>
            </div>
            <div className="modal-body p-4">
              {/* Personal Details */}
              {personalDetails && (
                <div className="p-3 mb-4 bg-light rounded-3 border">
                  <div className="row">
                    <div className="col-md-4">
                      <h5>
                        <BsPerson className="me-2" /> {personalDetails.name}
                      </h5>
                      <p><BsEnvelope className="me-2" /> {personalDetails.email}</p>
                      <p><BsPhone className="me-2" /> {personalDetails.phone}</p>
                      <p>
                        <BsBarChart className="me-2" /> Experience:{" "}
                        <span className="badge bg-secondary">
                          {personalDetails.experience_level}
                        </span>
                      </p>
                    </div>
                    <div className="col-md-8">
                      <h6>Executive Summary:</h6>
                      <p className="text-muted fst-italic">"{summary}"</p>
                    </div>
                  </div>
                </div>
              )}

              {/* Career Recommendations */}
              <h5 className="mb-3">
                <BsBriefcase className="me-2" /> Top Career Recommendations
              </h5>
              <div className="row">
                {recommendations.map((job, index) => (
                  <div key={index} className="col-lg-4 col-md-6 mb-4">
                    <div className="card h-100 shadow-sm">
                      <div className="card-body">
                        <h5 className="card-title d-flex justify-content-between">
                          {job.title}
                          <span className={`badge bg-${parseInt(job.match) > 80 ? "success" : "warning"}`}>
                            {job.match}
                          </span>
                        </h5>
                        <p className="text-muted small">{job.reason}</p>
                        {job.missing_skills.length > 0 && (
                          <>
                            <h6 className="text-danger small mt-3">
                              <BsExclamationTriangle className="me-1" /> Skills to Improve:
                            </h6>
                            <div className="d-flex flex-wrap gap-1">
                              {job.missing_skills.slice(0, 5).map((skill, i) => (
                                <span key={i} className="badge bg-danger-subtle text-danger border border-danger-subtle">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </>
                        )}
                        <h6 className="text-info small mt-3">
                          <BsBuilding className="me-1" /> Top Companies:
                        </h6>
                        <div className="d-flex flex-wrap gap-1">
                          {job.companies.map((co, i) => (
                            <span key={i} className="badge bg-info-subtle text-info border border-info-subtle">
                              {co}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Skills Identified */}
              {skills.length > 0 && (
                <div className="mt-4">
                  <h5>
                    <BsPuzzle className="me-2" /> Top Skills Identified
                  </h5>
                  <div className="d-flex flex-wrap gap-2 mt-2">
                    {skills.map(([skill, count], i) => (
                      <span
                        key={i}
                        className="badge rounded-pill text-dark-emphasis bg-primary-subtle border border-primary-subtle fs-6"
                      >
                        {skill} <span className="badge bg-dark ms-1">{count}</span>
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </div>
            <div className="modal-footer border-0">
              <button type="button" className="btn btn-secondary rounded-pill" onClick={handleCloseModal}>
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UploadResume;
