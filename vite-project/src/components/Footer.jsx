import choiseIcon from "./../../public/img/icons/pivacy.svg";
import planetIcon from "./../../public/img/icons/globe.svg";
import arrowUpIcon from "./../../public/img/icons/arrow-top.svg";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer__wrapper">
          <div className="footer__wrapper-left">
            <p className="footer__rights">© 2023 Airbnb, Inc.</p>
            <div className="footer__links">
              <a href="#">Terms</a>
              <a href="#">Sitemap</a>
              <a href="#">Privacy</a>
              <a href="#">
                Your Privacy Choices
                <img src={choiseIcon} alt="choise" />
              </a>
            </div>
          </div>

          <div className="footer__actions">
            <div className="footer__actions-item">
              <img src={planetIcon} alt="arrowTop" />
              English (US)
            </div>
            <div className="footer__actions-item">
              <span>$</span> USD
            </div>
            <div className="footer__actions-item">
              Support & resources <img src={arrowUpIcon} alt="arrowTop" />
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
