import React from 'react'
import c1 from '../assets/c1.png';

const Contact = () => {
  return (
<div className='bg-neutral-200 h-200'>
<h1 className='text-center'>NoBroker Assist Plan For Builder</h1>
<div className='flex flex-wrap mt-8 w-100'>
<img src={c1} className='mb-5 ml-60'/>
<div>
  <p className='ml-32 mt-2'>Get in touch with us to Sell or Rent Your Projects</p>
  <p className='ml-32 mt-2'>For Builder Enquiries: +91 91080 50400</p>
<button type="button" className="focus:outline-none text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 mb-30 my-19 ml-32 dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-900">Enquire Now</button>
</div>
</div>
</div>
  )
}

export default Contact