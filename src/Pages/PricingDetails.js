import React from "react";
import PricingCard from "../Components/PricingCard";

function PricingDetails() {
  const data = [
    {
      plan: "Paid",
      dollar: '$0',
      txt1: "Single User",
      txt2:"5GB Storage",
      txt3: "Unlimited Public Projects",
      txt4: "Community Access",
      txt5: "Unlimited Private Projects",
      txt6: "Dedicated Phone Support",
      txt7: "Free Subdomain",
      txt8: "Monthly Status Reports"
    },
    {
      plan: "plus",
      dollar: '$9',
      txt1: "5 Users",
      txt2: "50GB Storage",
      txt3: "Unlimited Public Projects",
      txt4: "Community Access",
      txt5: "Unlimited Private Projects",
      txt6: "Dedicated Phone Support",
      txt7: "Free Subdomain",
      txt8: "Monthly Status Reports"
    },
    {
      plan: "pro",
      dollar: '$49',
      txt1: "Unlimited Users",
      txt2: "150GB Storage",
      txt3: "Unlimited Public Projects",
      txt4: "Community Access",
      txt5: "Unlimited Private Projects",
      txt6: "Dedicated Phone Support",
      txt7: "Free Subdomain",
      txt8: "Monthly Status Reports"
    },
  ];
  return (
    <section className="pricing py-5">
      <div className="container">
        <div className="row">
          {data &&
            data.map((details, index) => (
              <div key={`pricing-details-${index}`} className="col-lg-4">
                <PricingCard data={details} />
              </div>
            ))}
        </div>
      </div>
    </section>
  );
}

export default PricingDetails;
