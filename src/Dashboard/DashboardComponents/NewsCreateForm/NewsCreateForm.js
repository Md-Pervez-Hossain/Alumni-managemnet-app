import React from "react";
import { useGetEventsCategoriesQuery } from "../../../features/Api/apiSlice";
import ErrorAlert from "../../../sharedComponents/Skeletion/ErrorAlert";
import ButtonSizeSkeletion from "../../../sharedComponents/Skeletion/ButtonSizeSkeletion";

const NewsCreateForm = () => {
  const handleNews = (event) => {
    event.preventDefault();
    console.log("clicked");
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
      "https://api.imgbb.com/1/upload?expiration=600&key=86fe1764d78f51c15b1a9dfe4b9175cf",
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
          author,
          NewsCategory,
          authorProfession,
          newsDetails,
          time,
          likes: 0,
          comments: 0,
        };
        console.log(newsInfo);
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
  } = useGetEventsCategoriesQuery();

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
        {newsCategories.map((eventCategory) => (
          <option>{eventCategory.eventCategory}</option>
        ))}
      </>
    );
  }

  return (
    <div className="w-9/12 mx-auto my-16">
      <h2 className="text-4xl my-5">News</h2>

      <form onSubmit={(event) => handleNews(event)}>
        <div className="grid grid-cols-2 gap-5">
          <input
            type="text"
            placeholder="News Heading"
            className="input input-bordered w-full "
            name="heading"
            required
          />
          <div className="form-control w-full ">
            <input
              type="file"
              className="file-input file-input-bordered w-full "
              name="image"
            />
          </div>
          <input
            type="text"
            placeholder="Author Name"
            className="input input-bordered w-full "
            name="author"
            required
          />
          <input
            type="text"
            placeholder="Author Profession"
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
          placeholder="News Details"
          name="newsDetails"
          required
        ></textarea>
        <button className="px-6 py-4 w-full rounded-lg bg-primary text-white font-semibold">
          {" "}
          Submit News
        </button>
      </form>
    </div>
  );
};

export default NewsCreateForm;