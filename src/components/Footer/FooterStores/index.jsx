import "./style.scss";
import appStoreBadge from "../../../assets/images/app-store.svg";
import googlePlayBadge from "../../../assets/images/google-play.svg";

const FooterStores = () => (
  <div className="site-footer__stores" aria-label="Get the TrueCar app">
    <a
      className="store-badge"
      href="#"
      aria-label="Download on the App Store"
      onClick={(event) => event.preventDefault()}
    >
      <img src={appStoreBadge} alt="" />
    </a>
    <a
      className="store-badge"
      href="#"
      aria-label="Get it on Google Play"
      onClick={(event) => event.preventDefault()}
    >
      <img src={googlePlayBadge} alt="" />
    </a>
  </div>
);

export default FooterStores;
