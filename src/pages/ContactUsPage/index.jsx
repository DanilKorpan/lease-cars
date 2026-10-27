import { useEffect, useState } from "react";
import "./style.scss";
import ArticleCard from "../../components/ArticleCard";
import { ARTICLES } from "../../constants/articleData";

const ContactUsPage = () => {
  const [submitted, setSubmitted] = useState(false);
  const [showArticleSummaries, setShowArticleSummaries] = useState(false);

  useEffect(() => {
    document.title = "Contact Us | Leasing From D&M";

    return () => {
      document.title = "Leasing From D&M";
    };
  }, []);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <main className="contact-page">
      <section className="contact-page__form-section">
        <div className="container">
          <div className="contact-page__intro">
            <h1>Contact Us</h1>
            <p>
              Feel free to contact us with questions, potential partnerships or
              media inquiries
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="contact-form__fields">
              <label>
                <span className="visually-hidden">Name</span>
                <input autoComplete="name" name="name" placeholder="Name" required />
              </label>
              <label>
                <span className="visually-hidden">E-mail</span>
                <input
                  autoComplete="email"
                  name="email"
                  placeholder="E-mail"
                  required
                  type="email"
                />
              </label>
            </div>
            <label>
              <span className="visually-hidden">Your text</span>
              <textarea name="message" placeholder="Your text" required rows="7" />
            </label>
            <button type="submit">SUBMIT</button>
            {submitted && (
              <p className="contact-form__notice" role="status">
                This form is not connected to a message service yet. Your
                message has not been sent.
              </p>
            )}
          </form>
        </div>
      </section>

      <section className="contact-page__articles" aria-label="Related articles">
        <div className="container">
          <div className="contact-page__article-grid">
            {ARTICLES.map((article) => (
              <ArticleCard
                key={article.title}
                {...article}
                showSummary={showArticleSummaries}
              />
            ))}
          </div>
          <button
            className="contact-page__show-more"
            onClick={() => setShowArticleSummaries((isShown) => !isShown)}
            type="button"
          >
            {showArticleSummaries ? "SHOW LESS" : "SHOW MORE"}
          </button>
        </div>
      </section>
    </main>
  );
};

export default ContactUsPage;
