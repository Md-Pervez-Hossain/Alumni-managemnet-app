// import React, { useEffect, useState } from "react";
// import student from "../../assets/batchwiseStudent.jpg";

// import pervez from "../../assets/pervez.jpg";

// import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
// import { useLoaderData, useParams } from "react-router-dom";
// import AlumniBatchDataCard from "../../sharedComponents/PersonCardDesign/AlumniBatchDataCard";
// import InnerPageHeader from "../../sharedComponents/InnerPageHeader/InnerPageHeader";
// import GallerySlider from "../../sharedComponents/GallerySlider/GallerySlider";
// import AllEventsCard from "../../sharedComponents/Events/AllEvents/AllEventsCard";

// const BatchWiseStudent = () => {
//   const studentsOfTheBatch = useLoaderData();
//   const { year } = useParams();

//   const [events, setEvents] = useState([]);

//   useEffect(() => {
//     fetch(`https://alumni-managemnet-app-server.vercel.app/events/batch/${year}`)
//       .then((res) => res.json())
//       .then((data) => {
//         setEvents(data);
//       });
//   }, []);

//   return (

//     <div className="bg-accent">
//       <InnerPageHeader
//         title={`Batch ${year}`}
//         img={student}
//         description={`Connecting  Graduates: Meet the Students of Our Batch`}
//       />
//       <div className="w-9/12 mx-auto md:py-32 py-16 ">
//         <div className=" grid md:grid-cols-4 gap-10">
//           {studentsOfTheBatch.map((singleAlumni) => (
//             <AlumniBatchDataCard key={singleAlumni._id} singleAlumni={singleAlumni} />
//           ))}
//         </div>

//         <div className="flex items-center justify-end gap-3 mt-5">
//           <FaArrowLeft className="text-primary hover:text-secondary duration-500 ease-in-out cursor-pointer"></FaArrowLeft>
//           <FaArrowRight className="text-primary hover:text-secondary duration-500 ease-in-out cursor-pointer"></FaArrowRight>

//     <div>
//       <div>
//         <div className="relative">
//           <img
//             src={student}
//             alt=""
//             className=" h-64 md:h-full   w-full brightness-75 "
//           />
//           <div className=" text-white  py-3 px-2 w-full md:w-1/2  mx-auto  absolute top-1/2 left-1/2   -translate-x-1/2 -translate-y-1/2 text-center  ">
//             <div>
//               <h2 className="md:text-4xl text-2xl  font-semibold md:mb-4">
//                 Batchwise Student
//               </h2>
//             </div>
//             <hr className="md:mb-3 my-5 w-24 mx-auto border-2 border-secondary " />

//             <div>
//               <p className="my-4">
//                 There are many company Lorem ipsm dolor sitg amet, csetur
//                 adipicing elit, sed do eiusmod tempor dncint ut labore et dolore
//                 magna alis enim ad minim veniam, quis
//               </p>
//             </div>
//           </div>
//         </div>
//         <div className="w-9/12 mx-auto md:my-32 my-16">
//           <div className=" grid md:grid-cols-3 gap-10">
//             <div
//               style={{
//                 height: "600px",
//                 backgroundImage: `url(${pervez})`,
//               }}
//               className=" bg-cover bg-center relative   shadow-2xl "
//             >
//               <div className="w-full p-5 bg-white absolute bottom-0 left-0">
//                 <h2 className="md:text-2xl text-xl font-semibold md:mt-3 mb-2">
//                   Pervez Hossain
//                 </h2>
//                 <div className="my-3">
//                   <p className="">
//                     SSC Batch : <span className="font-normal ">2013</span>
//                   </p>
//                   <p className="">
//                     Group : <span className="font-normal ">Science</span>
//                   </p>
//                 </div>
//                 <button className="bg-secondary text-primary px-4 py-2  font-semibold ">
//                   Details
//                 </button>
//               </div>
//             </div>
//             <div
//               style={{
//                 height: "600px",
//                 backgroundImage: `url("https://expertphotography.b-cdn.net/wp-content/uploads/2020/08/profile-photos-4.jpg")`,
//               }}
//               className=" bg-cover bg-center relative   shadow-2xl "
//             >
//               <div className="w-full p-5 bg-white absolute bottom-0 left-0">
//                 <h2 className="md:text-2xl text-xl font-semibold md:mt-3 mb-2">
//                   Pervez Hossain
//                 </h2>
//                 <div className="my-3">
//                   <p className="">
//                     SSC Batch : <span className="font-normal ">2013</span>
//                   </p>
//                   <p className="">
//                     Group : <span className="font-normal ">Science</span>
//                   </p>
//                 </div>
//                 <button className="bg-secondary text-primary px-4 py-2  font-semibold ">
//                   Details
//                 </button>
//               </div>
//             </div>
//             <div
//               style={{
//                 height: "600px",
//                 backgroundImage: `url("https://media.istockphoto.com/id/1338134336/photo/headshot-portrait-african-30s-man-smile-look-at-camera.jpg?b=1&s=170667a&w=0&k=20&c=j-oMdWCMLx5rIx-_W33o3q3aW9CiAWEvv9XrJQ3fTMU=")`,
//               }}
//               className=" bg-cover bg-center relative   shadow-2xl "
//             >
//               <div className="w-full p-5 bg-white absolute bottom-0 left-0">
//                 <h2 className="md:text-2xl text-xl font-semibold md:mt-3 mb-2">
//                   Pervez Hossain
//                 </h2>
//                 <div className="my-3">
//                   <p className="">
//                     SSC Batch : <span className="font-normal ">2013</span>
//                   </p>
//                   <p className="">
//                     Group : <span className="font-normal ">Science</span>
//                   </p>
//                 </div>
//                 <button className="bg-secondary text-primary px-4 py-2  font-semibold ">
//                   Details
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="flex items-center justify-end gap-3 mt-5">
//             <FaArrowLeft className="text-primary hover:text-secondary duration-500 ease-in-out cursor-pointer"></FaArrowLeft>
//             <FaArrowRight className="text-primary hover:text-secondary duration-500 ease-in-out cursor-pointer"></FaArrowRight>
//           </div>

//       </div>

//       <div className="bg-white py-10">
//         <div className="w-9/12 mx-auto">
//           <h2 className="text-3xl text-center">Upcoming Events for {year} </h2>
//           <div className="grid grid-cols-1 md:grid-cols-2">
//             {events.slice(0, 4).map((item) => (
//               <AllEventsCard key={item._id} item={item} />
//             ))}
//           </div>

//         </div>
//       </div>

//       <GallerySlider year={year} />
//     </div>
//   );
// };

// export default BatchWiseStudent;
import React from "react";

const BatchwiseStudent = () => {
  return (
    <div>
      <h2>batchwise data</h2>
    </div>
  );
};

export default BatchwiseStudent;
