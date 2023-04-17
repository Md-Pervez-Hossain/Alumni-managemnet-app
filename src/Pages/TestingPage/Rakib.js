import React from "react";
import SingleStudent from "../../sharedComponents/SingleStudent/SingleStudent";
import SliderTwo from "../../sharedComponents/Slider/SliderTwo";
import Counter from "../../sharedComponents/Counter/Counter";
import AlumniDashboard from "../../sharedComponents/AlumniDashboard/AlumniDashboard";
import News from "../../sharedComponents/News/News";
import CreateEvents from "../../sharedComponents/CreateEvents/CreateEvents";

const Rakib = () => {
  return (
    <div className="">
      <SingleStudent></SingleStudent>
      <SliderTwo></SliderTwo>
      <Counter></Counter>
      <AlumniDashboard></AlumniDashboard>
      <News></News>
      <CreateEvents></CreateEvents>
    </div>
  );
};

export default Rakib;
