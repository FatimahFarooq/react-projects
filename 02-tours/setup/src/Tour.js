import React, { useState } from "react";

const Tour = ({ tour, func }) => {
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
            {info}
            <button>read more</button>
          </p>
          <button className="delete-btn" onClick={()=>func(id)}>
            Not Interested
          </button>
        </footer>
      </article>
    </>
  );
};

export default Tour;
