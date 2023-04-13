import React from "react";
import UpComingEvents from "../../sharedComponents/UpComingEvents/UpComingEvents";
import EmailSubScribe from "../../sharedComponents/EmailSubScribe/EmailSubScribe";
// import AllEvents from "../../sharedComponents/Events/AllEvents/AllEvents";
import NewsSection from "../../sharedComponents/NewsCards/NewsSection";
import SuccessStoriesSection from "../../sharedComponents/SuccessStories/SuccessStoriesSection";

const Uhai = () => {
  return (
    <div>
      <UpComingEvents />
      {/* <AllEvents /> */}
      <SuccessStoriesSection />
      <NewsSection />
      <EmailSubScribe />
    </div>
  );
};

export default Uhai;
