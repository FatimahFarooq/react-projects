import React, { useState } from "react";

const Tour = ({ tour, func }) => {
  const [toggle, setToggle] = useState(true);
  const { id, image, info, name, price } = tour;

  return (
    <>
      <article className="single-tour">
        <img src={image} alt="country" />
        <footer>
          <div className="tour-info">
            <h4>{name}</h4>
            <h4 className="tour-price">{price}</h4>
          </div>
          <p>
            {toggle ? info.substring(0, 200) : info}
            <button onClick={() => setToggle(!toggle)}>{toggle ? 'read more' : 'Show less'} </button>
          </p>
          <button className="delete-btn" onClick={() => func(id)}>
            Not Interested
          </button>
        </footer>
      </article>
    </>
  );
};

export default Tour;
