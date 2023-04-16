import React from "react";
import FundsForCause from "../../sharedComponents/FundsForCause/FundsForCause";
import Gallery from "../../sharedComponents/Gallery/Gallery";
import MembersStat from "../../sharedComponents/MembersStat/MembersStat";
import Slider from "../../sharedComponents/Slider/Slider";
import SuccessStoriesSection from "../../sharedComponents/SuccessStories/SuccessStoriesSection";
import UpComingEvents from "../../sharedComponents/UpComingEvents/UpComingEvents";
import EmailSubScribe from "../../sharedComponents/EmailSubScribe/EmailSubScribe";
import MissionHeading from "../../sharedComponents/MissionHeading/MissionHeading";
import Contact from "../../sharedComponents/Contact/Contact";
import NewsSection from "../../sharedComponents/NewsCards/NewsSection";
import AlumniDirectory from "./AlumniDirectory";

const Home = () => {
  return (
    <>
      <Slider />
      <div className="w-9/12 mx-auto">
        <UpComingEvents />
      </div>

      <div className=" bg-accent py-10 my-20">
        <div className="w-9/12 mx-auto">
          <MissionHeading />
          <AlumniDirectory />
        </div>
      </div>

      <div className="w-9/12 mx-auto my-20">
        <Gallery></Gallery>
      </div>

      <div className=" bg-accent py-10 my-20">
        <div className="w-9/12 mx-auto">
          <MembersStat />
        </div>
      </div>

      <div className="w-9/12 mx-auto my-20">
        <SuccessStoriesSection />
        <FundsForCause />
        <NewsSection />
        <Contact />
      </div>
      <EmailSubScribe />
    </>
  );
};

export default Home;
