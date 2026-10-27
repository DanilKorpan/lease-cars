import "./style.scss";
import leasingVideoImage from "../../../assets/images/leasing-video.jpg";

const WelcomeSection = () => (
  <section className="welcome section">
    <div className="container">
      <h2 className="section__title">WELCOME TO D&amp;M LEASING</h2>
      <p className="welcome__subtitle">
        Find out how easy it is to lease from D&amp;M
      </p>
      <a
        className="welcome__video"
        href="#cars"
        aria-label="Explore cars from D&M Leasing"
        style={{ backgroundImage: `url(${leasingVideoImage})` }}
      >
        <span className="welcome__play" aria-hidden="true">
          <svg viewBox="0 0 24 24">
            <path d="M8 5.8c0-.8.9-1.3 1.6-.9l9 5.2a1 1 0 0 1 0 1.8l-9 5.2a1 1 0 0 1-1.6-.9V5.8Z" />
          </svg>
        </span>
      </a>
    </div>
  </section>
);

export default WelcomeSection;
