import React from "react";
import Link from "next/link";
type propType = {
  imgUrl: string;
  heading: string;
  description: string;
  linkTitle: string;
  linkHref: string;
};
function HeroCard({
  imgUrl,
  heading,
  description,
  linkHref,
  linkTitle,
}: propType) {
  return (
    <div
      className="relative w-[100%] overflow-hidden transition-all rounded-md lg:w-[48%]"
      id="hero_card"
    >
      <div className="image_container w-full h-ful">
        <img
          src={imgUrl}
          alt="banner"
          width={100}
          height={100}
          className="w-full h-full"
        />
      </div>
      <div
        className="w-full h-full bg-[#000000be] absolute top-[100%] transition-all flex flex-col justify-center items-start p-5 gap-y-2"
        id="hero_container_content_overlay"
      >
        <h1 className="text-2xl text-[#FFC100] text-2">
          {heading.toUpperCase()}
        </h1>
        <p className="text-white border-l-2 border-[#FFC100] pl-3">
          {description}
        </p>
        <Link href={linkHref} className="bg-[#FFC100] px-3 py-2 rounded-lg">
          {linkTitle.toUpperCase()}
        </Link>
      </div>
    </div>
  );
}

export default HeroCard;
