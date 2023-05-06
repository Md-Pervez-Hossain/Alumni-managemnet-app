import React from "react";
import EmailSubScribe from "../../sharedComponents/EmailSubScribe/EmailSubScribe";
import NewsSection from "../../sharedComponents/NewsCards/NewsSection";
import SuccessStoriesSection from "../../sharedComponents/SuccessStories/SuccessStoriesSection";
import UpComingEventsCard from "../Home/UpComingEventsCard/UpComingEventsCard";
import NewsCreateForm from "../../Dashboard/DashboardComponents/NewsCreateForm/NewsCreateForm";
import NewsUpdatePage from "../../sharedComponents/NewsUpdatePage/NewsUpdatePage";
import EventUpdatePages from "../../Dashboard/DashboardPages/EventUpdatePage/EventUpdatePages";
import AddAEvent from "../../Dashboard/DashboardPages/Events/AddAEvent";
import JoinedEventUpdatePage from "../../Dashboard/DashboardPages/JoinedEventUpdatePage/JoinedEventUpdatePage";

const Uhai = () => {
  return (
    <div>
      {/* <UpComingEventsCard /> */}
      {/* <AllEvents /> */}
      {/* <SuccessStoriesSection /> */}

     <NewsUpdatePage></NewsUpdatePage>
     {/* <EventUpdatePages></EventUpdatePages> */}

     {/* <JoinedEventUpdatePage></JoinedEventUpdatePage> */}

     
      <AddAEvent></AddAEvent>
      {/* <NewsSection /> */}
      {/* <EmailSubScribe /> */}
      {/* <NewsCreateForm></NewsCreateForm> */}
    </div>
  );
};

export default Uhai;
