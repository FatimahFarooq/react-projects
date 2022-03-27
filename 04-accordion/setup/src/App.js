import React, { useState } from "react";
import data from "./data";
import SingleQuestion from "./Question";
import { AiOutlineMinus, AiOutlinePlus } from "react-icons/ai";

function App() {
  const [questions, setQuestions] = useState(data);


  return (
    <main>
      <div className="container">
        <h3>questions and answers about login</h3>
        <section className="info">
          {questions.map((question) => {
            return (
              <SingleQuestion question={question}/>
            );
          })}
        </section>
      </div>
    </main>
  );
}

export default App;
