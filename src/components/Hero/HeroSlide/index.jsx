import "./style.scss";
import slideBackground from "../../../assets/images/hero-bg.jpg";

const HeroSlide = () => (
  <div
    className="hero__slide"
    style={{ backgroundImage: `url(${slideBackground})` }}
  >
    <div className="container">
      <div className="hero__content">
        <h1 className="hero__title">Leasing From D&amp;M</h1>
        <a href="#cars" className="hero__btn">
          FIND A CAR
        </a>
      </div>
    </div>
  </div>
);

export default HeroSlide;
