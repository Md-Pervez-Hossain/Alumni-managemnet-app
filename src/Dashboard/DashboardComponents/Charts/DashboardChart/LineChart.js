import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, scales } from "chart.js/auto";
import { Chart } from "chart.js";

const LineChart = ({ data }) => {
  const [userData, setUserData] = useState({
    labels: data?.map((data) => data.year),

    datasets: [
      {
        label: "users Gained",
        data: data?.map((data) => data.userGain),

        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea, scales } = chart;
          if (!chartArea) {
            return null;
          }
          return bgGradientPink(ctx, chartArea, scales);
        },
        borderColor: ["#CB0C9F"],
        tension: 0.4,
        fill: true,
      },
      {
        label: "users Gained",
        data: data?.map((data) => data.userLost),
        borderColor: "#3A416F",
        backgroundColor: (context) => {
          const chart = context.chart;
          const { ctx, chartArea, scales } = chart;
          if (!chartArea) {
            return null;
          }
          return bgGradientDark(ctx, chartArea, scales);
        },

        tension: 0.4,
        fill: true,
      },
    ],
    options: {
      responsive: true,

      tooltips: {
        enabled: true,
      },
      plugins: {
        legend: {
          display: false,
        },
      },
    },
  });

  return (
    <div class="w-full max-w-full px-3 mt-0 lg:w-7/12 lg:flex-none">
      <div class="relative z-20 flex flex-col min-w-0 break-words bg-white border-0 border-solid dark:bg-gray-950 border-black-125 shadow-soft-xl dark:shadow-soft-dark-xl rounded-2xl bg-clip-border">
        <div class="p-6 pb-0 mb-0 border-b-0 border-solid border-black-125 rounded-t-2xl">
          <h6 class="dark:text-white">Sales overview</h6>
          <p class="leading-normal text-sm dark:opacity-60">
            <i class="fa fa-arrow-up text-lime-500" aria-hidden="true"></i>
            <span class="font-semibold">4% more</span> in 2021
          </p>
        </div>
        <div class="flex-auto p-4">
          <div>
            <Line data={userData} options={userData.options}></Line>
          </div>
        </div>
      </div>
    </div>
  );
};

function bgGradientPink(ctx, chartArea, scales) {
  const { left, right, top, bottom, width, height } = chartArea;
  const { x, y } = scales;
  const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
  gradientBg.addColorStop(0, "rgba(234,72,154, 0.3)");
  gradientBg.addColorStop(1, "rgba(234,72,154, 0)");

  return gradientBg;
}
function bgGradientDark(ctx, chartArea, scales) {
  const { left, right, top, bottom, width, height } = chartArea;
  const { x, y } = scales;
  const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
  gradientBg.addColorStop(0, "rgba(58,65,111, 0.3)");
  gradientBg.addColorStop(1, "rgba(58,65,111, 0)");

  return gradientBg;
}

export default LineChart;
