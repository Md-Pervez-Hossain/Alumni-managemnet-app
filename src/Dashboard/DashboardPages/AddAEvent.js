import React from "react";
import CreateEvents from "../DashboardComponents/CreateEvents/CreateEvents";

const AddAEvent = () => {
  return (
    <div className="flex w-full">
      <div className="w-3/4 p-2 m-2 ">
        <CreateEvents />
      </div>
      <div className="w-1/4 p-2 m-2 bg-red-500"></div>
    </div>
  );
};

export default AddAEvent;
