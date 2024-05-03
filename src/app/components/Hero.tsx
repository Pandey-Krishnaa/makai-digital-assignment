import React from "react";
type propType = {
  imgUrl: string;
  heading: string;
  description: string;
  linkTitle: string;
  linkHref: string;
};
const heroSectionConstants: propType[] = [
  {
    imgUrl:
      "https://propertymetre.com/sobhaone/img/slider/sobha-one-banner-4.webp",
    heading: "Live the Luxury With",
    description:
      "access to private golf course & luxurious, sophisticated lifestyle that rivals the best amenities on earth",
    linkTitle: "Get Free Consultation",
    linkHref: "#",
  },
  {
    imgUrl:
      "https://propertymetre.com/sobhaone/img/slider/sobha-one-banner-3.webp",
    heading: "1, 2, 3 & 4 bedroom waterfront apartments",
    description:
      "live the luxury! with stunning interiors, elegant designs and a flawless finish,get the best with Sobha one",
    linkTitle: "Book Now",
    linkHref: "#",
  },
  {
    imgUrl:
      "https://propertymetre.com/sobhaone/img/slider/sobha-one-banner-1.webp",
    heading: "Sobha One, Dubai's Hottest New Launch",
    description:
      "A sophisticated tapestry across the skyline located just 8 minutes away from Burj Khalifa at Meydanin MBR Citu",
    linkTitle: "Make An Enquiry",
    linkHref: "#",
  },
  {
    imgUrl:
      "https://propertymetre.com/sobhaone/img/slider/sobha-one-banner-2.webp",
    heading: "Mahnificent Views in Every Direction",
    description:
      "Look Around to enjoy the view of private golf course, calm waters, wild life sanctuary & the Iconic Burj Khalifa",
    linkTitle: "Contact Us",
    linkHref: "#",
  },
];
import HeroCard from "./HeroCard";
function Hero() {
  return (
    <div className="hero flex flex-wrap gap-5 justify-center p-5">
      {heroSectionConstants.map((val, i) => (
        <HeroCard {...val} key={i} />
      ))}
    </div>
  );
}

export default Hero;
