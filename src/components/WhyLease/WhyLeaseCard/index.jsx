import "./style.scss";

const WhyLeaseCard = ({ icon, title, description }) => {
  return (
    <article className="why-lease-card">
      <div className="why-lease-card__icon">
        <img src={icon} alt="" />
      </div>
      <h3>{title}</h3>
      <p>{description}</p>
    </article>
  );
};

export default WhyLeaseCard;
