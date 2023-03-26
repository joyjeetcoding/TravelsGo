import React from 'react'
import Travel1 from "../assets/Travel1.jpg";
import Travel2 from "../assets/Travel2.jpg";
import Travel3 from "../assets/Travel3.jpg";
import Travel4 from "../assets/Travel4.jpg";
import Travel5 from "../assets/Travel5.jpg";


const Destination = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 px-4 text-center'>
        <h1>Check Out this</h1>
        <p>Feeling Excited right ?.....</p>

        <div className='grid grid-rows-none md:grid-cols-5 py-4 gap-2 md:gap-4'>
            <img className='w-full h-full object-cover col-span-2 md:col-span-3 row-span-2' src={Travel1} alt="/" />
            <img className='w-full h-full object-cover' src={Travel2} alt="/" />
            <img className='w-full h-full object-cover' src={Travel3} alt="/" />
            <img className='w-full h-full object-cover' src={Travel4} alt="/" />
            <img className='w-full h-full object-cover' src={Travel5} alt="/" />
        </div>
    </div>
  )
}

export default Destination