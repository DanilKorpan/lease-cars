import "./style.scss";
import { Link } from "react-router-dom";
import slideBackground from "../../../assets/images/hero-bg.jpg";

const HeroSlide = () => (
  <div
    className="hero__slide"
    style={{ backgroundImage: `url(${slideBackground})` }}
  >
    <div className="container">
      <div className="hero__content">
        <h1 className="hero__title">Leasing From D&amp;M</h1>
        <Link to="/new-cars" className="hero__btn">
          FIND A CAR
        </Link>
      </div>
    </div>
  </div>
);

export default HeroSlide;
