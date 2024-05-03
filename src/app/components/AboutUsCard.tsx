import React from "react";

function AboutUsCard({
  heading,
  description,
}: {
  heading: string;
  description: string;
}) {
  return (
    <div
      id="about_us_card"
      className="mb-2 border-l-2 border-[#FFC100] pl-5 py-2 relative overflow-hidden"
    >
      <div className=" z-50">
        <h1 className="text-[#FFC100] font-bold text-3xl about_us_card_heading">
          {heading.toUpperCase()}
        </h1>
        <p>{description}</p>
      </div>
      <div
        className="  z-[-1] w-full h-full bg-[#fcc100] absolute top-0 pl-5 left-[-100%] transition-all"
        id="about_us_bg_slide"
      ></div>
    </div>
  );
}

export default AboutUsCard;
