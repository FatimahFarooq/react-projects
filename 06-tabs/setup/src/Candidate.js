import React from "react";
import { FaAngleDoubleRight } from "react-icons/fa";

const Candidate = ({ candidate }) => {
  return (
    <article className="job-info">
      <h3>{candidate.title}</h3>
      <h4>{candidate.company} </h4>
      <p className="job-date">{candidate.dates}</p>
      {candidate.duties.map((duty, index) => {
        return (
          <div className="job-desc" key={index}>
            <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
            <p>{duty} </p>
          </div>
        );
      })}
    </article>
  );
};

export default Candidate;
