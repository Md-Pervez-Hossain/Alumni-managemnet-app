import React from 'react';

const FundsForCause = () => {
    return (
        <div className='m-2'>
            <p className='text-5xl font-semibold mb-3'>Funds for a cause</p>
            <p className='mb-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Libero, pariatur velit? Ab voluptate sed optio repellendus doloremque odit natus, eligendi voluptatem impedit quam atque neque tenetur laboriosam esse, qui nam.</p>

            <button className='px-5 py-6 text-xl rounded-tl-3xl rounded-br-3xl font-semibold bg-gray-300 focus:bg-green-800 focus:text-white'>$ 25</button>
            <button className='px-5 py-6 ml-4 text-xl rounded-tl-3xl rounded-br-3xl font-semibold bg-gray-300 focus:bg-green-800 focus:text-white'>$ 50</button>
            <button className='px-5 py-6 ml-4 text-xl rounded-tl-3xl rounded-br-3xl font-semibold bg-gray-300 focus:bg-green-800 focus:text-white'>$ 100</button>

            <input className='px-5 py-6 ml-4 text-xl rounded-tl-3xl rounded-br-3xl font-semibold bg-gray-300 focus:bg-green-800 focus:text-white' type="text" placeholder='Others'/>

            
            <section className='flex mt-5'>
            <input type="checkbox" class="w-16" />
            <p>There are many company Lorem ipsm dolor sitg amet.</p>
            </section>

            <button className='px-5 py-6 mt-4 text-xl rounded-tl-3xl rounded-br-3xl font-semibold bg-gray-300 focus:bg-green-800 focus:text-white'>Submit Funds</button>
            
            <button className='px-5 py-6 mt-4 ml-5 text-xl rounded-tl-3xl rounded-br-3xl font-semibold bg-gray-300 focus:bg-green-800 focus:text-white'>Cancel Funds</button>
        
        </div>
    );
};

export default FundsForCause;