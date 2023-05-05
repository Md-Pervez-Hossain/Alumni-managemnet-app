import React, { useEffect, useState } from "react";
import { AiFillDislike, AiFillLike } from "react-icons/ai";

const ShowComments = ({ _id }) => {
  console.log(_id);
  const [comments, setComments] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:8000/successFullStoryComments/${_id}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setComments(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [_id]);

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
                      <h2> {comment.name}</h2>
                      <p className="opacity-50">{comment.time}</p>
                    </div>
                    <p> {comment.comments}</p>
                    <div className="flex gap-5 items-center cursor-pointer">
                      <AiFillLike className="text-primary"></AiFillLike>
                      <AiFillDislike className="text-primary"></AiFillDislike>
                      <p>Reply</p>
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
