import React from "react";

// import SingleStudent from "../../sharedComponents/SingleStudent/SingleStudent";
import SliderTwo from "../../sharedComponents/Slider/SliderTwo";
import Counter from "../../sharedComponents/Counter/Counter";
import AlumniDashboard from "../../sharedComponents/AlumniDashboard/AlumniDashboard";
import NewsCreateForm from "../../Dashboard/DashboardComponents/NewsCreateForm/NewsCreateForm";
import CreateEvents from "../../Dashboard/DashboardComponents/CreateEvents/CreateEvents";
import SingleNewsSection from "../../sharedComponents/NewsCards/SingleNewsSection";
import CreateGallery from "../../sharedComponents/CreateGallery/CreateGallery";
import CreateSuccessFullStory from "../../sharedComponents/CreateSuccessFullStory/CreateSuccessFullStory";
import SingleSuccessFullStory from "../../sharedComponents/CreateSuccessFullStory/SingleSuccessFullStory";

// import BatchwiseStudent from "../BatchwiseStudent/BatchwiseStudent";

// import BatchwiseStudent from "../../sharedComponents/BatchwiseStudent/BatchwiseStudent";
// import SingleStudent from "../SingleStudent/SingleStudent";

const Rakib = () => {
  return (
    <div className="">
      {/* <SingleStudent></SingleStudent> */}
      <SliderTwo></SliderTwo>
      {/* <Counter></Counter>
      <AlumniDashboard></AlumniDashboard> */}
      <NewsCreateForm />
      <CreateEvents></CreateEvents>
      <SingleNewsSection></SingleNewsSection>
      <CreateGallery></CreateGallery>
      <CreateSuccessFullStory></CreateSuccessFullStory>
      <SingleSuccessFullStory></SingleSuccessFullStory>
    </div>
  );
};

export default Rakib;
