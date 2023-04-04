import React from "react";
import FundsForCause from "../../sharedComponents/FundsForCause/FundsForCause";
import Gallery from "../../sharedComponents/Gallery/Gallery";
import MembersStat from "../../sharedComponents/MembersStat/MembersStat";
import Slider from "../../sharedComponents/Slider/Slider";
import SuccessStories from "../../sharedComponents/SuccessStories/SuccessStories";
import UpComingEvents from "../../sharedComponents/UpComingEvents/UpComingEvents";
import NewsCard from "../../sharedComponents/NewsCards/NewsCards";
import EmailSubScribe from "../../sharedComponents/EmailSubScribe/EmailSubScribe";
import AlumniDirectory from "../../sharedComponents/AlumniDirectory/AlumniDirectory";
import MissionHeading from "../../sharedComponents/MissionHeading/MissionHeading";
import SingleEvents from "../../sharedComponents/Events/SingleEvents/SingleEvents";
import Contact from "../../sharedComponents/Contact/Contact";

const Home = () => {
  return (
    <>
      <Slider />
      <div className="max-w-5xl mx-auto">
        <UpComingEvents />
        <h1 class="text-3xl font-bold underline">Hello world!</h1>
        <FundsForCause />
        <div className="bg-accent">
          <MissionHeading />
          <AlumniDirectory />
        </div>
        <Gallery></Gallery>
        <MembersStat />
        <SuccessStories />
        <NewsCard />
        <Contact />
      </div>
      <EmailSubScribe />
    </>
  );
};

export default Home;
