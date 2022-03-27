import React, { useState } from "react";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";
const Question = ({ question }) => {
  const [isShow, setIsShow] = useState(false);
  const [index, setIndex] = useState(0);

  return (
    <article className="question" key={question.id}>
      <header>
        <h4>{question.title} </h4>
        <button
          className="btn"
          onClick={() => {
            setIsShow(!isShow);
            setIndex(question.id);
          }}
        >
          {isShow && question.id === index ? (
            <AiOutlineMinus />
          ) : (
            <AiOutlinePlus />
          )}
        </button>
      </header>
      <p>{isShow && question.id === index && question.info}</p>
    </article>
  );
};

export default Question;
