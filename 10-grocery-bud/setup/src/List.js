import React from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
const List = ({ groceries, setGroceries, editGrocery, deleteGrocery }) => {
  return (
    <div className="grocery-container">
      <div className="grocery-list">
        {groceries.map((grocery) => {
          return (
            <article className="grocery-item" key={grocery.id}>
              <p className="title"> {grocery.name}</p>

              <div className="btn-container">
                <button
                  className="edit-btn"
                  onClick={() => editGrocery(grocery.id)}
                >
                  <FaEdit></FaEdit>
                </button>
                <button
                  className="delete-btn"
                  onClick={() => deleteGrocery(grocery.id)}
                >
                  <FaTrash></FaTrash>
                </button>
              </div>
            </article>
          );
        })}
      </div>
      <button className="clear-btn" onClick={() => setGroceries([])}>
        Clear list
      </button>
    </div>
  );
};

export default List;
