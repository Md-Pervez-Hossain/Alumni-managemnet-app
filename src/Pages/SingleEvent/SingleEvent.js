import React from "react";
import { Link, useLocation } from "react-router-dom";
import InnerPageHeader from "../../sharedComponents/InnerPageHeader/InnerPageHeader";
import CategoryWiseEvent from "../../sharedComponents/Events/Category_Wise_event/CategoryWiseEvent";
import Counter from "../../sharedComponents/Counter/Counter";
import Loading from "../../sharedComponents/Loading/Loading";
import ErrorAlert from "../../sharedComponents/Skeletion/ErrorAlert";
import { useGetSingleEventQuery } from "../../features/Api/apiSlice";
import { useForm } from "react-hook-form";

const SingleEvent = () => {
  //  get location using react-router-dom
  const location = useLocation();
  // get the current path
  const currentPath = location.pathname.split("/events/")[1];
  console.log({ currentPath });
  //load data using redux

  const { data, isLoading, isError, error } = useGetSingleEventQuery(currentPath);
  console.log(data);
  const { description, image_url, event_title, category, batch, date } = data || {};

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const handleEvent = (data) => {
    console.log(data.first_name, data.last_name, data.email, data.phone_numberJ);
  };


  let content;

  if (isLoading && !isError) {
    content = <Loading />;
  }
  if (!isLoading && isError) {
    content = <ErrorAlert text={error} />;
  }
  if (!isLoading && !isError) {
    content = (
      <>
        <InnerPageHeader
          title={event_title}
          img={image_url}
          description="Learn More About the event"
        />
        <div className="w-full md:w-9/12 mx-auto my-20 md:flex justify-between">
          <div className="w-full md:w-3/5 px-10 mx-auto">
            <div className="">
              <img className="" src={image_url} alt="Event" />
            </div>
            {/* content */}
            <div className="flex flex-col justify-between p-2">
              <Counter date={date}></Counter>

              <div>
                <h1 className="text-xl font-semibold">{event_title}</h1>
                <h1 className="text-xl font-semibold">
                  {new Date(date).toLocaleDateString("en-US")}
                </h1>
                <span className="inline bg-accent px-4 py-1 my-2 text-primary font-semibold shadow-soft-lg ">
                  {batch}
                </span>
              </div>
              <p className="mt-3">{description}</p>
              {/* <button className="bg-primary p-2 rounded-tl-lg rounded-br-lg w-[130px]"> */}
              {/* The button to open modal */}
            <label
              htmlFor="my-modal"
              className="text-center bg-primary p-2 rounded-tl-lg rounded-br-lg w-[130px] text-white"
            >
              Join Event
            </label>

            {/* Put this part before </body> tag */}
            <input type="checkbox" id="my-modal" className="modal-toggle" />
            <div className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-xl">{event_title}</h3>

                <form onSubmit={handleSubmit(handleEvent)}>
                  <div className="form-control mx-auto">
                    <label className="label">
                      {" "}
                      <span className="label-text text-lg text-primary font-semibold">
                        First Name
                      </span>
                    </label>
                    <input
                      type="text"
                      {...register("first_name", {
                        required: "First_name is required",
                      })}
                      className="input input-bordered rounded-none bg-accent py-2 pl-3 text-lg  w-full"
                      placeholder="Please enter your first name."
                    />
                    {errors.first_name && (
                      <p className="text-red-600">{errors.first_name?.message}</p>
                    )}
                  </div>
                  <div className="form-control mx-auto">
                    <label className="label">
                      {" "}
                      <span className="label-text text-lg text-primary font-semibold">
                        Last Name
                      </span>
                    </label>
                    <input
                      type="text"
                      {...register("last_name", {
                        required: "last_name is required",
                      })}
                      className="input input-bordered rounded-none bg-accent py-2 pl-3 text-lg  w-full"
                      placeholder="Please enter your last name."
                    />
                    {errors.last_name && (
                      <p className="text-red-600">{errors.last_name?.message}</p>
                    )}
                  </div>


                  <div className="form-control mx-auto">
                    <label className="label">
                      {" "}
                      <span className="label-text text-lg text-primary font-semibold">
                        Email
                      </span>
                    </label>
                    <input
                      type="email"
                      {...register("email", {
                        required: "Email Address is required",
                      })}
                      className="input input-bordered rounded-none bg-accent py-2 pl-3 text-lg  w-full"
                      placeholder="Please enter your email."
                    />
                    {errors.email && (
                      <p className="text-red-600">{errors.email?.message}</p>
                    )}
                  </div>

                  <div className="form-control mx-auto">
                    <label className="label">
                      {" "}
                      <span className="label-text text-lg text-primary font-semibold">
                        Phone Number
                      </span>
                    </label>
                    <input
                      type="text"
                      {...register("phone_number", {
                        required: "Phone number is required",
                      })}
                      className="input input-bordered rounded-none bg-accent py-2 pl-3 text-lg  w-full"
                      placeholder="Please enter your Phone number"
                    />
                    {errors.phone_number && (
                      <p className="text-red-600">{errors.phone_number?.message}</p>
                    )}
                  </div>


                 

                  <div className=" mx-auto">
                    <button className="btn rounded-tl-lg rounded-br-lg btn-primary w-full bg-primary text-lg mt-5 text-white border-none rounded-none">
                      Join Event
                    </button>
                  </div>
                </form>

                <div className="modal-action">
                  <label htmlFor="my-modal" className="btn bg-primary">
                  Cancel
                  </label>
                </div>
              </div>
            </div>
              {/* </button> */}
            </div>
          </div>
          <div className="w-full md:w-2/5 px-10 mt-10 md:mt-0">
            <h1 className="text-2xl font-semibold">
              <span className="text-primary">Explore</span> More Events
            </h1>
            <CategoryWiseEvent category={category} />
          </div>
        </div>
      </>
    );
  }

  return <>{content}</>;
};

export default SingleEvent;
