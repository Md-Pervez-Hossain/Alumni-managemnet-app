import React from "react";
import "./App.css";
import EmailSubScribe from "./sharedComponents/EmailSubScribe/EmailSubScribe";
import NewsCards from "./sharedComponents/NewsCards/NewsCards";
import SuccessStories from "./sharedComponents/SuccessStories/SuccessStories";
import UpComingEvents from "./sharedComponents/UpComingEvents/UpComingEvents";

function App() {
  return (
    <div>
      <UpComingEvents />
      <SuccessStories />
      <NewsCards />
      <EmailSubScribe/>
    </div>
  );
}

export default App;
