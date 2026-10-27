import "./style.scss";
import { LEASE_RULES } from "../../../constants/leasingData";
import LeaseRule from "../LeaseRule";

const HowLeasingWorks = () => (
  <section className="leasing-guide section" id="leasing">
    <div className="leasing-guide__copy">
      <h2 className="section__title">How Does Leasing Work?</h2>
      <p className="leasing-guide__intro">
        Leasing a vehicle is essentially entering into a long term rental
        agreement for that vehicle. Unlike a traditional car purchase, you
        don&apos;t actually own the vehicle. Instead, a leasing company
        purchases the vehicle from the dealer on your behalf and then you make
        monthly payments to the leasing company for the duration of your lease.
        Some leases, however, do provide the option to purchase the vehicle at
        the end of the lease.
      </p>
      <h3 className="leasing-guide__subheading">
        Similar to a short term car rental, there are rules that define:
      </h3>
      <ol className="leasing-guide__rules">
        {LEASE_RULES.map((rule, index) => (
          <LeaseRule key={rule.description} number={index + 1} {...rule} />
        ))}
      </ol>
      <p className="leasing-guide__outro">
        Lease contracts are a commitment and ending them early can be difficult
        and expensive so it is important to consider your circumstances
        carefully before you decide.
      </p>
    </div>
  </section>
);

export default HowLeasingWorks;
