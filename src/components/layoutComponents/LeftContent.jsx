import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";

const LeftContent = () => {
  const [category, setCategory] = useState([]);

  useEffect(() => {
    fetch("https://openapi.programming-hero.com/api/news/categories")
      .then((res) => res.json())
      .then((data) => setCategory(data.data.news_category));
  }, []);

  return (
    <div>
      <h2>All Category {category.length}</h2>
      <div className="flex flex-col my-3">
        {category.map((oneCategory) => (
          <NavLink to={`/category/${oneCategory.category_id}`}  
          className="btn mt-3" key={oneCategory.category_id}>
            {oneCategory.category_name}
          </NavLink>
        ))}
      </div>
    </div>
  );
};

export default LeftContent;
