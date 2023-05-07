import React from "react";
import { useSelector } from "react-redux";

const RegisterUserCard = () => {
  const { firstName, lastName, profilePhoto, email, phone, blood, major, gradYear } =
    useSelector((state) => state.userCreate);

  // new method

  return (
    <div>
      <div class="max-w-2xl mx-4 sm:max-w-sm md:max-w-sm lg:max-w-sm xl:max-w-sm sm:mx-auto md:mx-auto lg:mx-auto xl:mx-auto mt-16 bg-white shadow-xl rounded-lg text-gray-900">
        <div class="rounded-t-lg h-32 overflow-hidden">
          <img
            class="object-cover object-top w-full"
            src="https://images.unsplash.com/photo-1549880338-65ddcdfd017b?ixlib=rb-1.2.1&q=80&fm=jpg&crop=entropy&cs=tinysrgb&w=400&fit=max&ixid=eyJhcHBfaWQiOjE0NTg5fQ"
            alt="Mountain"
          />
        </div>
        <div class="mx-auto w-32 h-32 relative -mt-16 border-4 border-white rounded-full overflow-hidden">
          {profilePhoto !== null ? (
            <img
              class="object-cover object-center h-32"
              src={URL.createObjectURL(profilePhoto)}
              alt="user looking front"
            />
          ) : (
            <img
              class="object-cover object-center h-32"
              src="https://sbcf.fr/wp-content/uploads/2018/03/sbcf-default-avatar.png"
              alt="user looking front"
            />
          )}
        </div>
        <div class="text-center mt-2">
          <h2 class="font-semibold">
            {firstName} {lastName}
          </h2>
          <p class="text-gray-500 text-xs">{email}</p>
          <p class="text-gray-500 text-xs">{phone}</p>
        </div>
        <ul class="w-full py-4 mt-2 text-gray-700 flex items-center justify-around">
          <li class="w-1/3 flex flex-col items-center justify-around">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 fill-current text-primary"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
              />
            </svg>

            <div>{blood}</div>
          </li>
          <li class="w-1/3 flex flex-col items-center justify-between">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 fill-current text-primary"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.399 5.84c-.896.248-1.783.52-2.658.814m-15.482 0A50.697 50.697 0 0112 13.489a50.702 50.702 0 017.74-3.342M6.75 15a.75.75 0 100-1.5.75.75 0 000 1.5zm0 0v-3.675A55.378 55.378 0 0112 8.443m-7.007 11.55A5.981 5.981 0 006.75 15.75v-1.5"
              />
            </svg>

            <div>{gradYear}</div>
          </li>
          <li class="w-1/3 flex flex-col items-center justify-around">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              class="w-4 fill-current text-primary"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6.042A8.967 8.967 0 006 3.75c-1.052 0-2.062.18-3 .512v14.25A8.987 8.987 0 016 18c2.305 0 4.408.867 6 2.292m0-14.25a8.966 8.966 0 016-2.292c1.052 0 2.062.18 3 .512v14.25A8.987 8.987 0 0018 18a8.967 8.967 0 00-6 2.292m0-14.25v14.25"
              />
            </svg>
            <p className="text-xs leading-none text-gray-500 text-center">{major}</p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default RegisterUserCard;
