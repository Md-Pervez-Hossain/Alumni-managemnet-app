import React, { useContext } from "react";
import { AuthContext } from "../UseContext/AuthProvider";

const Comments = () => {
  const { user } = useContext(AuthContext);
  const handleComments = (event) => {
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
    };
    fetch("http://localhost:8000/successFullStoryComments", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(commentsInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        form.reset();
      })
      .catch((error) => {
        console.log(error);
      });

    console.log("submit");
  };
  return (
    <div>
      <form onSubmit={(event) => handleComments(event)}>
        <textarea
          className="textarea textarea-bordered w-full mt-8"
          placeholder="Comments"
          name="comments"
        ></textarea>
        <button className=" mt-3 mb-8 px-6 py-2 rounded-lg bg-primary text-white">
          Comment
        </button>
      </form>
    </div>
  );
};

export default Comments;
