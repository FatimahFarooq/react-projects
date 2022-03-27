import React, { useState } from "react";
import items from "./data";

const Menu = ({ menu }) => {
  return (
    <>
      {menu.map((item) => {
        return (
          <article className="menu-item" key={item.id}>
            <img src={item.img} alt={item.title} className="photo" />
            <div className="item-info">
              <header>
                <h4>{item.title}</h4>
                <h4 className="price">{item.price}</h4>
              </header>
              <p>{item.desc}</p>
            </div>
          </article>
        );
      })}
    </>
  );
};

export default Menu;
