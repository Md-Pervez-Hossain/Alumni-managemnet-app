import React, { useState } from 'react';
import { useEffect } from 'react';
import { useForm, Controller } from "react-hook-form";
const MembershipForm = () => {
    const { register, handleSubmit, control, watch, formState: { errors } } = useForm();
    const [photo, setPhoto] = useState(null);
    const [eranedDegree, setEranedDegree] = useState(['']);
    const [mejorSubject, setMejorSubject] = useState(['']);

    const handelMembership = data => {

       
   

        fetch('https://alumni-managemnet-app-server.vercel.app/membership', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                // // if (data.acknowledged) {

                // //     toast.success('Booking confirmed');
                // //     form.reset('');
                // //     navigate('/order')

                  
                 
                // // }
                // else {
                //     toast.error(data.message);
                // }
            })




    };
  


    //degree eraned from

    const getAllDegree = async () => {
        await fetch(`https://alumni-managemnet-app-server.vercel.app/all-university-name`)
            .then(res => res.json())
            .then(data => setEranedDegree(data))
    }
    
    useEffect(() => {
        getAllDegree()
    }, [])
    //degree eraned from

    const getAllMejorSubject = async () => {
        await fetch(`https://alumni-managemnet-app-server.vercel.app/all-graduation-major`)
            .then(res => res.json())
            .then(data => setMejorSubject(data))
    }
    
    useEffect(() => {
        getAllMejorSubject()
    }, [])



    





    return (
        <section className="p-6 bg-gray-300 text-gray-50">
            <form onSubmit={handleSubmit(handelMembership)} novalidate="" action="" className="container flex flex-col mx-auto space-y-12 ng-untouched ng-pristine ng-valid">
                <fieldset className="grid grid-cols-4 gap-6 p-6 py-2 px-6 border-2 border-white bg-gray-300">

                    <div className="grid grid-cols-6 gap-4 col-span-full lg:col-span-3">
                        <div className="col-span-full sm:col-span-3">
                            <label for="firstname" className="text-sm text-black">First name</label>
                            <input id="firstname" {...register("firstName", { required: true, maxLength: 20 })} type="text" placeholder="First name" className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label for="lastname" {...register("lastName", { pattern: /^[A-Za-z]+$/i })} className="text-sm text-black">Last name</label>
                            <input id="lastname" type="text" placeholder="Last name" className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                        </div>

                        <div className="col-span-full sm:col-span-2">
                            <label for="username" className="text-sm text-black">User Name</label>
                            <input id="username" {...register("username", { pattern: /^[A-Za-z]+$/i })} type="text" placeholder="username" className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label for="password" className="text-sm text-black">Password</label>
                            <input id="password" {...register("password", { required: true })} type="password" placeholder="***************" className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label for="re-enter-password" className="text-sm text-black">Re Enter Password</label>
                            <input id="re-enter-password" type="password" {...register("password", { required: true })} placeholder="**********" className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full ">
                            <label for="email" className="text-sm text-black">Email</label>
                            <input id="email" {...register("email", { required: true })} type="email" placeholder="Email" className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label for="username" className="text-sm text-black">Date of Birth (mm/dd/yyyy)</label>
                            <Controller
                                name="myDate"
                                control={control}
                                render={({ field: { onChange, value } }) => (
                                    <input type="date" onChange={onChange} value={value} className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                                )}
                            />
                        </div>
                        <div className="col-span-full sm:col-span-2 text-center">
                            <label for="password" className="text-sm text-black">Gender </label>
                            <div className='flex justify-center items-center'>
                                <label for="password" className="text-sm text-black mr-2">Male </label>

                                <input id="username" type="radio"  {...register('gender')} value="male" placeholder="username" className=" mr-2 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                                <label for="password" className="text-sm text-black mr-2">Female </label>

                                <input id="username" type="radio" placeholder="username"  {...register('gender')} value="female" className=" focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                            </div>


                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label for="address" className="text-sm text-black">Blood Group</label>
                            <select  {...register('blood-group')} className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900">
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
                        <div className="col-span-full">
                            <label for="address" className="text-sm text-black">Father name</label>
                            <input id="address" type="text" {...register('father-name')} placeholder="" className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full">
                            <label for="address" className="text-sm text-black">Mother name</label>
                            <input id="address" type="text" {...register('mother-name')} placeholder="" className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                        </div>


                        <div className="col-span-full sm:col-span-2">
                            <label for="username" className="text-sm text-black">Degree Earned</label> <br />

                            <select {...register('eraned-degree')} className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900">
                            <option selected disabled  value="">select your Mejor Subject</option>
                                {
                                    eranedDegree &&  eranedDegree.map( e => <option value={e.name}>{e.name} </option>)
                                }
                            </select>


                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label for="password" className="text-sm text-black">Year of Graduation</label> <br />
                            <input id="password" type="number" placeholder="ex-2007" className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-2 flex">
                            <div className='mr-4 w-1/2'>
                                <label for="username" className="text-sm text-black">Degree</label> <br />

                                <select  {...register('eraned-degree')} className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900">
                                <option selected disabled  value="">select Degree</option>
                                    <option value="Bsc">Bsc</option>
                                    <option value="Phd">Phd</option>
                                    <option value="Msc">Msc</option>

                                </select>
                            </div>

                            <div className=" sm:col-span-2 w-1/2">
                                <label for="re-enter-password" className="text-sm text-black">Department/Institue</label> <br />
                                <select {...register('mejor')} className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900">
                                    <option selected disabled  value="">select your Mejor Subject</option>
                                {
                                    mejorSubject &&  mejorSubject.map( e => <option  value={e.graduationMajor}>{e.graduationMajor} </option>)
                                }

                                </select>
                            </div>


                        </div>

                        <div className="col-span-full">
                            <label for="address" className="text-sm text-black">Present Position (If retd. last position)</label>
                            <input {...register('present-possition')}  id="address" type="text" placeholder="" className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label for="username" className="text-sm text-black">Contact Address *</label>
                            <input {...register('apartment')} id="username" type="text" placeholder="Apartment number" className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />

                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label for="password" className="text-sm text-black">.</label>
                            <input {...register('street')}  id="password" type="text" placeholder="Street/Road no" className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label for="re-enter-password" className="text-sm text-black">.</label>
                            <input {...register('city')} id="re-enter-password" type="text" placeholder="City" className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label for="username" className="text-sm text-black">.</label>
                            <input id="username"{...register('district')} type="text" placeholder="District State" className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label for="password" className="text-sm text-black">.</label>
                            <input {...register('post-code')} id="password" type="text" placeholder="post code" className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-2">
                            <label for="re-enter-password" className="text-sm text-black">.</label>
                            <input {...register('country')} id="re-enter-password" type="text" placeholder="Country" className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label for="firstname" className="text-sm text-black">Telephone * (at least mobile number required)</label>
                            <input {...register('mobile')} id="firstname" type="text" placeholder="Mobile" className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label for="lastname" className="text-sm text-black">.</label>
                            <input {...register('residance')} id="lastname" type="text" placeholder="Residance" className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label for="firstname" className="text-sm text-black">.</label>
                            <input {...register('office')}  id="firstname" type="text" placeholder="Office" className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full sm:col-span-3">
                            <label for="lastname" className="text-sm text-black">.</label>
                            <input {...register('fax')} id="lastname" type="text" placeholder="Fax" className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                        </div>
                        <div className="col-span-full">
                            <label for="address" className="text-sm text-black">Professional Information: Briefly state specialty/expertise area and experience (optional)</label>

                            <textarea placeholder='' {...register('message')} className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900">

                            </textarea>

                        </div>
                        <div className="col-span-full">
                            <label for="address" className="text-sm text-black">Membership Fee</label>
                            <p className="w-full flex justify-between py-2 px-6 focus:ring focus:ring-opacity-75 bg-white focus:ring-violet-400 border-gray-700 text-gray-900">
                                <span>
                                    Life Member/Associate Life Member
                                </span>
                                <span>Tk 2,000</span>
                            </p>
                        </div>
                        <div className="col-span-full ">

                            <p className="w-full shadow-lg  py-2 px-6 focus:ring focus:ring-opacity-75 bg-white focus:ring-violet-400 border-gray-700 text-gray-900"><input  type="checkbox" />  I hereby declare that, as a Life Member/Associate Life Member, I shall abide by the rules and regulations of BUET Alumni and support its activities that will help achieve its objectives.

                            </p>
                        </div>
                    </div>
                    <div className="space-y-2 col-span-full lg:col-span-1 flex  justify-center ">
                        <div>
                            <p className="font-medium">Photo *</p>
                            {
                                photo ? <img src={URL.createObjectURL(photo)} alt="product-photo" className='object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56' /> :

                                    <img className='object-cover mb-6 rounded shadow-lg h-28 sm:h-48 xl:h-56 w-28 sm:w-48 xl:w-56' src="http://buetalumni.org/assets/images/profile/default.jpg" alt="" />

                            }




                            <input id="address" type="file" placeholder="" accept='photo/*' onChange={(e) => setPhoto(e.target.files[0])} className="w-full py-2 px-6 focus:ring focus:ring-opacity-75 focus:ring-violet-400 border-gray-700 text-gray-900" />
                        </div>
                    </div>
                    <div>
                        <button type='submit' className='btn bg-green-700 outline-none border-none shadow-md mr-4   px-8'>Save</button>
                        <button type='cancel' className='btn bg-red-700 outline-none border-none shadow-md  px-8'>Cancel</button>
                    </div>

                </fieldset>

            </form>
        </section>
    );
};

export default MembershipForm;