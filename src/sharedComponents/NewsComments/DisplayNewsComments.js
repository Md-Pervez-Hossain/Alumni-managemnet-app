import React, { useContext } from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { FaEdit, FaTrash } from "react-icons/fa";
import { AuthContext } from "../UseContext/AuthProvider";

const DisplayNewsComments = ({ comment, handleCommentsDelete }) => {
  const { user } = useContext(AuthContext);

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
            <h2> {comment.name ? <>{comment?.name}</> : <></>}</h2>
            <p className="opacity-50">
              {comment?.time ? <>{comment?.time}</> : <></>}
            </p>
          </div>
          <p> {comment.comments}</p>
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
                    <span>Edit</span>
                  </label>
                </>
              ) : (
                <></>
              )}

              {/* Put this part before </body> tag */}
              <input type="checkbox" id="my-modal-6" className="modal-toggle" />
              <div className="modal modal-bottom sm:modal-middle">
                <div className="modal-box">
                  <form>
                    <textarea
                      className=" border-2 p-5 w-full mt-5 "
                      placeholder="Comments"
                      name="comments"
                      required
                    ></textarea>
                    <div className="mt-5">
                      <label className=" cursor-pointer mt-3 mb-8 px-6 py-2  bg-primary text-white">
                        <button>Submit</button>
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
};

export default DisplayNewsComments;
