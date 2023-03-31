import React from "react";
import "./App.css";
import SuccessStories from "./sharedComponents/SuccessStories/SuccessStories";
import UpComingEvents from "./sharedComponents/UpComingEvents/UpComingEvents";

function App() {
  return (
    <div>
      <UpComingEvents />
      <SuccessStories/>
    </div>
  );
}

export default App;
