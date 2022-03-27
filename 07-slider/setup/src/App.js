import React, { useState, useEffect } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";
import { FaQuoteRight } from "react-icons/fa";
import data from "./data";
function App() {
  const [index, setIndex] = useState(0);
  const [review, setReview] = useState(data[index]);

  setTimeout(() => {
    setIndex(index === data.length - 1 ? 0 : index + 1);
    setReview(data[index]);
  }, 5000);

  const prevReview = () => {
    console.log(index);
    setIndex(index === 0 ? data.length - 1 : index - 1);
    setReview(data[index]);
    console.log(review);
  };

  const nextReview = () => {
    setIndex(index === data.length - 1 ? 0 : index + 1);
    setReview(data[index]);
  };

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span>/</span>reviews
        </h2>
      </div>
      <div className="section-center">
        <article>
          <img src={review.image} alt={review.name} className="person-img" />
          <h4>{review.name}</h4>
          <p className="title">{review.title}</p>
          <p className="text">{review.quote}</p>
          <FaQuoteRight className="icon" />
        </article>
        <button className="prev" onClick={prevReview}>
          <FiChevronLeft />
        </button>
        <button className="next" onClick={nextReview}>
          <FiChevronRight />
        </button>
      </div>
    </section>
  );
}

export default App;
