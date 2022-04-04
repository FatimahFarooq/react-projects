import React, { useState } from "react";
import data from "./data";
import { FiChevronUp, FiChevronDOwn } from "react-icons/fi";
function App() {
  const [number, setNumber] = useState(0);
  const [paragraphs, setParagraphs] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    setParagraphs(data.slice(0, number));
  };
  return (
    <>
      <h3>tired of boring lorem ipsum</h3>
      <form onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="paras">Paragraphs:</label>
        <input
          id="paras"
          name="paras"
          type="number"
          value={number}
          onChange={(e) => {
            setNumber(e.target.value);
          }}
        />
        <button type="submit" className="btn">
          generate
        </button>
      </form>
      {/* {paragraphs} */}
      {paragraphs &&
        paragraphs.map((paragraph) => {
          return <p>{paragraph}</p>;
        })}
    </>
  );
}

export default App;
