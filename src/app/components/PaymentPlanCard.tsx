import Link from "next/link";
import React from "react";

function PaymentPlanCard({
  imgUrl,
  amountPercentage,
  description,
  linkTitle,
  linkHref,
}: any) {
  return (
    <div
      id="payment_plan_card"
      className=" w-[90%] flex flex-col justify-center items-center rounded-md p-5 sm:w-[45%] md:w-[30%]"
    >
      <img src={imgUrl} />
      <h1 className="text-[#FFC100] text-2xl">{amountPercentage}%</h1>
      <p className="mb-5">{description}</p>
      <Link href={linkHref} className="bg-[#fcc100] px-5 py-3 rounded-lg">
        {linkTitle}
      </Link>
    </div>
  );
}

export default PaymentPlanCard;
