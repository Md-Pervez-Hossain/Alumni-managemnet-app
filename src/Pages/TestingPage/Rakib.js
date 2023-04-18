import React from "react";
<<<<<<< HEAD
import SingleStudent from "../../sharedComponents/SingleStudent/SingleStudent";
import SliderTwo from "../../sharedComponents/Slider/SliderTwo";
import Counter from "../../sharedComponents/Counter/Counter";
import AlumniDashboard from "../../sharedComponents/AlumniDashboard/AlumniDashboard";
import NewsCreateForm from "../../Dashboard/DashboardComponents/NewsCreateForm/NewsCreateForm";
import CreateEvents from "../../Dashboard/DashboardComponents/CreateEvents/CreateEvents";
import SingleNewsSection from "../../sharedComponents/NewsCards/SingleNewsSection";
=======
<<<<<<< HEAD
import BatchwiseStudent from "../BatchwiseStudent/BatchwiseStudent";
import SingleStudent from "../../sharedComponents/SingleStudent/SingleStudent";
import SliderTwo from "../../sharedComponents/Slider/SliderTwo";
=======
import BatchwiseStudent from "../../sharedComponents/BatchwiseStudent/BatchwiseStudent";
import SingleStudent from "../SingleStudent/SingleStudent";
>>>>>>> 1bb868742c20713fc3392c1953309566059460c2
>>>>>>> origin/staging-rony

const Rakib = () => {
  return (
    <div className="">
      <SingleStudent></SingleStudent>
      <SliderTwo></SliderTwo>
      <Counter></Counter>
      <AlumniDashboard></AlumniDashboard>
      <NewsCreateForm />
      <CreateEvents></CreateEvents>
      <SingleNewsSection></SingleNewsSection>
    </div>
  );
};

export default Rakib;
