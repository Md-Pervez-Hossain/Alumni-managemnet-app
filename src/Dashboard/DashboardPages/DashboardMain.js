import React from "react";
import StatsCard from "../DashboardComponents/StatsCard";
import ProfileProjectCards from "../DashboardComponents/ProfileProjectCards";
import ProfileBlogCards from "../DashboardComponents/ProfileBlogCards";
import ProfileBlogCardsImage from "../DashboardComponents/ProfileBlogCardsImage";

const DashboardMain = () => {
  const increment = 55;
  return (
    <div className="px-4 mb-10">
      <div className="relative grid grid-cols-2 md:grid-cols-4 items-center space-between w-full gap-2 md:gap-5 mb-2 md:mb-6 ">
        {" "}
        <StatsCard
          icon="fa-solid fa-coins"
          text="Total Donation"
          stats={` ${increment > 0 ? "+" : "-"}${increment}%`}
          number={`$${increment}`}
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
    </div>
  );
};

export default DashboardMain;
