import React from "react";

const Categories = ({ categories, filter }) => {
  let products = categories;

  const groupByCategory = products.reduce((group, product) => {
    const { category } = product;
    group[category] = group[category] ?? [];
    // group[category].push(product.category);
    return group;
  }, {});

  // console.log(groupByCategory);

  const all_categories = [
    "all",
    ...new Set(categories.map((cat) => cat.category)),
  ];

  return (
    <div className="btn-container">
      {all_categories.map((item, index) => {
        return (
          <button
            type="button"
            className="filter-btn"
            key={index}
            onClick={() => filter(item)}
          >
            {item}
          </button>
        );
      })}
    </div>
  );
};

export default Categories;
