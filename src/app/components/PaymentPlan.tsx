import React from "react";
import PaymentPlanCard from "./PaymentPlanCard";
const paymentPlanConstants = [
  {
    imgUrl: "https://propertymetre.com/sobhaone/img/icons/icon-img/21.png",
    amountPercentage: 10,
    description: "Downpayment at booking",
    linkTitle: "Book Now",
    linkHref: "#",
  },
  {
    imgUrl: "https://propertymetre.com/sobhaone/img/icons/icon-img/22.png",
    amountPercentage: 60,
    description: "During Construction",
    linkTitle: "Book Now",
    linkHref: "#",
  },
  {
    imgUrl: "https://propertymetre.com/sobhaone/img/icons/icon-img/23.png",
    amountPercentage: 40,
    description: "On Handover in Q4 2026",
    linkTitle: "Book Now",
    linkHref: "#",
  },
];
function PaymentPlan() {
  return (
    <div className="payment_plan p-10">
      <h2 className="text-[#FFC100] text-3xl font-bold uppercase">
        Payment Plan
      </h2>
      <h1 className="text-4xl font-bold">Starting From AED 1.4M</h1>
      <p>Book With 2% & Get a Free Travel Package to Dubai for 2 People</p>
      <div className="payment_plan_cards flex flex-wrap  justify-center mt-5">
        {paymentPlanConstants.map((data, i) => (
          <PaymentPlanCard
            key={i}
            description={data.description}
            imgUrl={data.imgUrl}
            linkTitle={data.linkTitle}
            linkHref={data.linkHref}
            amountPercentage={data.amountPercentage}
          />
        ))}
      </div>
    </div>
  );
}

export default PaymentPlan;
