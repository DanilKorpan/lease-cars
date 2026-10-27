import "./style.scss";
import { CONSIDERATIONS } from "../../../constants/leasingData";
import ConsiderationCard from "../ConsiderationCard";

const Considerations = () => (
  <section className="considerations section" id="considerations">
    <div className="container">
      <h2 className="section__title">Important Things to Consider</h2>
      <p className="considerations__intro">
        Depending on your circumstances and what is important to you, a lease
        could be a great option for your next vehicle. Below are some important
        factors that may influence your decision.
      </p>
      <div className="considerations__grid">
        {CONSIDERATIONS.map((item) => (
          <ConsiderationCard key={item.imageAlt} {...item} />
        ))}
      </div>
    </div>
  </section>
);

export default Considerations;
