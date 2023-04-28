import React, { useState } from "react";
import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { Navigate } from "react-router";
import { toast } from "react-toastify";
import {
  useGetAllBatchesQuery,
  useGetAllDegreeProgramsQuery,
  useGetAllGraduationMajorQuery,
  useGetAllUniversityNameQuery,
} from "../../features/Api/apiSlice";
const MembershipForm = () => {
  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm();
  const [photo, setPhoto] = useState(null);
  // const [universityName, setUniversityName] = useState([""]);
  // const [majorSubject, setMajorSubject] = useState([""]);
  // const [degreeNames, setDegreeNames] = useState([""]);

  //degree earned from

  const { data: universityName } = useGetAllUniversityNameQuery();
  const { data: majorSubject } = useGetAllGraduationMajorQuery();
  const { data: degreeNames } = useGetAllDegreeProgramsQuery();
  const { data: graduationYear } = useGetAllBatchesQuery();

  // const getAllUniversityName = async () => {
  //   await fetch(`https://alumni-managemnet-app-server.vercel.app/all-university-name`)
  //     .then((res) => res.json())
  //     .then((data) => setUniversityName(data));
  // };

  // useEffect(() => {
  //   getAllUniversityName();
  // }, []);
  // //degree earned from

  // const getAllMajorSubject = async () => {
  //   await fetch(`https://alumni-managemnet-app-server.vercel.app/all-graduation-major`)
  //     .then((res) => res.json())
  //     .then((data) => setMajorSubject(data));
  // };

  // useEffect(() => {
  //   getAllMajorSubject();
  // }, []);

  // const getAllDegreeNames = async () => {
  //   await fetch(`https://alumni-managemnet-app-server.vercel.app/all-degree-programs`)
  //     .then((res) => res.json())
  //     .then((data) => setDegreeNames(data));
  // };

  // useEffect(() => {
  //   getAllDegreeNames();
  // }, []);

  const handelMembership = (data) => {
    console.log(data);

    const alumniData = {
      name: "Sadia Rahman",
      profile_picture:
        "https://media.licdn.com/dms/image/C5603AQFtrnQuU6f5Sw/profile-displayphoto-shrink_800_800/0/1662099628632?e=2147483647&v=beta&t=z4540n_NqEDFFT4M0szi5pl5JsTxN4ukycepcNwubsI",
      graduation_year: "2015",
      degree: "Bachelor of Science",
      department: "Computer Science",
      major: "Computer Science",
      email: "sadia.rahman@example.com",
      phone: "123-456-7890",
      phone_2: "555-555-5555",
      address: {
        street: "123 Main Street",
        city: "Dhaka",
        state: "",
        zip: "1205",
      },
      education: [
        {
          degree: "SSC",
          major: "Science",
          institution: "Ideal School and College",
          graduation_year: "2009",
          gpa: 5.0,
        },
        {
          degree: "HSC",
          major: "Science",
          institution: "Viqarunnisa Noon College",
          graduation_year: "2011",
          gpa: 5.0,
        },
        {
          degree: "Bachelor of Science",
          major: "Computer Science",
          institution: "Bangladesh University of Engineering and Technology",
          graduation_year: "2015",
          gpa: 3.9,
        },
      ],
      is_employed: true,
      careers: [
        {
          company: "Grameenphone",
          position: "Software Engineer",
          start_date: "2015-07-01",
          end_date: "2018-12-31",
          responsibilities: [
            "Developed and maintained software applications",
            "Collaborated with cross-functional teams to deliver projects on time and within budget",
            "Participated in code reviews and provided feedback to team members",
          ],
        },
        {
          company: "Pathao",
          position: "Senior Software Engineer",
          start_date: "2019-01-01",
          end_date: null,
          responsibilities: [
            "Lead a team of software engineers",
            "Develop and design software architecture for large-scale applications",
            "Collaborate with product and design teams to ensure timely delivery of high-quality products",
          ],
        },
      ],
      personal_information: {
        date_of_birth: "1993-01-01",
        gender: "Female",
        blood_group: "B+",
        fathers_name: "Md. Abdul Rahman",
        mothers_name: "Shahnaz Rahman",
        marital_status: "Married",
        nationality: "Bangladeshi",
        languages: ["Bengali", "English"],
        hobbies: ["Reading books", "Travelling"],
      },
    };
    // fetch("https://alumni-managemnet-app-server.vercel.app/membership", {
    //   method: "POST",
    //   headers: {
    //     "content-type": "application/json",
    //   },
    //   body: JSON.stringify(data),
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(data);
    //     if (data.acknowledged) {
    //       toast.success("Successfully Updated");
    //       reset();
    //       Navigate("/dashboard/profile");
    //     } else {
    //       toast.error(data.message);
    //     }
    //   });
  };

  return (
    <section className="p-6  text-gray-50">
      <form
        onSubmit={handleSubmit(handelMembership)}
        novalidate=""
        action=""
        className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid"
      >
        <fieldset className="grid grid-cols-4 gap-6 p-6 py-2 px-6">
          <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
            <div className="col-span-full sm:col-span-2">
              <label for="firstname" className="text-sm text-slate-500">
                First Name
              </label>
              <input
                id="name"
                {...register("firstname", { required: true, maxLength: 20 })}
                type="text"
                placeholder="Your name"
                className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label for="lastName" className="text-sm text-slate-500">
                Last Name
              </label>
              <input
                id="name"
                {...register("lastName", { required: true, maxLength: 20 })}
                type="text"
                placeholder="Your name"
                className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label for="email" className="text-sm text-slate-500">
                Your Email
              </label>
              <input
                id="email"
                {...register("email", { required: true })}
                type="email"
                placeholder="Your Email"
                autoComplete="email"
                className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
              />
            </div>

            {/* <div className="col-span-full sm:col-span-2">
              <label for="username" className="text-sm text-slate-500">
                Username
              </label>
              <input
                id="username"
                {...register("username")}
                type="text"
                placeholder="Your Username"
                className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
              />
            </div> */}

            <div className="col-span-full sm:col-span-3">
              <label for="password" className="text-sm text-slate-500">
                Password
              </label>
              <input
                id="password"
                {...register("password", { required: true })}
                type="password"
                placeholder="Your Password"
                className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="re-enter-password" className="text-sm text-slate-500">
                Re-enter Password
              </label>
              <input
                id="re-enter-password"
                type="password"
                {...register("password", { required: true })}
                placeholder="Confirm Password"
                className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
              />
            </div>

            <div className="col-span-full sm:col-span-2">
              <label for="username" className="text-sm text-slate-500">
                Date of Birth
              </label>

              <Controller
                name="myDate"
                control={control}
                render={({ field: { onChange, value } }) => (
                  <input
                    type="date"
                    onChange={onChange}
                    value={value}
                    className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                  />
                )}
              />
            </div>

            <div className="col-span-full sm:col-span-2">
              <label for="address" className="text-sm text-slate-500">
                Your Gender
              </label>
              <select
                {...register("gender")}
                className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
            <div className="col-span-full sm:col-span-2">
              <label for="address" className="text-sm text-slate-500">
                Blood Group
              </label>
              <select
                {...register("blood-group")}
                className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
              >
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
              </select>
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="address" className="text-sm text-slate-500">
                Father name
              </label>
              <input
                id="address"
                type="text"
                {...register("father-name")}
                placeholder=""
                className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="address" className="text-sm text-slate-500">
                Mother name
              </label>
              <input
                id="address"
                type="text"
                {...register("mother-name")}
                placeholder=""
                className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
              />
            </div>

            <div className="col-span-full sm:col-span-2">
              <label for="username" className="text-sm text-slate-500">
                Your University
              </label>{" "}
              <br />
              <select
                {...register("university-name")}
                className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
              >
                <option selected disabled value="">
                  select your Mejor Subject
                </option>
                {universityName &&
                  universityName.map((e) => <option value={e.name}>{e.name} </option>)}
              </select>
            </div>
            <div className="col-span-full sm:col-span-2">
              <label for="password" className="text-sm text-slate-500">
                Year of Graduation
              </label>{" "}
              <br />
              {/* <input
                id="password"
                type="number"
                placeholder="ex-2007"
                className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
              /> */}
              <select
                {...register("graduation_year ")}
                className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
              >
                <option selected disabled value="">
                  select your passing year
                </option>
                {graduationYear &&
                  graduationYear.map((e) => (
                    <option value={e.batchNumber}>{e.batchNumber} </option>
                  ))}
              </select>
            </div>
            <div className="col-span-full sm:col-span-2 flex">
              <div className="mr-4 w-1/2">
                <label for="username" className="text-sm text-slate-500">
                  Degree
                </label>{" "}
                <br />
                <select
                  {...register("eraned-degree")}
                  className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                >
                  <option selected disabled value="">
                    select Degree
                  </option>

                  {degreeNames &&
                    degreeNames.map((e) => (
                      <option value={e.degree}>{e.program_name} </option>
                    ))}
                </select>
              </div>

              <div className=" sm:col-span-2 w-1/2">
                <label for="re-enter-password" className="text-sm text-slate-500">
                  Department/Institue
                </label>{" "}
                <br />
                <select
                  {...register("mejor")}
                  className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
                >
                  <option selected disabled value="">
                    select your Mejor Subject
                  </option>
                  {majorSubject &&
                    majorSubject.map((e) => (
                      <option value={e.graduationMajor}>{e.graduationMajor} </option>
                    ))}
                </select>
              </div>
            </div>

            <div className="col-span-full">
              <label for="address" className="text-sm text-slate-500">
                Present Position (If retd. last position)
              </label>
              <input
                {...register("present-possition")}
                id="address"
                type="text"
                placeholder=""
                className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label for="username" className="text-sm text-slate-500">
                Contact Address *
              </label>
              <input
                {...register("apartment")}
                id="username"
                type="text"
                placeholder="Apartment number"
                className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label for="password" className="text-sm text-slate-500">
                .
              </label>
              <input
                {...register("street")}
                id="password"
                type="text"
                placeholder="Street/Road no"
                className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label for="re-enter-password" className="text-sm text-slate-500">
                .
              </label>
              <input
                {...register("city")}
                id="re-enter-password"
                type="text"
                placeholder="City"
                className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label for="username" className="text-sm text-slate-500">
                .
              </label>
              <input
                id="username"
                {...register("district")}
                type="text"
                placeholder="District State"
                className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label for="password" className="text-sm text-slate-500">
                .
              </label>
              <input
                {...register("post-code")}
                id="password"
                type="text"
                placeholder="post code"
                className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-2">
              <label for="re-enter-password" className="text-sm text-slate-500">
                .
              </label>
              <input
                {...register("country")}
                id="re-enter-password"
                type="text"
                placeholder="Country"
                className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="firstname" className="text-sm text-slate-500">
                Telephone * (at least mobile number required)
              </label>
              <input
                {...register("mobile")}
                id="firstname"
                type="text"
                placeholder="Mobile"
                className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="lastname" className="text-sm text-slate-500">
                .
              </label>
              <input
                {...register("residance")}
                id="lastname"
                type="text"
                placeholder="Residance"
                className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="firstname" className="text-sm text-slate-500">
                .
              </label>
              <input
                {...register("office")}
                id="firstname"
                type="text"
                placeholder="Office"
                className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
              />
            </div>
            <div className="col-span-full sm:col-span-3">
              <label for="lastname" className="text-sm text-slate-500">
                .
              </label>
              <input
                {...register("fax")}
                id="lastname"
                type="text"
                placeholder="Fax"
                className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
              />
            </div>
            <div className="col-span-full">
              <label for="address" className="text-sm text-slate-500">
                Professional Information: Briefly state specialty/expertise area and
                experience (optional)
              </label>

              <textarea
                placeholder=""
                {...register("message")}
                className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
              ></textarea>
            </div>
            <div className="col-span-full">
              <label for="address" className="text-sm text-slate-500">
                Membership Fee
              </label>
              <p className="w-full flex justify-between py-2 px-6 focus:ring focus:ring-opacity-75 bg-white focus:ring-violet-400 border-gray-700 text-gray-900">
                <span>Life Member/Associate Life Member</span>
                <span>Tk 2,000</span>
              </p>
            </div>
            <div className="col-span-full ">
              <p className="w-full shadow-lg  py-2 px-6 focus:ring focus:ring-opacity-75 bg-white focus:ring-violet-400 border-gray-700 text-gray-900">
                <input type="checkbox" /> I hereby declare that, as a Life
                Member/Associate Life Member, I shall abide by the rules and regulations
                of BUET Alumni and support its activities that will help achieve its
                objectives.
              </p>
            </div>
          </div>
          <div className="space-y-2 col-span-full lg:col-span-1 flex  justify-center ">
            <div>
              <p className="font-medium">Photo *</p>
              {photo ? (
                <img
                  src={URL.createObjectURL(photo)}
                  alt="user"
                  className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                />
              ) : (
                <img
                  className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                  src="http://buetalumni.org/assets/images/profile/default.jpg"
                  alt=""
                />
              )}

              <input
                id="address"
                type="file"
                placeholder=""
                accept="photo/*"
                onChange={(e) => setPhoto(e.target.files[0])}
                className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900"
              />
            </div>
          </div>
          <div>
            <button
              type="submit"
              className="btn bg-primary outline-none border-none shadow-md mr-4   px-8"
            >
              Save
            </button>
            <button
              type="cancel"
              className="btn bg-secondary    outline-none border-none shadow-md  px-8"
            >
              Cancel
            </button>
          </div>
        </fieldset>
      </form>
    </section>
  );
};

export default MembershipForm;
