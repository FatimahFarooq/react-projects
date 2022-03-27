import React, { useState, useEffect } from "react";
import { FaAngleDoubleRight } from "react-icons/fa";
import Candidate from "./Candidate";
import Candidates from "./Candidates";

// ATTENTION!!!!!!!!!!
// I SWITCHED TO PERMANENT DOMAIN
const url = "https://course-api.com/react-tabs-project";

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [candidates, setCandidates] = useState([]);
  const [candidate, setCandidate] = useState();

  const getCandidates = async () => {
    try {
      const response = await fetch(url);
      const candidates = await response.json();

      setCandidates(candidates);
      setCandidate(candidates[0]);
      setIsLoading(false);
      console.log(candidates);
    } catch (error) {
      console.log(error);
    }
  };

  const toggleCandidate = (candidate) => {
    setCandidate(candidate);
  };

  useEffect(() => {
    getCandidates();
  }, []);

  if (isLoading) {
    return <h2>Loading...</h2>;
  }

  return (
    <section className="section">
      <div className="title">
        <h2>experience</h2>
        <div className="underline"></div>
      </div>
      <div className="jobs-center">
        <Candidates
          candidates={candidates}
          toggleCandidate={toggleCandidate}
        ></Candidates>
        <Candidate candidate={candidate}></Candidate>
      </div>
      <button type="button" class="btn">
        more info
      </button>
    </section>
  );
}

export default App;
