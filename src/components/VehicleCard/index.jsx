import { Link } from "react-router-dom";
import "./style.scss";

const currency = new Intl.NumberFormat("en-US", {
  style: "currency",
  currency: "USD",
  maximumFractionDigits: 0,
});

const VehicleCard = ({ name, image, imageAlt, price, monthlyPayment }) => (
  <article className="vehicle-card">
    <img className="vehicle-card__image" src={image} alt={imageAlt} />
    <div className="vehicle-card__content">
      <h2>{name}</h2>
      <p className="vehicle-card__starting-price">
        starting from {currency.format(price)}
      </p>
      <p className="vehicle-card__monthly-payment">
        {currency.format(monthlyPayment)}/mo
      </p>
      <Link className="vehicle-card__details" to="/contact-us">
        see details
      </Link>
    </div>
  </article>
);

export default VehicleCard;
