import React from 'react';

const Contact = () => {
    return (
        <div className='mx-32 mt-16 mb-20'>
            <h1 className='text-5xl font-bold mb-10'>Contact</h1>
            <form>

                <div className='flex gap-12 mb-12'>
                    <input type="text" name="name" id="name" placeholder="First Name"
                        className="w-1/2 p-6 text-2xl rounded-tl-3xl rounded-br-3xl bg-[#F2F2F2]" required />

                    <input type="text" name="name" id="name" placeholder="Last Name"
                        className="w-1/2 p-6 text-2xl rounded-tl-3xl rounded-br-3xl bg-[#F2F2F2]" required />
                </div>

                <div className='flex gap-12 mb-12'>
                    <input type="text" name="name" id="name" placeholder="First Name"
                        className="w-1/2 p-6 text-2xl rounded-tl-3xl rounded-br-3xl bg-[#F2F2F2]" required />

                    <input type="text" name="name" id="name" placeholder="Last Name"
                        className="w-1/2 p-6 text-2xl rounded-tl-3xl rounded-br-3xl bg-[#F2F2F2]" required />
                </div>

                <textarea name="message" id="message" rows="3" placeholder="FeedBack"
                    className="w-full p-6 text-2xl rounded-tl-3xl rounded-br-3xl bg-[#F2F2F2]" required></textarea>

                <button className='mt-8 p-5 text-2xl text-right text-white bg-[#2D6B5A]  rounded-tl-2xl rounded-br-2xl'> Submit </button>
            </form>
        </div>
    );
};

export default Contact;