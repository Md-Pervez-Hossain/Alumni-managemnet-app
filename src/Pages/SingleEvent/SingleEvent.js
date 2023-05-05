import React, { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import InnerPageHeader from "../../sharedComponents/InnerPageHeader/InnerPageHeader";
import CategoryWiseEvent from "../../sharedComponents/Events/Category_Wise_event/CategoryWiseEvent";
import Counter from "../../sharedComponents/Counter/Counter";
import Loading from "../../sharedComponents/Loading/Loading";
import ErrorAlert from "../../sharedComponents/Skeletion/ErrorAlert";
import { useGetSingleEventQuery } from "../../features/Api/apiSlice";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { AuthContext } from "../../sharedComponents/UseContext/AuthProvider";
import emailjs from "@emailjs/browser";
import _, { set } from "lodash";
import axios from "axios";

const SingleEvent = () => {
  const { user } = useContext(AuthContext);

  //  get location using react-router-dom
  const location = useLocation();
  // get the current path
  const currentPath = location.pathname.split("/events/")[1];
  // console.log({ currentPath });
  //load data using redux

  const { data, isLoading, isError, error } =
    useGetSingleEventQuery(currentPath);
  // console.log(data);
  const { _id, description, image_url, event_title, category, batch, date } =
    data || {};

  const [eventData, setEventData] = useState("");
  console.log(eventData);

  useEffect(() => {
    if (user?.email && _id) {
      axios
        .get(
          `https://alumni-managemnet-app-server.vercel.app/join-event?email=${user?.email}&id=${_id}`
        )
        .then((data) => setEventData(data.data))
        .catch((error) => console.error(error));
    }
  }, [user?.email, _id]);

  const handleEventEdit = (event) => {
    event.preventDefault();
    const f = event.target;
    const userInfo = {
      first_name: f.first_name.value,
      last_name: f.last_name.value,
      email: user?.email,
      phone_number: f.phone_number.value,
      date: date,
    };

    fetch(
      `https://alumni-managemnet-app-server.vercel.app/join-event/${eventData._id}`,
      {
        method: "PUT",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(userInfo),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        toast.success("Update Successfully.");
        emailjs
          .sendForm(
            "service_tlzwnzs",
            "template_fxu30p8",
            form.current,
            "hWyA-erRGdIIJOqPT"
          )
          .then(
            (result) => {
              // console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
      });
  };

  const handleDelete = () => {
    fetch(
      `https://alumni-managemnet-app-server.vercel.app/join-event/delete/${eventData._id}`,
      {
        method: "DELETE",
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.deletedCount > 0) {
          toast.success(`Delete Successfully.`);
        }
      });
  };

  const form = useRef();
  const handleEvent = (event) => {
    event.preventDefault();
    const f = event.target;
    const userInfo = {
      first_name: f.first_name.value,
      last_name: f.last_name.value,
      email: user?.email,
      phone_number: f.phone_number.value,
      date: date,
      event_id: _id,
      event_title: event_title,
    };

    console.log(userInfo);

    fetch("https://alumni-managemnet-app-server.vercel.app/join-event", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(userInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);

        toast.success("Event Join Successful.");

        emailjs
          .sendForm(
            "service_tlzwnzs",
            "template_0dr6m1b",
            form.current,
            "hWyA-erRGdIIJOqPT"
          )
          .then(
            (result) => {
              // console.log(result.text);
            },
            (error) => {
              console.log(error.text);
            }
          );
      })
      .catch((error) => {
        console.log(error);
      });
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
              {/* <button className="bg-primary p-2  w-[130px]"> */}
              {/* The button to open modal */}

              {eventData.email === user?.email && eventData.event_id === _id ? (
                <div>
                  <button className="text-center bg-primary p-2   text-white">
                    Already Joined the Event
                  </button>

                  <label
                    htmlFor="event-modal-edit"
                    className="text-center mx-4 cursor-pointer bg-primary p-2   text-white"
                  >
                    Edit the Joining From
                  </label>

                  <button
                    onClick={handleDelete}
                    className="text-center bg-primary p-2   text-white"
                  >
                    Delete the Joining From
                  </button>
                </div>
              ) : (
                <label
                  htmlFor="event-modal"
                  className="text-center bg-primary p-2  w-[130px] text-white"
                >
                  Join Event
                </label>
              )}

              {/* modal for post joining data */}
              <input
                type="checkbox"
                id="event-modal"
                className="modal-toggle"
              />

              <div className="modal">
                <div className="modal-box">
                  <label
                    htmlFor="event-modal"
                    className="btn btn-sm btn-circle absolute right-2 top-2"
                  >
                    ✕
                  </label>
                  <h3 className="font-bold text-xl">Join {event_title}</h3>

                  <form ref={form} onSubmit={(event) => handleEvent(event)}>
                    <div className="hidden">
                      <input name="event_title" defaultValue={event_title} />
                      <input name="date" defaultValue={date} />
                    </div>
                    <div className="form-control mx-auto">
                      <label className="label">
                        {" "}
                        <span className="label-text text-lg text-primary font-semibold">
                          First Name
                        </span>
                      </label>
                      <input
                        type="text"
                        name="first_name"
                        required
                        className="input input-bordered rounded-none bg-accent py-2 pl-3 text-lg  w-full"
                        placeholder="Please enter your first name."
                      />
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
                        name="last_name"
                        required
                        className="input input-bordered rounded-none bg-accent py-2 pl-3 text-lg  w-full"
                        placeholder="Please enter your last name."
                      />
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
                        name="email"
                        required
                        className="input input-bordered rounded-none bg-accent py-2 pl-3 text-lg  w-full"
                        defaultValue={user?.email}
                        readOnly
                      />
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
                        name="phone_number"
                        required
                        className="input input-bordered rounded-none bg-accent py-2 pl-3 text-lg  w-full"
                        placeholder="Please enter your Phone number"
                      />
                    </div>

                    <div className=" mx-auto">
                      <button className="btn btn-primary w-full bg-primary text-lg mt-5 text-white border-none rounded-none">
                        Join Event
                      </button>
                    </div>
                  </form>
                </div>
              </div>

              {/* modal for edit joining data */}
              <input
                type="checkbox"
                id="event-modal-edit"
                className="modal-toggle"
              />
              <div className="modal">
                <div className="modal-box">
                  <label
                    htmlFor="event-modal-edit"
                    className="btn btn-sm btn-circle absolute right-2 top-2"
                  >
                    ✕
                  </label>
                  <h3 className="font-bold text-xl">Join {event_title}</h3>

                  <form ref={form} onSubmit={(event) => handleEventEdit(event)}>
                    <div className="hidden">
                      <input name="event_title" defaultValue={event_title} />
                      <input name="date" defaultValue={date} />
                    </div>

                    <div className="form-control mx-auto">
                      <label className="label">
                        {" "}
                        <span className="label-text text-lg text-primary font-semibold">
                          First Name
                        </span>
                      </label>
                      <input
                        name="first_name"
                        required
                        type="text"
                        className="input input-bordered rounded-none bg-accent py-2 pl-3 text-lg  w-full"
                        placeholder={eventData.first_name}
                      />
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
                        name="last_name"
                        className="input input-bordered rounded-none bg-accent py-2 pl-3 text-lg  w-full"
                        placeholder={eventData.last_name}
                      />
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
                        name="email"
                        className="input input-bordered rounded-none bg-accent py-2 pl-3 text-lg  w-full"
                        defaultValue={user?.email}
                        readOnly
                      />
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
                        name="phone_number"
                        className="input input-bordered rounded-none bg-accent py-2 pl-3 text-lg  w-full"
                        placeholder={eventData.phone_number}
                      />
                    </div>

                    <div className=" mx-auto">
                      <button className="btn btn-primary w-full bg-primary text-lg mt-5 text-white border-none rounded-none">
                        Edit Joining Information
                      </button>
                    </div>
                  </form>
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
