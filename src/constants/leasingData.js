import businessTaxBenefitImage from "../assets/images/business-tax-benefit.jpg";
import easyUpgradeImage from "../assets/images/easy-upgrade.jpg";
import leasePaymentsImage from "../assets/images/lease-monthly-payments.jpg";
import mileageAllowanceImage from "../assets/images/mileage-allowance.jpg";

export const LEASE_RULES = [
  {
    description:
      "How much you can drive, stated as annual miles (excess miles are charged at a specified rate)",
  },
  {
    description:
      "Types of damage that you may be liable for at the end of your lease",
  },
  {
    description:
      "The procedures and costs when you return the vehicle at the end of your lease",
  },
];

export const CONSIDERATIONS = [
  {
    image: leasePaymentsImage,
    imageAlt: "Spare tire on the back of a Jeep",
    description:
      "Monthly payments on leases are generally 20% - 30% cheaper than loans",
  },
  {
    image: businessTaxBenefitImage,
    imageAlt: "Toyota logo on a steering wheel",
    description:
      "You may be eligible for a tax break if you use the leased vehicle for business purposes",
  },
  {
    image: easyUpgradeImage,
    imageAlt: "Red car parked outside a modern building",
    description:
      "Easy to upgrade to the newest vehicle model every few years",
  },
  {
    image: mileageAllowanceImage,
    imageAlt: "Chevrolet badge on a car",
    description:
      "There are often fees charged if you drive more than your lease’s mileage allowance",
  },
];
