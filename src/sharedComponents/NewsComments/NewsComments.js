import React, { useContext, useEffect } from "react";
import { AuthContext } from "../UseContext/AuthProvider";
import { useAddNewsCommentMutation } from "../../features/Api/apiSlice";
import { FaPumpMedical } from "react-icons/fa";
import { toast } from "react-hot-toast";

const NewsComments = ({ data }) => {
  const { user } = useContext(AuthContext);

  const [
    addNewsComment,
    {
      data: comments,
      isLoading: isCommentsLoading,
      isSuccess: isCommentsSuccess,
      isError: isCommentsError,
    },
  ] = useAddNewsCommentMutation();

  useEffect(() => {
    if (isCommentsSuccess) {
      toast.success("Comments added successfully");
      // form.reset(); // * aikahne reset function ta add korben
    }
  }, [isCommentsSuccess]);

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

    addNewsComment(commentsInfo);
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
        <button className=" mt-3 mb-8 px-6 py-2  bg-primary text-white">Comment</button>
      </form>
      <div></div>
    </div>
  );
};

export default NewsComments;
