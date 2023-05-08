import React from "react";
import StatsCard from "../DashboardComponents/StatsCard";
import ProfileBlogCards from "../DashboardComponents/ProfileBlogCards";
import ProfileBlogCardsImage from "../DashboardComponents/ProfileBlogCardsImage";
import LineChart from "../DashboardComponents/Charts/DashboardChart/LineChart";
import { linedata as lineData } from "../DashboardComponents/Charts/DashboardChart/lineData";

const DashboardMain = () => {
  const increment = 55;
  const number = 100;
  return (
    <div className="px-4 mb-10">
      <div className="relative grid grid-cols-2 md:grid-cols-4 items-center space-between w-full gap-2 md:gap-5 mb-2 md:mb-6 ">
        {" "}
        <StatsCard
          icon="fa-solid fa-coins"
          text="Total Amount"
          stats={` ${increment > 0 ? "+" : "-"}${increment}%`}
          number={`$${number}`}
        />
        <StatsCard
          icon="fa-solid fa-coins"
          text="Total Students"
          stats={` ${increment > 0 ? "+" : "-"}${increment}%`}
          number={`${increment}`}
        />
        <StatsCard
          icon="fa-solid fa-coins"
          text="Awesome Bhai"
          stats={` ${increment > 0 ? "+" : "-"}${increment}%`}
          number={`$${increment}`}
        />
        <StatsCard
          icon="fa-solid fa-coins"
          text="Awesome Bhai"
          stats={` ${increment > 0 ? "+" : "-"}${increment}%`}
          number={`$${increment}`}
        />
      </div>
      <div className="relative flex flex-col md:flex-row items-center space-between w-full gap-2 md:gap-5 mb-2 md:mb-6 ">
        <div className="w-full md:w-7/12">
          <ProfileBlogCards />
        </div>
        <div className="w-full md:w-5/12">
          <ProfileBlogCardsImage />
        </div>
      </div>
      <div className="relative grid grid-cols-2 items-center space-between w-full gap-2 md:gap-5 mb-2 md:mb-6 ">
        {/* <DashboardChart /> */}
        <LineChart data={lineData} />
        <LineChart data={lineData} />
      </div>
    </div>
  );
};

export default DashboardMain;
