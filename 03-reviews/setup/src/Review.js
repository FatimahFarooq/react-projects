import React, { useState, useReducer } from "react";
import people from "./data";
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from "react-icons/fa";

const Review = () => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "increment":
        return {
          index: state.index == people.length - 1 ? 0 : state.index + 1,
        };

      case "decrement":
        return {
          index: state.index == 0 ? people.length - 1 : state.index - 1,
        };

      default:
        return { index: state.index  };
    }
  };

  const [state, dispatch] = useReducer(reducer, { index: 0 });
  const [person, setPerson] = useState(people[state.index]);

  const next = () => {
    dispatch({ type: "increment" });
    setPerson(people[state.index]);
  };

  const prev = () => {
    dispatch({ type: "decrement" });
    setPerson(people[state.index]);
  };

  return (
    <article className="review">
      <div className="img-container">
        <img src={person.image} alt={person.name} className="person-img" />
        <span className="quote-icon">
          <FaQuoteRight></FaQuoteRight>
        </span>
      </div>
      <h4 className="author">{person.name}</h4>
      <p className="job">{person.job}</p>
      <p className="info">{person.text}</p>
      <div className="button-container">
        <button className="prev-btn" onClick={prev}>
          <FaChevronLeft></FaChevronLeft>
        </button>
        <button className="next-btn" onClick={next}>
          <FaChevronRight></FaChevronRight>
        </button>
      </div>
      <button className="random-btn" onClick={() => dispatch("")}>
        surprise me
      </button>
    </article>
  );
};

export default Review;
