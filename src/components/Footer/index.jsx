import "./style.scss";
import { FOOTER_GROUPS } from "../../constants/footerData";
import FooterLegal from "./FooterLegal";
import FooterLinkGroup from "./FooterLinkGroup";
import FooterStores from "./FooterStores";

const Footer = () => (
  <footer className="site-footer" id="footer">
    <div className="container">
      <div className="site-footer__columns">
        {FOOTER_GROUPS.map((group) => (
          <FooterLinkGroup key={group.title} {...group} />
        ))}
      </div>
      <FooterStores />
      <FooterLegal />
    </div>
  </footer>
);

export default Footer;
