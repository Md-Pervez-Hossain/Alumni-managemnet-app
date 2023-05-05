import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../../sharedComponents/UseContext/AuthProvider";
import { FaEdit, FaTrash } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const AllSuccessFullStory = () => {
  const { user } = useContext(AuthContext);
  console.log(user);
  const [showSuccessStory, setShowSuccessStory] = useState([]);
  useEffect(() => {
    fetch(
      `https://alumni-managemnet-app-server.vercel.app/successFullStory/email/${user?.email}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setShowSuccessStory(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [user?.email]);

  const handleGalleryDelete = (_id) => {
    const agree = window.confirm(`Are You Sure ! You want To Delete ${_id}`);
    console.log(_id);
    if (agree) {
      fetch(
        `https://alumni-managemnet-app-server.vercel.app/successFullStory/${_id}`,
        {
          method: "DELETE",
        }
      )
        .then((res) => res.json())
        .then((data) => {
          if (data.deletedCount > 0) {
            toast.success("SuccessFully deleted");
            const remaining = showSuccessStory?.filter(
              (story) => story._id !== _id
            );
            setShowSuccessStory(remaining);
          }
          console.log(data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  };

  const handleSuccessStoryEdit = (story) => {
    console.log(story);
  };
  return (
    <div className="w-9/12 mx-auto my-16">
      <h2 className="my-5 text-2xl ">All SuccessFull Story</h2>
      {user?.email && user?.uid ? (
        <>
          {" "}
          <div className="overflow-x-auto">
            <table className="table w-full">
              <thead>
                <tr>
                  <th></th>
                  <th>Title</th>
                  <th>Post Date</th>
                  <th>Edit</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {showSuccessStory?.map((story, idx) => {
                  return (
                    <tr>
                      <td>{idx + 1}</td>
                      <td>{story?.title ? <> {story?.title}</> : <></>}</td>
                      <td>{story?.time ? <>{story?.time}</> : <></>}</td>
                      <td>
                        <Link to={`/updateStory/${story?._id}`}>
                          <div
                            onClick={() => handleSuccessStoryEdit(story._id)}
                            className="flex gap-2 items-center"
                          >
                            <FaEdit></FaEdit>
                            <button>Edit</button>
                          </div>
                        </Link>
                      </td>
                      <td>
                        <Link>
                          <div
                            onClick={() => handleGalleryDelete(story._id)}
                            className="flex gap-2 items-center"
                          >
                            <FaTrash></FaTrash>
                            <button>Delete</button>
                          </div>
                        </Link>
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        <>
          <Link to="/login">
            <button className="  my-5 text-secondary text-xl">
              {" "}
              Please Log In For Successfull Stories
            </button>
          </Link>
        </>
      )}
    </div>
  );
};

export default AllSuccessFullStory;
