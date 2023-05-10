import React, { useContext, useEffect, useState } from "react";
import { FaRegComment } from "react-icons/fa";
import { MdFavoriteBorder } from "react-icons/md";
import MoreNews from "./MoreNews";
import { Link, useLocation } from "react-router-dom";
import Comments from "../Comments/Comments";
import InnerPageHeader from "../InnerPageHeader/InnerPageHeader";
import { useGetSingleNewsQuery } from "../../features/Api/apiSlice";
import Loading from "../Loading/Loading";
import ErrorAlert from "../Skeletion/ErrorAlert";
import ShowComments from "../Comments/ShowComments";
import { AuthContext } from "../UseContext/AuthProvider";
import NewsComments from "../NewsComments/NewsComments";
import ShowNewsComments from "../NewsComments/ShowNewsComments";

const SingleNewsSection = () => {
  const { user } = useContext(AuthContext);
  const [newsComments, setNewsComments] = useState([]);
  console.log(user?.email);
  //  get location using react-router-dom
  const location = useLocation();
  // get the current path
  const currentPath = location.pathname.split("/news/")[1];
  console.log({ currentPath });
  //load data using redux

  const { data, isLoading, isError, error } =
    useGetSingleNewsQuery(currentPath);
  console.log(data);

  const {
    NewsCategory,
    author,
    authorProfession,
    comments,
    email,
    heading,
    image,
    img,
    likes,
    newsDetails,
    time,
    _id,
  } = data || {};

  useEffect(() => {
    fetch(
      `https://alumni-managemnet-app-server.vercel.app/newsComment/${data?._id}`
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setNewsComments(data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, [data?._id]);

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
        {" "}
        <div>
          <InnerPageHeader
            img={`${image}`}
            title={`${heading}`}
          ></InnerPageHeader>
          <div className="w-9/12 mx-auto my-16">
            <div>
              <div className="grid lg:grid-cols-3 gap-10">
                <div className="lg:col-span-2">
                  <div>
                    {image ? (
                      <>
                        {" "}
                        <div
                          style={{
                            backgroundImage: `url(${image})`,
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            height: "400px",
                          }}
                        ></div>
                      </>
                    ) : (
                      <>
                        {" "}
                        <div
                          style={{
                            backgroundImage: `url('https://ionicframework.com/docs/img/demos/avatar.svg')`,
                            backgroundPosition: "center",
                            backgroundRepeat: "no-repeat",
                            backgroundSize: "cover",
                            height: "400px",
                          }}
                        ></div>
                      </>
                    )}

                    <h2 className="text-2xl my-5">
                      {heading ? (
                        <>{heading}</>
                      ) : (
                        <>
                          <h2>Title Missing</h2>
                        </>
                      )}
                    </h2>
                    <p className="mb-5">
                      {newsDetails ? (
                        <> {newsDetails}</>
                      ) : (
                        <>
                          <p>Details Missing</p>
                        </>
                      )}
                    </p>
                  </div>
                  <div className="flex items-center justify-between ">
                    <div className="flex items-center gap-3">
                      {img ? (
                        <>
                          {" "}
                          <div
                            className="rounded-full"
                            style={{
                              backgroundImage: `url(${img})`,
                              backgroundPosition: "center",
                              backgroundRepeat: "no-repeat",
                              backgroundSize: "cover",
                              height: "50px",
                              width: "50px",
                            }}
                          ></div>
                        </>
                      ) : (
                        <>
                          {" "}
                          <div
                            className="rounded-full"
                            style={{
                              backgroundImage: `url('https://ionicframework.com/docs/img/demos/avatar.svg')`,
                              backgroundPosition: "center",
                              backgroundRepeat: "no-repeat",
                              backgroundSize: "cover",
                              height: "50px",
                              width: "50px",
                            }}
                          ></div>
                        </>
                      )}

                      <div>
                        <p>{author}</p>
                        <p>{time}</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-5">
                      <div className="flex items-center gap-2">
                        <FaRegComment className="inline-block cursor-pointer" />
                        <span>
                          {newsComments?.length ? (
                            <>{newsComments?.length}</>
                          ) : (
                            <></>
                          )}
                        </span>
                      </div>
                    </div>
                  </div>
                  {user?.email && user?.uid ? (
                    <>
                      <div>
                        <NewsComments data={data}></NewsComments>
                      </div>
                    </>
                  ) : (
                    <>
                      <Link to="/login">
                        <button className="  my-5 text-secondary text-xl">
                          {" "}
                          Please Log In For Comments
                        </button>
                      </Link>
                    </>
                  )}
                </div>
                <div className="lg:col-span-1 w-full">
                  <ShowNewsComments data={data}></ShowNewsComments>
                </div>
              </div>
            </div>
            {}
            <div>
              <MoreNews _id={_id}></MoreNews>
            </div>
          </div>
        </div>
      </>
    );
  }
  console.log(data);
  return <>{content}</>;
};

export default SingleNewsSection;
