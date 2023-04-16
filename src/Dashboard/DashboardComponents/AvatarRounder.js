import React from "react";

const AvatarRounder = ({ img, h, w }) => {
  return (
    <>
      <img
        loading="lazy"
        src={
          img
            ? img
            : "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard/assets/img/drake.jpg"
        }
        alt="avatar"
        className={`${h ? h : "h-14"} ${
          w ? w : "w-14"
        } inline-flex items-center justify-center mr-2 text-white transition-all duration-200 ease-in-out text-sm rounded-full`}
      />
    </>
  );
};

export default AvatarRounder;
