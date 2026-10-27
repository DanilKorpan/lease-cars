import "./style.scss";
import { WHY_LEASE_ITEMS } from "../../constants/whyLeaseData";
import WhyLeaseCard from "./WhyLeaseCard";

const WhyLease = () => {
  return (
    <section className="why-lease section" id="cars">
      <div className="container">
        <h2 className="section__title">Why Lease with D&amp;M?</h2>
        <div className="why-lease__grid">
          {WHY_LEASE_ITEMS.map((item) => (
            <WhyLeaseCard key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyLease;
