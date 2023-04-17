import React, { useEffect, useRef, useState } from "react";

const Counter = ({ date }) => {
  const [days, setDays] = useState("00");
  const [hours, setHours] = useState("00");
  const [mintues, setMintues] = useState("00");
  const [seceonds, setSeceonds] = useState("00");

  let interval = useRef();

  const startTimer = () => {
    const coundownDate = new Date(date).getTime();

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = coundownDate - now;
      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const mintues = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seceonds = Math.floor((distance % (1000 * 60)) / 1000);
      // console.log(days, hours, mintues, seceonds);
      if (distance < 0) {
        clearInterval(interval.current);
      } else {
        setDays(days);
        setHours(hours);
        setMintues(mintues);
        setSeceonds(seceonds);
      }
    }, 1000);
  };

  useEffect(() => {
    startTimer();
    return () => {
      clearInterval(interval.current);
    };
  });

  return (
    <div>
      <div className="flex gap-4 ">
        <div>
          <span className="text-white text-xs text-center">Days</span>
          <div className="w-6 h-6 bg-white text-center rounded-full flex justify-center items-center text-md font-semibold">
            {" "}
            <span>{days}</span>{" "}
          </div>
        </div>
        <div>
          <span className="text-white text-xs text-center">Hours</span>
          <div className="w-6 h-6 bg-white text-center rounded-full flex justify-center items-center text-md font-semibold">
            {" "}
            <span>{hours}</span>
          </div>
        </div>
        <div>
          <span className="text-white text-xs text-center">Min</span>
          <div className="w-6 h-6 bg-white text-center rounded-full flex justify-center items-center text-md font-semibold">
            {" "}
            <span>{mintues}</span>
          </div>
        </div>
        <div>
          <span className="text-white text-xs text-center">Sec</span>
          <div className="w-6 h-6 bg-white text-center rounded-full flex justify-center items-center text-md font-semibold">
            {" "}
            <span>{seceonds}</span>
          </div>
        </div>
        {/* <span className="text-white mt-6">Remaining</span> */}
      </div>
    </div>
  );
};

export default Counter;
