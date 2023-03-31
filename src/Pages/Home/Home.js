import React from "react";
import FundsForCause from "../../sharedComponents/FundsForCause/FundsForCause";
import Gallery from "../../sharedComponents/Gallery/Gallery";
import MembersStat from "../../sharedComponents/MembersStat/MembersStat";
import Slider from "../../sharedComponents/Slider/Slider";
import SuccessStories from "../../sharedComponents/SuccessStories/SuccessStories";
import UpComingEvents from "../../sharedComponents/UpComingEvents/UpComingEvents";

const Home = () => {
  return (
    <>
      <Slider />
      <UpComingEvents></UpComingEvents>
      <FundsForCause />
      <Gallery></Gallery>
      <MembersStat />
      <SuccessStories />
    </>
  );
};

export default Home;
