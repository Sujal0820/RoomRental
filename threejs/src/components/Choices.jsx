import React from 'react'
import a1 from '../assets/a1.png'
import a2 from '../assets/a2.png';
import a3 from '../assets/a3.png';
import a4 from '../assets/a4.svg';
import a5 from '../assets/a5.png';
import a6 from '../assets/a6.png';
import b1 from '../assets/b1.png';
import b2 from '../assets/b2.png';
import b3 from '../assets/b3.png';
import b4 from '../assets/b4.png';

const Choices = () => {
  return (
    
    <div className='h-100'>
    <div class="grid grid-cols-6 gap-6 py-7 text-center justify-items-center">
      {/*a1*/}
    <div className=' mt-4 mb-3'>
   <a href="#" class="block max-w-sm bg-white hover:bg-gray-100 justify-items-center">
    <img src={a1} />
    <p>Packers & Movers</p>
    </a>
</div>
     {/*a2*/}
<div className=' mt-4 mb-3'>
   <a href="#" class="block max-w-sm bg-white hover:bg-gray-100 justify-items-center">
    <img src={a2} />
    <p>Pay Rent</p>
    </a>
</div>
 {/*a3*/}
<div className=' mt-4 mb-3'>
   <a href="#" class="block max-w-sm bg-white hover:bg-gray-100 justify-items-center">
    <img src={a3} />
    <p>Rental Agreement</p>
    </a>
</div>
 {/*a4*/}
<div className=' mt-4 mb-3'>
   <a href="#" class="block max-w-sm bg-white hover:bg-gray-100 justify-items-center">
    <img src={a4} />
    <p>Click & Earn</p>
    </a>
</div>
 {/*a5*/}
<div className=' mt-4 mb-3'>
   <a href="#" class="block max-w-sm bg-white hover:bg-gray-100 justify-items-center">
    <img src={a5} />
    <p>Painting & Cleaning</p>
    </a>
</div>
  {/*a6*/}
<div className=' mt-4 mb-3'>
   <a href="#" class="block max-w-sm bg-white hover:bg-gray-100 justify-items-center">
    <img src={a6} />
    <p>NoBroker for NRIs</p>
    </a>
</div>
  </div>

  {/*level 2 Choices*/}
<div className='h-20'>
  <h1 className='text-center font-sans'>Why Use NoBroker</h1>
</div>
<div class="grid grid-cols-4 gap-4 text-center justify-items-center">
  {/*b1*/}
<div className=' mt-4 mb-3'>
  <a href="#" class="block max-w-sm bg-white hover:bg-gray-100 justify-items-center">
  <img src={b1} className='px-36'/>
  <p>Avoid Brokers</p>
  <p>We directly connect you to verified owners to save brokerage</p>
</a>
</div>
{/*b2*/}
<div className=' mt-4 mb-3'>
  <a href="#" class="block max-w-sm bg-white hover:bg-gray-100 justify-items-center">
  <img src={b2} className='px-36' />
  <p>Free Listing</p>
  <p>Easy listing process.Also using WhatsApp</p>
</a>
</div>
{/*b3*/}
<div className=' mt-4 mb-3'>
  <a href="#" class="block max-w-sm bg-white hover:bg-gray-100 justify-items-center">
  <img src={b3} className='px-36' />
  <p>Shortlist without Visit</p>
  <p>Extensive information makes it easy</p>
</a>
</div>
{/*b4*/}
<div className=' mt-4 mb-3'>
  <a href="#" class="block max-w-sm bg-white hover:bg-gray-100 justify-items-center">
  <img src={b4} className='px-36' />
  <p>Rental Agreement</p>
  <p>Assistance in creating Rental agreement & Paperwork</p>
</a>
</div>
  </div>
   </div>
  )
}

export default Choices