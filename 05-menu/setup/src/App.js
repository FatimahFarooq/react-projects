import React, { useState } from "react";
import Menu from "./Menu";
import Categories from "./Categories";
import items from "./data";

function App() {
  const [menu, setMenu] = useState(items);

  // const filterMenu = (item) => {
  //   items.filter((menu_item) => {
  //     let new_menu = menu_item.category === item.category;
  //     setMenu(new_menu);
  //   });
  // };

  const filterMenu = (item) => {
    console.log(item.category);
    if (item === "all") setMenu(items);
    else {
      let new_menu = items.filter((menu_item) => menu_item.category === item);
      setMenu(new_menu);
    }
  };
  return (
    <main>
      <section className="menu section"></section>

      <div className="title">
        <h2>our menu</h2>
        <div className="underline"></div>
      </div>

      <Categories categories={items} filter={filterMenu}></Categories>
      <div className="section-center">
        <Menu menu={menu}></Menu>
      </div>
    </main>
  );
}

export default App;
