import React from "react";
import Tour from "./Tour";
import { useState, useEffect } from "react";
const Tours = () => {
  const url = "https://course-api.com/react-tours-project";

  const [tours, setTours] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);

  const get_tours = async () => {
    const response = await fetch(url);

    if (response.status !== 200) {
      setIsError(true);
    } else {
      setIsLoading(false);
      const data = await response.json();
      return data;
    }
  };

  const all_tours = () => {
    get_tours()
      .then((data) => {
        setTours(data);
      })
      .catch((err) => {
        setIsError(true);
      });
  };

  useEffect(() => {
    all_tours();
  }, []);

  const removeTour = (id) => {
    const new_tours = tours.filter((tour) => tour.id !== id);
    setTours(new_tours);
  };

  if (isLoading) {
    return <h2>{isLoading && "Loading.."}</h2>;
  } else if (isError) {
    return <h2>{isError && "Error.."}</h2>;
  } else {
    if (tours.length === 0) {
      return (
        <>
          <div className="title">
            <h2>No tours left</h2>
            <button className="btn" onClick={() => all_tours()}>
              refresh tours
            </button>
          </div>
        </>
      );
    } else {
      return (
        <>
          <div className="title">
            <h2>our tours</h2>
            <div className="underline"></div>
          </div>
          <div>
            {tours.map((tour) => {
              return <Tour key={tour.id} tour={tour} func={removeTour}></Tour>;
            })}
          </div>
        </>
      );
    }
  }
};

export default Tours;
