import Categories from "../Categories/Categories";
import Logo from "../Logo/Logo";
import Searchbar from "../Searchbar/Searchbar";
import Usermenu from "../Usermenu/Usermenu";
import "./header.scss";

const Header = () => {
  return (
    <div className="heaer-wrapper">
      <header className="header">
        <div className="container">
          <div className="header__row">
            <div className="header__logo">
              <Logo />
            </div>
            <div className="header__search">
              <Searchbar />
            </div>
            <div className="header__user">
              <Usermenu />
            </div>
          </div>
        </div>
      </header>

      <Categories />
    </div>
  );
};

export default Header;
