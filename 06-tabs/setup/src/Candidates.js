import React from "react";

const Candidates = ({ candidates, toggleCandidate }) => {
  return (
    <div className="btn-container">
      {candidates.map((candidate) => {
        return (
          <button
            className="job-btn"
            key={candidate.id}
            onClick={() => toggleCandidate(candidate)}
          >
            {candidate.company}
          </button>
        );
      })}
    </div>
  );
};

export default Candidates;
