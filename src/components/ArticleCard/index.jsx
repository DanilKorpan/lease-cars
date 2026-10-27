import { useState } from "react";
import "./style.scss";

const ArticleCard = ({ image, imageAlt, title, summary, showSummary }) => {
  const [isExpanded, setIsExpanded] = useState(null);
  const summaryIsVisible = isExpanded ?? showSummary;

  return (
    <article className="article-card">
      <img className="article-card__image" src={image} alt={imageAlt} />
      <div className="article-card__details">
        <h2>{title}</h2>
        <button
          aria-expanded={summaryIsVisible}
          className="article-card__toggle"
          onClick={() => setIsExpanded(!summaryIsVisible)}
          type="button"
        >
          {summaryIsVisible ? "less" : "more"}
        </button>
      </div>
      {summaryIsVisible && (
        <p className="article-card__summary">{summary}</p>
      )}
    </article>
  );
};

export default ArticleCard;
