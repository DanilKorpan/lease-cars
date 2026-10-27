import "./style.scss";

const ConsiderationCard = ({ image, imageAlt, description }) => (
  <article className="consideration-card">
    <img
      className="consideration-card__image"
      src={image}
      alt={imageAlt}
    />
    <p>{description}</p>
  </article>
);

export default ConsiderationCard;
