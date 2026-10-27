import "./style.scss";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg";

const NAVIGATION_LINKS = [
  { label: "NEW CARS", to: "/#cars" },
  { label: "PRE-OWNED CARS", to: "/#cars" },
  { label: "FINANCE", to: "/#leasing" },
  { label: "LEASE VS BUY", to: "/#leasing" },
  { label: "CONTACT US", to: "/contact-us" },
];

const Header = ({ variant = "overlay" }) => {
  return (
    <header className={`header header--${variant}`}>
      <div className="container">
        <div className="header__box">
          <Link className="header__brand" to="/" aria-label="D&M Leasing home">
            <img src={Logo} alt="D&M Leasing" />
          </Link>

          <nav aria-label="Main navigation">
            <ul>
              {NAVIGATION_LINKS.map(({ label, to }) => (
                <li key={label}>
                  <Link to={to}>{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
