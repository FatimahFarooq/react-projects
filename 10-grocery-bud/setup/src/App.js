import React, { useState, useEffect } from "react";
import List from "./List";
import Alert from "./Alert";

function App() {
  const [item, setItem] = useState("");
  const [items, setItems] = useState([]);
  const [isEdit, setIsEdit] = useState(false);
  const [id, setId] = useState(0);
  const [alert, setAlert] = useState({
    isSet: true,
    type: "default",
    msg: "",
  });

  const removeAlert = () => {
    setAlert({ ...alert, isSet: false });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (item === "") {
      console.log("add item");
    } else if (isEdit) {
      setItems(
        items.map((x) => {
          if (x.id == id) {
            return { ...x, name: item };
          }
          return x;
        })
      );
      setItem("");
      setIsEdit(false);
      setAlert({ isSet: true, type: "success", msg: "Item modified" });
    } else {
      const newItem = {
        id: new Date().getTime().toString(),
        name: item,
      };
      setItems([...items, newItem]);
      setItem("");
      setAlert({ isSet: true, type: "success", msg: "Item added" });
    }
  };

  const clearGroceries = () => {
    setItems([]);
    setAlert({ isSet: true, type: "success", msg: "Items cleared" });
  };

  const deleteGrocery = (id) => {
    const newItems = items.filter((item) => {
      return item.id !== id;
    });
    setItems(newItems);
    setAlert({ isSet: true, type: "danger", msg: "Item deleted" });
    console.log("delete grocery", id);
  };
  const editGrocery = (id) => {
    setIsEdit(true);
    setId(id);
    const editedItem = items.filter((item) => {
      return item.id === id;
    });
    setItem(editedItem[0].name);
    console.log("edit grocery", editedItem);
  };
  return (
    <section className="section-center">
      <form onSubmit={handleSubmit} className="grocery-form">
        {alert.isSet && <Alert alert={alert} removeAlert={removeAlert}></Alert>}
        <h3>grocery bud</h3>
        <div className="form-control">
          <input
            className="grocery"
            placeholder="e.g. eggs"
            type="text"
            name="item"
            value={item}
            onChange={(e) => setItem(e.target.value)}
          />
          <button type="submit" className="submit-btn">
            {isEdit ? "Edit" : "Add"}
          </button>
        </div>
      </form>
      <div className="grocery-container">
        <List
          groceries={items}
          setGroceries={clearGroceries}
          editGrocery={editGrocery}
          deleteGrocery={deleteGrocery}
        ></List>
      </div>
    </section>
  );
}

export default App;
