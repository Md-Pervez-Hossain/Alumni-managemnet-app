import React from "react";

const ProfileBlogCardsImage = () => {
  return (
    <div class="relative flex flex-col h-full min-w-0 p-4 break-words bg-white shadow-soft-xl rounded-2xl bg-clip-border">
      <div
        class="relative h-full overflow-hidden bg-cover rounded-xl"
        style="background-image: url('https://raw.githubusercontent.com/creativetimofficial/public-assets/master/soft-ui-dashboard/assets/img/ivancik.jpg')"
      >
        <span class="absolute top-0 left-0 w-full h-full bg-center bg-cover bg-gradient-to-tl from-gray-900 to-slate-800 opacity-80"></span>
        <div class="relative z-10 flex flex-col flex-auto h-full p-4">
          <h5 class="pt-2 mb-6 font-bold text-white">Work with the rockets</h5>
          <p class="text-white">
            Wealth creation is an evolutionarily recent positive-sum game. It is all about
            who take the opportunity first.
          </p>
          <a
            class="mt-auto mb-0 font-semibold leading-normal text-white group text-sm"
            href="javascript:;"
          >
            Read More
            <i class="fas fa-arrow-right ease-bounce text-sm group-hover:translate-x-1.25 ml-1 leading-normal transition-all duration-200"></i>
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProfileBlogCardsImage;
