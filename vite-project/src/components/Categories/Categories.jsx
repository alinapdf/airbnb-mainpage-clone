import CategoryItem from "../CategoryItem/CategoryItem";
import FilterBtn from "../Filterbtn/Filterbtn";
import "./categories.scss";

import categoriesData from "./../../data/categories.json";

const Categories = () => {
  return (
    <div className="categories">
      <div className="container">
        <div className="categories__row">
          <div className="categories__list">
            {categoriesData.map((cat, index) => {
              return (
                <CategoryItem key={index} title={cat.title} img={cat.img} />
              );
            })}
          </div>
          <div className="categories__filter">
            <FilterBtn />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Categories;
