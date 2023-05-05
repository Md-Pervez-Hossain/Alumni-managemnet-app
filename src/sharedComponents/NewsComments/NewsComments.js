import React, { useContext } from "react";
import { AuthContext } from "../UseContext/AuthProvider";

const NewsComments = ({ data }) => {
  const { user } = useContext(AuthContext);

  const handleNewsComments = (event) => {
    event.preventDefault();
    const form = event.target;
    const comments = form.comments.value;
    const time = new Date().toLocaleDateString();
    const commentsInfo = {
      comments,
      name: user?.displayName,
      img: user?.photoURL,
      email: user?.email,
      time,
      commentsId: data?._id,
    };
    console.log(commentsInfo);
    fetch("http://localhost:8000/newsComments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(commentsInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.acknowledged) {
          form.reset();
        }
      })
      .catch((error) => {
        console.log(error);
      });

    console.log("submit");
  };
  return (
    <div>
      <form onSubmit={(event) => handleNewsComments(event)}>
        <textarea
          className=" border-2 p-5 w-full mt-5 "
          placeholder="Comments"
          name="comments"
          required
        ></textarea>
        <button className=" mt-3 mb-8 px-6 py-2  bg-primary text-white">
          Comment
        </button>
      </form>
      <div></div>
    </div>
  );
};

export default NewsComments;
