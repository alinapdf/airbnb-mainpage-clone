import "./account.scss";
import navIcon from "./../../../public/img/icons/nav.svg";

const Account = () => {
  return (
    <button className="account">
      <div className="account__nav-icon">
        <img src={navIcon} alt="navIcon" />
      </div>
      <div className="account__avatar">
        <img
          src="./../../../public/img/icons/user-avatar.svg"
          alt="user avatar"
        />
      </div>
    </button>
  );
};

export default Account;
