import "./style.scss";
import { Link } from "react-router-dom";

const FooterLinkGroup = ({ title, links }) => (
  <section className="site-footer__group">
    <h2>{title}</h2>
    <ul>
      {links.map((link) => (
        <li key={link.label}>
          <Link to={link.to}>{link.label}</Link>
        </li>
      ))}
    </ul>
  </section>
);

export default FooterLinkGroup;
