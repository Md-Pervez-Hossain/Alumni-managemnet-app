import React, { useContext, useEffect, useState } from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { AuthContext } from "../UseContext/AuthProvider";
import { FaEdit, FaTrash } from "react-icons/fa";
import { toast } from "react-toastify";

const ShowComments = ({ _id }) => {
  console.log(_id);
  const { user } = useContext(AuthContext);
  const [comments, setComments] = useState([]);
  const [disable, setDisabled] = useState(true);
  const handleOnChnage = (e) => {
    const hello = e.target.value;
    console.log(hello);
    if (hello.length > 0) {
      setDisabled(false);
    }
    console.log("clicked");
  };

  useEffect(() => {
    fetch(
      `https://alumni-managemnet-app-server.vercel.app/successFullStoryComments/${_id}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setComments(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [_id]);

  const handleCommentsDelete = (_id) => {
    console.log(_id);
    const agree = window.confirm(`Are You Sure You Want to delete !...`);
    if (agree) {
      fetch(`http://localhost:8000/successFullStoryComment/${_id}`, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log(data);
          if (data.deletedCount > 0) {
            toast.success("Successfully Deleted");
            const remaining = comments?.filter(
              (comment) => comment?._id !== _id
            );
            setComments(remaining);
          }
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  return (
    <div>
      {comments?.length > 0 ? (
        <>
          {" "}
          {comments?.map((comment) => {
            return (
              <div className="mt-5">
                <div className="flex gap-5 items-center">
                  <div
                    style={{
                      backgroundImage: `url(${comment.img})`,
                      backgroundPosition: "center",
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      height: "60px",
                      width: "60px",
                    }}
                    className="rounded-full"
                  ></div>
                  <div>
                    <div className="flex gap-2 items-center">
                      <h2> {comment?.name ? <> {comment?.name}</> : <></>}</h2>
                      <p className="opacity-50">
                        {comment?.time ? <>{comment?.time}</> : <></>}
                      </p>
                    </div>
                    <p>
                      {" "}
                      {comment?.comments ? <>{comment?.comments}</> : <></>}
                    </p>
                    <div className="flex gap-5 items-center cursor-pointer">
                      <AiFillLike className="text-primary"></AiFillLike>
                      <AiFillDislike className="text-primary"></AiFillDislike>
                      <div>
                        {/* The button to open modal */}
                        {user?.email === comment?.email ? (
                          <>
                            <label htmlFor="my-modal-6">
                              {" "}
                              <FaEdit className="inline-block  mb-1"></FaEdit>{" "}
                              Edit
                            </label>
                          </>
                        ) : (
                          <></>
                        )}

                        {/* Put this part before </body> tag */}
                        <input
                          type="checkbox"
                          id="my-modal-6"
                          className="modal-toggle"
                        />
                        <div className="modal modal-bottom sm:modal-middle">
                          <div className="modal-box">
                            <form>
                              <textarea
                                className=" border-2 p-5 w-full mt-5 "
                                placeholder="Comments"
                                name="comments"
                                onChange={(e) => handleOnChnage(e)}
                                required
                              ></textarea>
                              <div className="mt-5">
                                <label className=" cursor-pointer mt-3 mb-8 px-6 py-2  bg-primary text-white">
                                  <button disabled={disable}>Submit</button>
                                </label>

                                <label
                                  htmlFor="my-modal-6"
                                  className=" cursor-pointer ml-4 mt-3 mb-8 px-6 py-2  bg-primary text-white"
                                >
                                  Close
                                </label>
                              </div>
                            </form>
                          </div>
                        </div>
                      </div>
                      {user?.email === comment?.email ? (
                        <>
                          <div
                            onClick={() => {
                              handleCommentsDelete(comment?._id);
                            }}
                            className="flex gap-1 items-center"
                          >
                            <FaTrash className="text-[14px]"></FaTrash>
                            <button>Delete</button>
                          </div>
                        </>
                      ) : (
                        <></>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </>
      ) : (
        <>
          <span>Still No Comments Here !</span>
        </>
      )}
    </div>
  );
};

export default ShowComments;
