import "./style.scss";
import { Link, useLocation } from "react-router-dom";
import Logo from "../../assets/images/Logo.svg";

const NAVIGATION_LINKS = [
  { label: "NEW CARS", to: "/new-cars" },
  { label: "PRE-OWNED CARS", to: "/#cars" },
  { label: "FINANCE", to: "/#leasing" },
  { label: "LEASE VS BUY", to: "/#leasing" },
  { label: "CONTACT US", to: "/contact-us" },
];

const isNavigationItemActive = (to, pathname, hash) =>
  to.includes("#")
    ? pathname === "/" && hash === to.slice(1)
    : pathname === to;

const Header = ({ variant = "overlay" }) => {
  const { hash, pathname } = useLocation();

  return (
    <header className={`header header--${variant}`}>
      <div className="container">
        <div className="header__box">
          <Link className="header__brand" to="/" aria-label="D&M Leasing home">
            <img src={Logo} alt="D&M Leasing" />
          </Link>

          <nav aria-label="Main navigation">
            <ul>
              {NAVIGATION_LINKS.map(({ label, to }) => {
                const isActive = isNavigationItemActive(to, pathname, hash);

                return (
                  <li key={label}>
                    <Link
                      aria-current={isActive ? "page" : undefined}
                      className={isActive ? "is-active" : undefined}
                      to={to}
                    >
                      {label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
