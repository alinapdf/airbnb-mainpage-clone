import "./filterbtn.scss";
import filterIcon from "./../../../public/img/icons/filters.svg";
const FilterBtn = () => {
  return (
    <button className="filter-btn">
      <img src={filterIcon} alt="filter" />
      Filters
    </button>
  );
};

export default FilterBtn;
