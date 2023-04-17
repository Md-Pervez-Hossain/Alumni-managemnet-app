import React from "react";
import SingleStudent from "../../sharedComponents/SingleStudent/SingleStudent";
import SliderTwo from "../../sharedComponents/Slider/SliderTwo";
import Counter from "../../sharedComponents/Counter/Counter";
import AlumniDashboard from "../../sharedComponents/AlumniDashboard/AlumniDashboard";
import NewsCreateForm from "../../Dashboard/DashboardComponents/NewsCreateForm/NewsCreateForm";
import CreateEvents from "../../Dashboard/DashboardComponents/CreateEvents/CreateEvents";

const Rakib = () => {
  return (
    <div className="">
      <SingleStudent></SingleStudent>
      <SliderTwo></SliderTwo>
      <Counter></Counter>
      <AlumniDashboard></AlumniDashboard>
      <NewsCreateForm />
      <CreateEvents></CreateEvents>
    </div>
  );
};

export default Rakib;
