import React from "react";
import {
  FaArrowRight,
  FaCartPlus,
  FaDotCircle,
  FaRocket,
} from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

const AlumniDashboard = () => {
  return (
    <div className="w-11/12 mx-auto my-32">
      <div className="grid grid-cols-6 gap-4">
        <div className="bg-accent col-span-1  p-4">
          <h2>Dashboard</h2>
        </div>
        <div className="col-span-5">
          {/* first part start */}
          <div className="grid md:grid-cols-4 gap-5 mb-8">
            <div className="shadow-2xl p-2">
              <div className="flex items-center justify-between">
                <div>
                  <p>Todays Money</p>
                  <p className="font-semibold">
                    $53000{" "}
                    <span className="text-[12px] text-green-500">+55%</span>{" "}
                  </p>
                </div>
                <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500   text-white rounded-md p-3">
                  <FaCartPlus></FaCartPlus>
                </div>
              </div>
            </div>
            <div className="shadow-2xl p-2">
              <div className="flex items-center justify-between">
                <div>
                  <p>Today's Users</p>
                  <p className="font-semibold">
                    2,300
                    <span className="text-[12px] text-green-500">+3%</span>{" "}
                  </p>
                </div>
                <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500   text-white rounded-md p-3">
                  <FaCartPlus></FaCartPlus>
                </div>
              </div>
            </div>
            <div className="shadow-2xl p-2">
              <div className="flex items-center justify-between">
                <div>
                  <p>New Clients</p>
                  <p className="font-semibold">
                    +3,462
                    <span className="text-[12px] text-green-500">-2%</span>{" "}
                  </p>
                </div>
                <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500   text-white rounded-md p-3">
                  <FaCartPlus></FaCartPlus>
                </div>
              </div>
            </div>
            <div className="shadow-2xl p-2">
              <div className="flex items-center justify-between">
                <div>
                  <p>Sales</p>
                  <p className="font-semibold">
                    $103,430
                    <span className="text-[12px] text-green-500">+5%</span>{" "}
                  </p>
                </div>
                <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500   text-white rounded-md p-3">
                  <FaCartPlus></FaCartPlus>
                </div>
              </div>
            </div>
          </div>
          {/* first part end */}
          {/* 2 part start */}

          <div className="grid grid-cols-6 gap-5 mb-8">
            <div className="col-span-4 shadow-2xl p-2">
              <div className="flex items-center justify-between gap-24">
                <div>
                  <p className="mb-3">Built by developers</p>
                  <p className="mb-3 text-xl font-semibold">
                    Soft UI Dashboard
                  </p>
                  <p className="mb-16">
                    From colors, cards, typography to complex elements, you will
                    find the full documentation.
                  </p>
                  <div className="flex items-center gap-2">
                    <a href="/">Read More </a>
                    <FaArrowRight></FaArrowRight>
                  </div>
                </div>
                <div className="bg-gradient-to-r text-5xl from-indigo-500 via-purple-500 to-pink-500   text-white rounded-md py-24 px-24">
                  <FaRocket></FaRocket>
                </div>
              </div>
            </div>

            {/* <div
              className="col-span-2 brightness-50  shadow-2xl relative"
              style={{
                backgroundImage: `url(${"https://images.pexels.com/photos/7944058/pexels-photo-7944058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})`,
                backgroundPosition: "center",
                backgroundRepeat: "no-repeat",
                backgroundSize: "cover",
              }}
            >
              <div className="absolute top-0 text-white  p-5">
                <p>Work with the rockets</p>
                <p>
                  Wealth creation is an evolutionarily recent positive-sum game.
                  It is all about who take the opportunity first.
                </p>
                <div className="flex items-center gap-2">
                  <a href="/">Read More </a>
                  <FaArrowRight></FaArrowRight>
                </div>
              </div>
            </div> */}
            <div className="relative col-span-2">
              <img
                src="https://images.pexels.com/photos/7944058/pexels-photo-7944058.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                alt=""
                className=" w-full h-full brightness-50"
              />
              <div className="absolute top-0 text-white  p-5">
                <p className="mb-3 text-[20px] font-semibold">
                  Work with the rockets
                </p>
                <p className="mb-24 font-[16px]">
                  Wealth creation is an evolutionarily recent positive-sum game.
                  It is all about who take the opportunity first.
                </p>
                <div className="flex items-center gap-2">
                  <a href="/">Read More </a>
                  <FaArrowRight></FaArrowRight>
                </div>
              </div>
            </div>
          </div>

          {/* 2 part end */}
          {/* 3 part start */}

          <div className=" grid grid-cols-7 gap-5 mb-8">
            <div className="col-span-5  p-2  shadow-2xl">
              <div className="flex items-center justify-between">
                <div className="">
                  <p className="mb-2 text-xl">Projects</p>
                  <div className="flex items-center gap-2">
                    <FaArrowRight></FaArrowRight>
                    <p> 30 done this month</p>
                  </div>
                </div>
                <div>
                  <BsThreeDotsVertical></BsThreeDotsVertical>
                </div>
              </div>
              <div className="mt-8">
                <div className="overflow-x-auto w-full">
                  <table className="table w-full">
                    {/* head */}
                    <thead>
                      <tr>
                        <th>
                          <label>
                            <input type="checkbox" className="checkbox" />
                          </label>
                        </th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                      </tr>
                    </thead>
                    <tbody>
                      {/* row 1 */}
                      <tr>
                        <th>
                          <label>
                            <input type="checkbox" className="checkbox" />
                          </label>
                        </th>
                        <td>
                          <div className="flex items-center space-x-3">
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <img
                                  src="/tailwind-css-component-profile-2@56w.png"
                                  alt="Avatar Tailwind CSS Component"
                                />
                              </div>
                            </div>
                            <div>
                              <div className="font-bold">Hart Hagerty</div>
                              <div className="text-sm opacity-50">
                                United States
                              </div>
                            </div>
                          </div>
                        </td>
                        <td>
                          Zemlak, Daniel and Leannon
                          <br />
                          <span className="badge badge-ghost badge-sm">
                            Desktop Support Technician
                          </span>
                        </td>
                        <td>Purple</td>
                        <th>
                          <button className="btn btn-ghost btn-xs">
                            details
                          </button>
                        </th>
                      </tr>
                      {/* row 2 */}
                      <tr>
                        <th>
                          <label>
                            <input type="checkbox" className="checkbox" />
                          </label>
                        </th>
                        <td>
                          <div className="flex items-center space-x-3">
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <img
                                  src="/tailwind-css-component-profile-3@56w.png"
                                  alt="Avatar Tailwind CSS Component"
                                />
                              </div>
                            </div>
                            <div>
                              <div className="font-bold">Brice Swyre</div>
                              <div className="text-sm opacity-50">China</div>
                            </div>
                          </div>
                        </td>
                        <td>
                          Carroll Group
                          <br />
                          <span className="badge badge-ghost badge-sm">
                            Tax Accountant
                          </span>
                        </td>
                        <td>Red</td>
                        <th>
                          <button className="btn btn-ghost btn-xs">
                            details
                          </button>
                        </th>
                      </tr>
                      {/* row 3 */}
                      <tr>
                        <th>
                          <label>
                            <input type="checkbox" className="checkbox" />
                          </label>
                        </th>
                        <td>
                          <div className="flex items-center space-x-3">
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <img
                                  src="/tailwind-css-component-profile-4@56w.png"
                                  alt="Avatar Tailwind CSS Component"
                                />
                              </div>
                            </div>
                            <div>
                              <div className="font-bold">Marjy Ferencz</div>
                              <div className="text-sm opacity-50">Russia</div>
                            </div>
                          </div>
                        </td>
                        <td>
                          Rowe-Schoen
                          <br />
                          <span className="badge badge-ghost badge-sm">
                            Office Assistant I
                          </span>
                        </td>
                        <td>Crimson</td>
                        <th>
                          <button className="btn btn-ghost btn-xs">
                            details
                          </button>
                        </th>
                      </tr>
                      {/* row 4 */}
                      <tr>
                        <th>
                          <label>
                            <input type="checkbox" className="checkbox" />
                          </label>
                        </th>
                        <td>
                          <div className="flex items-center space-x-3">
                            <div className="avatar">
                              <div className="mask mask-squircle w-12 h-12">
                                <img
                                  src="/tailwind-css-component-profile-5@56w.png"
                                  alt="Avatar Tailwind CSS Component"
                                />
                              </div>
                            </div>
                            <div>
                              <div className="font-bold">Yancy Tear</div>
                              <div className="text-sm opacity-50">Brazil</div>
                            </div>
                          </div>
                        </td>
                        <td>
                          Wyman-Ledner
                          <br />
                          <span className="badge badge-ghost badge-sm">
                            Community Outreach Specialist
                          </span>
                        </td>
                        <td>Indigo</td>
                        <th>
                          <button className="btn btn-ghost btn-xs">
                            details
                          </button>
                        </th>
                      </tr>
                    </tbody>
                    {/* foot */}
                    <tfoot>
                      <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Job</th>
                        <th>Favorite Color</th>
                        <th></th>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>
            </div>
            <div className="col-span-2 shadow-2xl p-2">
              <div className=" mb-8">
                <p className="mb-2 text-xl">Orders overview</p>
                <div className="flex items-center gap-2">
                  <FaArrowRight></FaArrowRight>
                  <p> 24% this month</p>
                </div>
              </div>

              <div>
                <div className="mb-3">
                  <p>$2400, Design changes</p>
                  <p className="text-[12px]">22 DEC 7:20 PM</p>
                </div>
                <div className="mb-3">
                  <p>New order #1832412</p>
                  <p className="text-[12px]">21 DEC 11 PM</p>
                </div>
                <div className="mb-3">
                  <p>Server payments for April</p>
                  <p className="text-[12px]">21 DEC 9:34 PM</p>
                </div>
                <div className="mb-3">
                  <p>New card added for order #4395133</p>
                  <p className="text-[12px]">20 DEC 2:20 AM</p>
                </div>
                <div className="mb-3">
                  <p>Unlock packages for development</p>
                  <p className="text-[12px]">18 DEC 4:54 AM</p>
                </div>
                <div className="mb-3">
                  <p>New order #9583120</p>
                  <p className="text-[12px]">17 DEC</p>
                </div>
              </div>
            </div>
          </div>

          {/* 3 part end */}
        </div>
      </div>
    </div>
  );
};

export default AlumniDashboard;
