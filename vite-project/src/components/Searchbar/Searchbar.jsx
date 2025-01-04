import "./searchbar.scss";
import searchBtn from "./search.svg";
import Link from "../Link/Link";

const Searchbar = () => {
  return (
    <div className="searchbar">
      <div className="searchbar__btns-wrapper">
        <div className="searchbar__btn">
          <Link text="Anywhere" />
        </div>
        <div className="searchbar__btn">
          <Link text="Anyweek" />
        </div>
        <div className="searchbar__btn">
          <Link text="Add guests" style="light" />
        </div>
      </div>
      <button className="searchbar__btn-search">
        <img src={searchBtn} alt="Search" />
      </button>
    </div>
  );
};

export default Searchbar;
