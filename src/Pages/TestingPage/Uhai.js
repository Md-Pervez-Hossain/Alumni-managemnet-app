import React from "react";
import EmailSubScribe from "../../sharedComponents/EmailSubScribe/EmailSubScribe";
import NewsSection from "../../sharedComponents/NewsCards/NewsSection";
import SuccessStoriesSection from "../../sharedComponents/SuccessStories/SuccessStoriesSection";
import UpComingEventsCard from "../Home/UpComingEventsCard/UpComingEventsCard";

const Uhai = () => {
  return (
    <div>
      <UpComingEventsCard />
      {/* <AllEvents /> */}
      <SuccessStoriesSection />
      <NewsSection />
      <EmailSubScribe />
    </div>
  );
};

export default Uhai;
