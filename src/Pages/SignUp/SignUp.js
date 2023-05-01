import React, { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../sharedComponents/UseContext/AuthProvider";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import {
  useGetAllBatchesQuery,
  useGetAllGraduationMajorQuery,
} from "../../features/Api/apiSlice";

const SignUp = () => {
  const { createUser, updateUserProfile, signInWithGoogle } = useContext(AuthContext);

  // use navigate
  const navigate = useNavigate();

  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm();

  const { data: majorSubject } = useGetAllGraduationMajorQuery();
  const { data: graduationYear } = useGetAllBatchesQuery();
  const [photo, setPhoto] = useState(null);
  const { user } = useContext(AuthContext);

  const handleSignUp = (data) => {
    console.log(data.email, data.password);
    console.log(data);
    reset();
    createUser(data.email, data.password)
      .then((result) => {
        const user = result.user;
        updateUserProfile(`${data.firstName} ${data.lastName}`)
          .then(() => {
            //user data user profile
            const user = {
              firstName: data.firstName,
              lastName: data.lastName,
              name: `${data.firstName} ${data.lastName}`,
              profile_picture: "",
              graduation_year: data.GraduationYear,
              degree: "",
              department: "",
              major: data.department,
              email: data.email,
              phone: "",
              phone_2: "",
              address: {
                street: "",
                city: "",
                state: "",
                zip: "",
              },
              education: [
                {
                  degree: "",
                  major: "",
                  institution: "",
                  graduation_year: "",
                  gpa: "",
                },
              ],
              is_employed: false,
              careers: [
                {
                  company: "",
                  position: "",
                  start_date: "",
                  end_date: "",
                  responsibilities: "",
                },
              ],
              personal_information: {
                date_of_birth: data.dateOfBirth,
                gender: "",
                blood_group: data.bloodGroup,
                fathers_name: "",
                mothers_name: "",
                marital_status: "",
                nationality: "",
                languages: ["English", "Bengali"],
                hobbies: [],
              },
            };

            fetch("https://alumni-managemnet-app-server.vercel.app/alumni", {
              method: "POST",
              body: JSON.stringify(user),
              headers: { "Content-Type": "application/json" },
            })
              .then((response) => response.json())
              .then((data) => {
                console.log(data);
              })
              .catch((error) => {
                console.error(error);
              });
            toast.success("SuccessFully  Signup");
            navigate(`/dashboard/profile`);
          })
          .catch((error) => {
            console.log(error);
          });
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  const handleGoogleSignup = () => {
    signInWithGoogle()
      .then((result) => {
        const user = result.user;
        console.log(user);
        toast.success("SuccessFully  Signup");
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.message);
      });
  };

  return (
    <div className=" flex justify-center items-center  bg-accent rounded-lg py-20">
      <div className=" lg:w-3/4 m-2">
        <h2 className="text-4xl text-primary font-semibold text-center mb-5">Sign Up</h2>
        <form onSubmit={handleSubmit(handleSignUp)}>
          <div className="flex gap-2">
            <div className="w-3/4">
              <div className="md:grid md:grid-cols-2 gap-5">
                <div className="form-control ">
                  <label className="label">
                    {" "}
                    <span className="label-text text-lg text-primary font-bold">
                      First Name
                    </span>
                  </label>
                  <input
                    type="text"
                    {...register("firstName", {
                      required: "First Name is required",
                    })}
                    className="input input-bordered rounded-none bg-accent py-2 pl-3 text-sm  w-full"
                    placeholder="first name"
                  />
                  {errors.firstName && (
                    <p className="text-red-600">{errors.firstName?.message}</p>
                  )}
                </div>

                <div className="form-control ">
                  <label className="label">
                    {" "}
                    <span className="label-text text-lg text-primary font-bold">
                      Last Name
                    </span>
                  </label>
                  <input
                    type="text"
                    {...register("lastName", {
                      required: "Last Name is required",
                    })}
                    className="input input-bordered rounded-none bg-accent py-2 pl-3 text-sm  w-full"
                    placeholder="last name"
                  />
                  {errors.lastName && (
                    <p className="text-red-600">{errors.lastName?.message}</p>
                  )}
                </div>

                <div className="form-control ">
                  <label className="label">
                    {" "}
                    <span className="label-text text-lg text-primary font-bold">
                      Email
                    </span>
                  </label>
                  <input
                    type="email"
                    {...register("email", {
                      required: "Email Address is required",
                    })}
                    className="input input-bordered rounded-none bg-accent py-2 pl-3 text-sm  w-full"
                    placeholder="Email"
                  />
                  {errors.email && (
                    <p className="text-red-600">{errors.email?.message}</p>
                  )}
                </div>

                <div className="form-control ">
                  <label className="label">
                    {" "}
                    <span className="label-text text-lg text-primary font-bold">
                      Password
                    </span>
                  </label>
                  <input
                    type="password"
                    {...register("password", {
                      required: "Password is required",
                    })}
                    className="input  input-bordered rounded-none bg-accent py-2 pl-3 text-sm  w-full"
                    placeholder="*******"
                  />
                  {errors.password && (
                    <p className="text-red-600">{errors.password?.message}</p>
                  )}
                </div>

                <div className="form-control ">
                  <label className="label">
                    {" "}
                    <span className="label-text text-lg text-primary font-bold">
                      Blood Group
                    </span>
                  </label>
                  <select
                    type="text"
                    {...register("bloodGroup", {
                      required: "blood Group is required",
                    })}
                    className="input input-bordered rounded-none bg-accent py-2 pl-3 text-sm  w-full"
                    placeholder="Your Blood Group"
                  >
                    {" "}
                    <option selected disabled value="">
                      your blood group
                    </option>
                    <option value="A+">A+</option>
                    <option value="A-">A-</option>
                    <option value="B+">B+</option>
                    <option value="B-">B-</option>
                    <option value="O+">O+</option>
                    <option value="O-">O-</option>
                    <option value="AB+">AB+</option>
                    <option value="AB-">AB-</option>
                  </select>
                  {errors.bloodGroup && (
                    <p className="text-red-600">{errors.bloodGroup?.message}</p>
                  )}
                </div>

                <div className="form-control ">
                  <label className="label">
                    {" "}
                    <span className="label-text text-lg text-primary font-bold">
                      Date Of Birth
                    </span>
                  </label>
                  <input
                    type="date"
                    {...register("dateOfBirth", {
                      required: "Date of Birth is required",
                    })}
                    className="input  input-bordered rounded-none bg-accent py-2 pl-3 text-sm  w-full"
                    placeholder="Date Of Birth"
                  />
                  {errors.dateOfBirth && (
                    <p className="text-red-600">{errors.dateOfBirth?.message}</p>
                  )}
                </div>

                <div className="form-control ">
                  <label className="label">
                    {" "}
                    <span className="label-text text-lg text-primary font-bold">
                      Graduation Year
                    </span>
                  </label>

                  <select
                    {...register("GraduationYear", {
                      required: "Student of years required",
                    })}
                    className="input input-bordered rounded-none bg-accent py-2 pl-3 text-sm  w-full"
                  >
                    <option selected disabled value="">
                      your graduation year
                    </option>
                    {graduationYear &&
                      graduationYear.map((e) => (
                        <option key={e._id} value={e.batchNumber}>
                          {e.batchNumber}
                        </option>
                      ))}
                  </select>

                  {errors.GraduationYear && (
                    <p className="text-red-600">{errors.GraduationYear?.message}</p>
                  )}
                </div>

                <div className="form-control ">
                  <label className="label">
                    {" "}
                    <span className="label-text text-lg text-primary font-bold">
                      Department
                    </span>
                  </label>
                  <select
                    {...register("department", {
                      required: "Department is required",
                    })}
                    className="input input-bordered rounded-none bg-accent py-2 pl-3 text-sm  w-full"
                  >
                    <option selected disabled value="">
                      select your major subject
                    </option>
                    {majorSubject &&
                      majorSubject.map((e) => (
                        <option key={e._id} value={e.graduationMajor}>
                          {e.graduationMajor}{" "}
                        </option>
                      ))}
                  </select>
                  {errors.department && (
                    <p className="text-red-600">{errors.department?.message}</p>
                  )}
                </div>
              </div>
            </div>
            <div className="w-1/4">
              <div className="space-y-2 col-span-full lg:col-span-1 flex  justify-center ">
                <div>
                  <p className="font-medium">Profile Photo*</p>

                  {/*  */}

                  {photo ? (
                    <div className="avatar">
                      <div className="w-42 rounded-full">
                        <img src={URL.createObjectURL(photo)} />
                      </div>
                    </div>
                  ) : (
                    <div className="avatar">
                      <div className="w-42 rounded-full">
                        <img ssrc={user?.photoURL} />
                      </div>
                    </div>
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
            </div>
          </div>

          <div className="">
            <button className="btn btn-primary w-full bg-primary text-lg mt-5 text-white border-none rounded-none">
              Sign up
            </button>
          </div>
        </form>

        <p className="text-2xl text-center mt-5">Social Media SignUp</p>

        <div className="flex justify-center">
          <button
            onClick={handleGoogleSignup}
            className="text-primary text-lg font-bold mr-5"
          >
            Google
          </button>
          <button className="text-primary text-lg font-bold mr-5">FaceBook</button>
        </div>

        <p className="text-center mt-5 mb-10">
          Already Have An Account?{" "}
          <span>
            <Link to="/login" className="text-blue-600 font-semibold">
              LogIn
            </Link>
          </span>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
