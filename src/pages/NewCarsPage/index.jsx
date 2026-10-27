import { useEffect, useMemo, useState } from "react";
import { ARTICLES } from "../../constants/articleData";
import { NEW_CARS, NEW_CAR_CATEGORIES } from "../../constants/newCarsData";
import ArticleCard from "../../components/ArticleCard";
import VehicleCard from "../../components/VehicleCard";
import "./style.scss";

const NewCarsPage = () => {
  const [activeCategory, setActiveCategory] = useState(null);
  const [showArticleSummaries, setShowArticleSummaries] = useState(false);

  const visibleCars = useMemo(
    () =>
      activeCategory
        ? NEW_CARS.filter((car) => car.categories.includes(activeCategory))
        : NEW_CARS,
    [activeCategory],
  );

  useEffect(() => {
    document.title = "New Cars | Leasing From D&M";

    return () => {
      document.title = "Leasing From D&M";
    };
  }, []);

  return (
    <main className="new-cars-page">
      <section className="new-cars-page__catalog">
        <div className="container">
          <h1 className="section__title">Choose your car</h1>
          <div
            className="new-cars-page__categories"
            aria-label="Car categories"
          >
            {NEW_CAR_CATEGORIES.map((category) => (
              <button
                aria-pressed={activeCategory === category}
                className={
                  activeCategory === category
                    ? "new-cars-page__category is-active"
                    : "new-cars-page__category"
                }
                key={category}
                onClick={() =>
                  setActiveCategory((current) =>
                    current === category ? null : category,
                  )
                }
                type="button"
              >
                {category}
              </button>
            ))}
          </div>

          <div className="new-cars-page__grid" aria-live="polite">
            {visibleCars.map((car) => (
              <VehicleCard key={car.name} {...car} />
            ))}
          </div>
          {activeCategory && (
            <button
              className="new-cars-page__show-all"
              onClick={() => setActiveCategory(null)}
              type="button"
            >
              SHOW ALL CARS
            </button>
          )}
        </div>
      </section>

      <section
        className="new-cars-page__articles"
        aria-label="Car buying guides"
      >
        <div className="container">
          <div className="new-cars-page__article-grid">
            {ARTICLES.map((article) => (
              <ArticleCard
                key={article.title}
                {...article}
                showSummary={showArticleSummaries}
              />
            ))}
          </div>
          <button
            className="new-cars-page__show-more"
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

export default NewCarsPage;
