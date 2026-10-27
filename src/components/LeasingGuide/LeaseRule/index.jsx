import "./style.scss";

const LeaseRule = ({ number, description }) => (
  <li className="leasing-guide__rule">
    <span className="leasing-guide__number">{number}</span>
    <p>{description}</p>
  </li>
);

export default LeaseRule;
