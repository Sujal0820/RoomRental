import React from 'react'

const Hero = () => {
  return (
    <div className="text-center max-w-screen-2xl">
      <h1 className="mt-14 text-center">World's Largest NoBrokerage Property Website</h1>
      <div className='justify-center py-5'>
      <button className='bg-red-100 font-bold py-2 px-4 rounded inline-flex items-center'>Rental Agreement | Next Day Delivery</button>
      </div>

      <div className="container mx-auto p-4">
      {/* Search type buttons (Buy, Rent, Commercial) */}
      <button className="px-4 py-2 text-gray-700 bg-white hover:bg-red-500 hover:text-white border border-gray-300">Buy</button>
      <button className="px-4 py-2 text-gray-700 bg-white hover:bg-red-500 hover:text-white border border-gray-300">Rent</button>
      <button className="px-4 py-2 text-gray-700 bg-white hover:bg-red-500 hover:text-white border border-gray-300">Commercial</button>

      {/* Location input */}
      <div className="justify-center items-center">
        <input
          type="text"
          id="location"
          className="mt-1 ml-auto mr-auto block w-96 rounded-md px-3 py-2 justify-center items-center border border-gray-300 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
          placeholder="Search upto 3 localities or landmarks"
        />
      </div>

      {/* Search button */}
      <button className="mt-4 px-4 py-2 bg-red-700 text-white rounded-md hover:bg-red-800">
        <svg className=" flex w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z" clipRule="evenodd"></path></svg>
        Search
      </button>

      {/* post your property*/}
    </div>
    <h1 className='text-center'>Are You a Property Owner</h1>
    <button type="button" className="focus:outline-none text-white bg-green-600 hover:bg-green-500 focus:ring-4 focus:ring-green-300 font-medium text-sm dark:bg-green-400 dark:hover:bg-green-500 dark:focus:ring-green-600 px-6 py-2 mb-3 mt-3">Post Free PropertyAd</button>
    </div>
  )
}

export default Hero