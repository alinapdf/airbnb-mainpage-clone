import Account from "../Account/Account";
import Link from "../Link/Link";
import globeIcon from "./globe-black.svg";
import "./usermenu.scss";

const Usermenu = () => {
  return (
    <div className="usermenu">
      <div className="usermenu__home">
        <Link text="Airbnb your home" />
      </div>
      <div className="usermenu__local">
        <Link icon={globeIcon} />
      </div>
      <div className="usermenu__user">
        <Account />
      </div>
    </div>
  );
};

export default Usermenu;
