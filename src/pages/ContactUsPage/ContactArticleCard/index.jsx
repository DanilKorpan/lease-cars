import { useState } from "react";
import "./style.scss";

const ContactArticleCard = ({
  image,
  imageAlt,
  title,
  summary,
  showSummary,
}) => {
  const [isExpanded, setIsExpanded] = useState(null);
  const summaryIsVisible = isExpanded ?? showSummary;

  return (
    <article className="contact-article">
      <img className="contact-article__image" src={image} alt={imageAlt} />
      <div className="contact-article__details">
        <h2>{title}</h2>
        <button
          aria-expanded={summaryIsVisible}
          className="contact-article__toggle"
          onClick={() => setIsExpanded(!summaryIsVisible)}
          type="button"
        >
          {summaryIsVisible ? "less" : "more"}
        </button>
      </div>
      {summaryIsVisible && <p className="contact-article__summary">{summary}</p>}
    </article>
  );
};

export default ContactArticleCard;
