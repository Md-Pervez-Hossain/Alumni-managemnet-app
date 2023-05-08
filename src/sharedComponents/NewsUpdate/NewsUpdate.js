import React, { useContext } from "react";
import { useLoaderData } from "react-router-dom";
import ErrorAlert from "../Skeletion/ErrorAlert";
import ButtonSizeSkeletion from "../Skeletion/ButtonSizeSkeletion";
import { useGetNewsCategoriesQuery } from "../../features/Api/apiSlice";
import { AuthContext } from "../UseContext/AuthProvider";
import { toast } from "react-toastify";

const NewsUpdate = () => {
  const { user } = useContext(AuthContext);
  const news = useLoaderData();

  const handleNewsUpdate = (event) => {
    event.preventDefault();
    // console.log("clicked");
    const form = event.target;
    const heading = form.heading.value;
    const author = form.author.value;
    const authorProfession = form.profession.value;
    const newsDetails = form.newsDetails.value;
    const NewsCategory = form.newsCategory.value;
    const image = form.image.files[0];
    const time = new Date().toLocaleDateString();
    const formData = new FormData();
    formData.append("image", image);
    // console.log(heading, author, authorProfession, newsDetails);

    fetch(
      "https://api.imgbb.com/1/upload?key=86fe1764d78f51c15b1a9dfe4b9175cf",
      {
        method: "POST",
        body: formData,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        const newsInfo = {
          heading,
          image: data.data.display_url,
          author: user?.displayName,
          email: user?.email,
          img: user?.photoURL,
          NewsCategory,
          authorProfession,
          newsDetails,
          time,
          likes: 0,
          comments: 0,
        };
        console.log(newsInfo);
        fetch(
          `https://alumni-managemnet-app-server.vercel.app/news/${news?._id}`,
          {
            method: "PUT",
            headers: {
              "content-type": "application/json",
            },
            body: JSON.stringify(newsInfo),
          }
        )
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            toast.success("Update Successfully.");
          });
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const {
    data: newsCategories,
    isError,
    isLoading,
    error,
  } = useGetNewsCategoriesQuery();

  let newsNameContent;

  if (isLoading && !isError) {
    newsNameContent = <ButtonSizeSkeletion />;
  }
  if (!isLoading && isError) {
    newsNameContent = <ErrorAlert text={error} />;
  }
  if (!isLoading && !isError && newsCategories?.length === 0) {
    newsNameContent = <ErrorAlert text="No Category Find" />;
  }
  if (!isLoading && !isError && newsCategories?.length > 0) {
    newsNameContent = (
      <>
        {newsCategories.map((newsCategory) => (
          <option value={newsCategory._id} key={newsCategory._id}>
            {newsCategory.categoryName}
          </option>
        ))}
      </>
    );
  }

  return (
    <div>
      <div className="w-9/12 mx-auto my-16">
        <h2 className="text-4xl my-5">News</h2>

        <form onSubmit={(event) => handleNewsUpdate(event)}>
          <div className="grid md:grid-cols-2 gap-5">
            <input
              type="text"
              defaultValue={news?.heading}
              className="input input-bordered w-full "
              name="heading"
              required
            />
            <div className="form-control w-full ">
              <input
                type="file"
                className="file-input file-input-bordered w-full "
                name="image"
                required
              />
            </div>
            <input
              type="text"
              defaultValue={news?.author}
              className="input input-bordered w-full "
              name="author"
              readOnly
              required
            />
            <input
              type="text"
              defaultValue={news?.authorProfession}
              className="input input-bordered w-full "
              name="profession"
              required
            />
          </div>
          <div className="form-control w-full mt-5">
            <select className="select select-bordered " name="newsCategory">
              {newsNameContent}
            </select>
          </div>
          <textarea
            className="textarea textarea-bordered w-full my-5"
            defaultValue={news?.newsDetails}
            name="newsDetails"
            required
          ></textarea>
          <button className="px-6 py-4 w-full rounded-lg bg-primary text-white font-semibold">
            {" "}
            Submit News
          </button>
        </form>
      </div>
    </div>
  );
};

export default NewsUpdate;
