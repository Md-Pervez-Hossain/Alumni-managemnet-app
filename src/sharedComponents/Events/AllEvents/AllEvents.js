import React, { useState } from 'react';
import { AllEventsData, EventCategory } from './utils';

const AllEvents = () => {
    const [category, setCategory] = useState("AllEvents");
    const [hoverValue, setHoverValue] = useState(null);
    function handleEventLoad(currentEvent) {
        setCategory(currentEvent);
    }

    const eventItems =
        category === "AllEvents"
            ? AllEventsData
            : AllEventsData.filter((item) => item.event === category);
    console.log(eventItems);

    return (
        <div className='max-w-5xl mx-auto sm:flex gap-3'>
            {/* for web */}
            <div className='md:w-[20%] w-full border-1 bg-gray-300 hidden sm:block'>
                <div className='flex sm:flex-col flex-row justify-center items-center mx-auto'>
                    {
                        EventCategory.map((item) => (
                            <button
                                onClick={() => handleEventLoad(item.eventCategory)}
                                className='px-5 py-2 w-full mr-6 md:w-auto mt-4 text-sm font-semibold bg-gray-300 focus:bg-primary focus:text-secondary hover:bg-primary hover:text-secondary'>
                                {item.label}
                            </button>
                        ))
                    }
                </div>
            </div>
            {/* for mobile */}
            <div className='w-full border-1 bg-gray-300 sm:hidden block mt-10 p-3'>
                <select
                    onChange={(e) => handleEventLoad(e.target.value)}
                    className='w-full h-11 border-green-500'>
                    {
                        EventCategory.map((item) => (
                            <option className='text-xl font-semibold' value={item.eventCategory}>{item.label}</option>
                        ))
                    }
                </select>
            </div>
            <div className='md:w-[80%] w-full'>
                <div>
                    <h2 className='text-2xl text-[#2D6B5A]'>Events</h2>
                    <div>
                        {
                            eventItems.map((item, index) => (
                                <div className='md:flex gap-3 justify-between items-center'>
                                    {/* image */}
                                    <div className='md:w-[280px] w-full rounded-tl-xl rounded-br-xl'>
                                        <img className='md:w-[280px] w-full rounded-tl-xl rounded-br-xl' src={item.image} alt={index} />
                                    </div>
                                    {/* content */}
                                    <div className='flex flex-col justify-between p-2'>
                                        <div className="flex gap-4 items-center">
                                            <div>
                                                <span className="text-sm text-center">Days</span>
                                                <div className="w-8 h-8 text-white bg-primary text-center rounded-full flex justify-center items-center text-lg font-semibold"> <span>3</span> </div>
                                            </div>
                                            <div>
                                                <span className="text-sm text-center">Hours</span>
                                                <div className="w-8 h-8 text-white bg-primary text-center rounded-full flex justify-center items-center text-lg font-semibold"> <span>23</span></div>
                                            </div>
                                            <div>
                                                <span className="text-sm text-center">Min</span>
                                                <div className="w-8 h-8 text-white bg-primary text-center rounded-full flex justify-center items-center text-lg font-semibold"> <span>30</span></div>
                                            </div>
                                            <div>
                                                <span className="text-sm text-center">Sec</span>
                                                <div className="w-8 h-8 text-white bg-primary text-center rounded-full flex justify-center items-center text-lg font-semibold"> <span>59</span></div>
                                            </div>
                                            <span className="mt-6">Remaining</span>
                                        </div>
                                        <div>
                                            <h1 className="text-xl font-semibold">{item.name}</h1>
                                        </div>
                                        <p className="mt-3">
                                            {item.description}
                                        </p>
                                        <button className="bg-primary p-2 rounded-tl-lg rounded-br-lg w-[130px]">
                                            <span className="text-white font-bold">
                                                Details
                                            </span>
                                        </button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllEvents;