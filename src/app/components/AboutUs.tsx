// @ts-nocheck
import React from "react";
import AboutUsCard from "./AboutUsCard";
const aboutUsCardConstant: any = [
  {
    heading: "Starting from aed 1.4m",
    description:
      "book now with 2% only and get 10% guranteed rental returns and high capitial appreciation.",
  },
  {
    heading: "the perfect residency",
    description:
      "sobha one is located just 8 minutes away from burj khalida & dubai and offering world class services.",
  },
  {
    heading: "Elegant And Refined Interiors",
    description:
      "Each Sobha One apartment beckons is studded with all the amenities that come with luxury living.",
  },
];
function AboutUs() {
  return (
    <div
      className="about_us flex px-5 py-4 gap-x-8 flex-wrap flex-col-reverse lg:flex-row lg:items-center  lg:p-10 "
      id="about"
    >
      <div className="about_us_left w-[100%] h-[400px] rounded-lg  overflow-hidden lg:w-[45%]  lg:h-auto">
        <img
          src="https://propertymetre.com/sobhaone/img/others/sobha-one-about.webp"
          alt="about us"
          className="w-full h-full rounded-lg transition-all hover:scale-125"
        />
      </div>
      <div className="about_us_right  w-[100%] lg:w-[45%]">
        <h1 className=" uppercase text-5xl font-bold mb-8">
          <span className="text-[#FFC100] ">Sobha One</span> - Perfect Fusion Of
          Luxury & Golf
        </h1>
        <p className=" capitalize mb-8">
          Introducing exclusive collection of 1 to 4 bedroom apartments and each
          unit is meticulously crafted facing lush green private golf course
          along with leisure amenities nestled at the podium level.
        </p>
        {aboutUsCardConstant.map((data, i) => {
          return (
            <AboutUsCard
              heading={data.heading}
              description={data.description}
              key={i}
            />
          );
        })}
      </div>
    </div>
  );
}

export default AboutUs;
