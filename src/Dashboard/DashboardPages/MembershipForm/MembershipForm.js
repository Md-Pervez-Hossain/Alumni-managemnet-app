import React, { useContext, useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { toast } from "react-toastify";
import {
  useGetAllBatchesQuery,
  useGetAllDegreeProgramsQuery,
  useGetAllGraduationMajorQuery,
  useGetAllUniversityNameQuery,
  useGetSingleAlumniQuery,
} from "../../../features/Api/apiSlice";
import { AuthContext } from "../../../sharedComponents/UseContext/AuthProvider";
const MembershipForm = () => {
  // const [photo, setPhoto] = useState(null);
  const [userEmail, setUserEmail] = useState(null);

  const { user } = useContext(AuthContext);
  console.log(user?.email);

  const getUserEmail = async () => {
    const userEmail = await user?.email;
    return await userEmail;
  };

  // getUserEmail(user)
  //   .then((userEmail) => {
  //     setUserEmail(userEmail);
  //   })
  //   .catch((err) => console.error(err));

  const { data: singleAlumni } = useGetSingleAlumniQuery(user.email);
  const { data: universityName } = useGetAllUniversityNameQuery();
  const { data: majorSubject } = useGetAllGraduationMajorQuery();
  const { data: degreeNames } = useGetAllDegreeProgramsQuery();
  const { data: graduationYear } = useGetAllBatchesQuery();

  console.log(singleAlumni);

  const {
    firstName,
    lastName,
    profile_picture,
    name,
    email,
    phone,
    education,
    graduation_year,
    degree,
    department,
    major,
    address,
    personal_information,
  } = singleAlumni || {};

  const {
    register,
    handleSubmit,
    control,
    watch,
    reset,
    formState: { errors },
  } = useForm();

  const handelImageUpdate = (data) => {
    // ///////////////////////
  };

  const handelMembership = (data) => {
    // const formData = new FormData();
    // formData.append("image", photo);

    // fetch("https://api.imgbb.com/1/upload?key=dd1a5cd35aa9d832298beb50053079da", {
    //   method: "POST",
    //   body: formData,
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     setPhoto(data.data.display_url);
    //   })
    //   .catch((error) => {
    //     console.log(error);
    //     toast.error(`${error.message}`, {
    //       position: toast.POSITION.TOP_LEFT,
    //     });
    //   });

    const userData = {
      firstName: data.firstName,
      lastName: data.lastName,
      name: `${data.firstName} ${data.lastName}`,
      graduation_year: data.graduation_year,
      degree: data.degreeEarned,
      major: data.majorSubject,
      email: data.email,
      phone: data.mobile,
      universityName: data.yourUniversityName,
      address: {
        street: data.streetAddress,
        city: data.city,
        state: data.stateName,
        zip: data.zipCode,
      },
      education: {
        degree: data.degreeEarned,
        major: data.majorSubject,
        institution: data.yourUniversityName,
        graduation_year: data.graduation_year,
        gpa: "",
      },

      is_employed: false,

      personal_information: {
        date_of_birth: data.dateOfBirth,
        gender: data.gender,
        blood_group: data.bloodGroup,
        fathers_name: data.fatherName,
        mothers_name: data.motherName,
        marital_status: "",
        nationality: "Bangladeshi",
        languages: ["English", "Bengali"],
        hobbies: [],
      },
    };
    console.log(userData);

    fetch(`http://localhost:8000/alumni/${data.email}`, {
      method: "PUT",
      body: JSON.stringify(userData),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("Success Notification!", {
          position: toast.POSITION.TOP_CENTER,
        });
        console.log("Data updated successfully:", data);
        // reset();
      })
      .catch((error) => {
        console.error("Error updating data:", error);
      });
  };

  return (
    <section className="p-6">
      <form onSubmit={handleSubmit(handelMembership)}>
        <div className="flex gap-10  flex-col-reverse	md:flex-row">
          <div className="w-full md:w-3/4">
            {/* first Name and Last Name */}
            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 w-full mb-6 group">
                <input
                  {...register("firstName", { required: true, maxLength: 20 })}
                  type="text"
                  name="firstName"
                  id="floating_first_name"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                  defaultValue={firstName}
                  required
                />
                <label
                  for="floating_first_name"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  First name
                </label>
                {errors.firstName && (
                  <span className="text-red-600">Please Write your name</span>
                )}
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <input
                  {...register("lastName", { required: true, maxLength: 20 })}
                  type="text"
                  name="lastName"
                  id="floating_last_name"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                  defaultValue={lastName}
                  required
                />
                <label
                  for="floating_last_name"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Last name
                </label>
                {errors.lastName && (
                  <span className="text-red-600">Write your last name</span>
                )}
              </div>
            </div>

            {/* Email and Phone */}
            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 w-full mb-6 group">
                <input
                  {...register("email", {
                    required: true,
                    pattern: /^\S+@\S+$/i, // regular expression for email validation
                  })}
                  defaultValue={user?.email || email}
                  readOnly
                  type="text"
                  name="email"
                  id="email"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                  required
                />
                <label
                  for="email"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Your Email
                </label>
                {errors.email && (
                  <span className="text-red-600">Enter your valid email</span>
                )}
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <input
                  {...register("mobile", { required: true })}
                  type="number"
                  name="mobile"
                  id="floating_phone"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                  defaultValue={phone}
                  required
                />
                <label
                  for="floating_phone"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Your Phone
                </label>
                {errors.mobile && (
                  <span className="text-red-600">please write your Number</span>
                )}
              </div>
            </div>

            {/* Education Information */}

            {/* University and Major */}
            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 w-full mb-6 group">
                <label
                  for="university"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select your university
                </label>
                <select
                  {...register("yourUniversityName", { required: true })}
                  id="university"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                >
                  <option
                    value={education?.institution ? education?.institution : ""}
                    disabled
                    selected
                  >
                    {education?.institution
                      ? education?.institution
                      : " Select your university"}
                  </option>
                  {universityName &&
                    universityName.map((e) => <option value={e.name}>{e.name} </option>)}
                </select>
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <label
                  for="majorSubject"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select your Major
                </label>
                <select
                  {...register("majorSubject", { required: true })}
                  id="majorSubject"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                >
                  <option value={major ? major : ""} disabled selected>
                    {major ? major : " Select your major"}
                  </option>
                  {majorSubject &&
                    majorSubject.map((e) => (
                      <option value={e.graduationMajor}>{e.graduationMajor} </option>
                    ))}
                </select>
                {errors.majorSubject && (
                  <span className="text-red-600">please select your Degree</span>
                )}
              </div>
            </div>

            {/* degree and Batch number */}
            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 w-full mb-6 group">
                <label
                  for="degree"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  select your degree
                </label>
                <select
                  {...register("degreeEarned", { required: true })}
                  id="degree"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                >
                  <option
                    value={education?.degree ? education?.degree : ""}
                    disabled
                    selected
                  >
                    {education?.degree ? education?.degree : " Select your degree"}
                  </option>

                  {degreeNames &&
                    degreeNames.map((e) => (
                      <option value={e.degree}>{e.program_name} </option>
                    ))}
                </select>
                {errors.degreeEarned && (
                  <span className="text-red-600">please select your Degree</span>
                )}
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <label
                  for="graduationYear"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Year of Graduation{" "}
                </label>
                <select
                  {...register("graduation_year", { required: true })}
                  id="graduationYear"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                >
                  <option
                    value={graduation_year ? graduation_year : ""}
                    disabled
                    selected
                  >
                    {graduation_year ? graduation_year : "Select your Graduation Year"}
                  </option>

                  {graduationYear &&
                    graduationYear.map((e) => (
                      <option value={e.batchNumber}>{e.batchNumber} </option>
                    ))}
                </select>
                {errors.graduation_year && (
                  <span className="text-red-600">please select your Gratuation Year</span>
                )}
              </div>
            </div>

            {/* Personal data Optional */}
            {/* Father and Mother */}
            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 w-full mb-6 group">
                <input
                  {...register("fatherName")}
                  defaultValue={personal_information?.fathers_name}
                  type="text"
                  name="fatherName"
                  id="floating_father_name"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                />
                <label
                  for="floating_father_name"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Your father name
                </label>
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <input
                  {...register("motherName")}
                  defaultValue={personal_information?.mothers_name}
                  type="text"
                  name="motherName"
                  id="floating_mother_name"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                />
                <label
                  for="floating_mother_name"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Your Mother name
                </label>
              </div>
            </div>

            {/* Blood Group and Gender */}
            <div class="grid md:grid-cols-3 md:gap-6">
              <div class="relative z-0 w-full mb-6 group">
                <label
                  for="bloodGroup"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  select Blood Group
                </label>
                <select
                  {...register("bloodGroup", { required: true })}
                  id="bloodGroup"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                >
                  <option selected disabled value={personal_information?.blood_group}>
                    {personal_information?.blood_group
                      ? personal_information?.blood_group
                      : "Blood Group"}
                  </option>
                  <option value="A+">A+</option>
                  <option value="A-">A-</option>
                  <option value="B+">B+</option>
                  <option value="B-">B-</option>
                  <option value="AB+">AB+</option>
                  <option value="AB-">AB-</option>
                  <option value="O+">O+</option>
                  <option value="O-">O-</option>
                </select>
                {errors.bloodGroup && (
                  <span className="text-red-600">select Blood Group</span>
                )}
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <label
                  for="bloodGroup"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select your gender
                </label>
                <select
                  {...register("gender", { required: true })}
                  id="bloodGroup"
                  class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                >
                  <option selected disabled value="">
                    Gender
                  </option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                </select>
                {errors.gender && <span className="text-red-600">select gender</span>}
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <label
                  for="birthDate"
                  class="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Select your Date of Birth
                </label>

                <div class="relative max-w-sm">
                  <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      class="w-5 h-5 text-gray-500 dark:text-gray-400"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z"
                        clip-rule="evenodd"
                      ></path>
                    </svg>
                  </div>

                  <Controller
                    name="dateOfBirth"
                    control={control}
                    render={({ field: { onChange, value } }) => (
                      <input
                        type="date"
                        onChange={onChange}
                        value={value}
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary focus:border-primary block w-full pl-10 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary dark:focus:border-primary"
                      />
                    )}
                  />
                </div>
              </div>
            </div>

            {/* Contact Details street and city */}
            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 w-full mb-6 group">
                <input
                  {...register("streetAddress")}
                  defaultValue={address?.street}
                  type="text"
                  name="streetAddress"
                  id="floating_street"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                />
                <label
                  for="floating_street"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Street
                </label>
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <input
                  {...register("city")}
                  defaultValue={address?.city}
                  type="text"
                  name="city"
                  id="floating_city"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                />
                <label
                  for="floating_city"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  City Name
                </label>
              </div>
            </div>
            {/* Contact Details state and zip */}
            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 w-full mb-6 group">
                <input
                  {...register("stateName")}
                  defaultValue={address?.state}
                  type="text"
                  name="stateName"
                  id="floating_state"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                />
                <label
                  for="floating_state"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  State
                </label>
              </div>
              <div class="relative z-0 w-full mb-6 group">
                <input
                  {...register("zipCode")}
                  defaultValue={address?.zip}
                  type="number"
                  name="zipCode"
                  id="floating_zip"
                  class="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                  placeholder=" "
                />
                <label
                  for="floating_zip"
                  class="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-focus:dark:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  zip
                </label>
              </div>
            </div>

            {/* submit button */}
            <button
              type="submit"
              class="text-white bg-primary hover:bg-primary focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-primary dark:hover:bg-primary dark:focus:ring-primary"
            >
              Submit
            </button>
          </div>
          <div className="w-full md:w-1/4">
            <div className="space-y-2 col-span-full lg:col-span-1 flex  justify-center ">
              <div>
                <p className="font-medium">Photo *</p>
                {profile_picture ? (
                  <img
                    src={profile_picture}
                    alt="user"
                    className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                  />
                ) : (
                  <img
                    className="object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56"
                    src={user?.photoURL}
                    alt=""
                  />
                )}

                {/* <input
                  id="address"
                  type="file"
                  name="image"
                  placeholder=""
                  accept="photo/*"
                  onChange={(e) => setPhoto(e.target.files[0])}
                  className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-primary focus:outline-none focus:ring-0 focus:border-primary peer"
                /> */}
              </div>
            </div>
          </div>
        </div>
      </form>

      <h1 className="text-xl">OLD</h1>
    </section>
  );
};

export default MembershipForm;
