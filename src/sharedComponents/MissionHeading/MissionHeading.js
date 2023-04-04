import React from 'react';

const MissionHeading = () => {
    return (
        <div className='mx-32 my-16 flex '>
            <div className='w-1/2'>
                <img className='' src="https://thumbs.dreamstime.com/b/business-person-working-computer-his-office-desk-112097175.jpg" alt="" />
            </div>

            <div className='ms-10 w-1/2'>
                <h1 className='mb-6 text-3xl font-semibold'>Mission Heading</h1>
                <p>There are many company Lorem ipsm dolor sitg amet, csetur adipicing elit, sed do eiusmod tempor dncint ut labore et dolore magna alis enim ad minim veniam, quis csetur adipicing elit, sed do eiusmod tempor dncint ut labore et dolore magna alis </p>
                <button className='mt-8 p-6 text-right text-white bg-[#2D6B5A]  rounded-tl-2xl rounded-br-2xl'> Learn More </button>                
            </div>
        </div>
    );
};

export default MissionHeading;
