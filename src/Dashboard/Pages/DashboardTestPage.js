import React from "react";
import Alert from "../DashboardComponents/Alert";
import AvatarRounder from "../DashboardComponents/AvatarRounder";
import StatsCard from "../DashboardComponents/StatsCard";
import ProfileProjectCards from "../DashboardComponents/ProfileProjectCards";
import ProfileBlogCards from "../DashboardComponents/ProfileBlogCards";
import BuildProfile from "../DashboardComponents/BuildProfile";

const DashboardTestPage = () => {
  const increment = 55;
  return (
    <div className="flex flex-col align-middle my-5 py-5 gap-5 items-center">
      <Alert text="warning"></Alert>
      <AvatarRounder />
      <StatsCard
        icon="fa-solid fa-coins"
        text="Awesome Bhai"
        stats={` ${increment > 0 ? "+" : "-"}${increment}%`}
        number={`$${increment}`}
      />
      <ProfileProjectCards
        img="https://res.cloudinary.com/daily-now/image/upload/f_auto,q_auto/v1/posts/02f351b28d7e9a266e968dfb8ab1c27f"
        title=" Hiii "
        description="lorem lorem "
        link="/"
      />
      <ProfileBlogCards />
      <BuildProfile />
    </div>
  );
};

export default DashboardTestPage;
