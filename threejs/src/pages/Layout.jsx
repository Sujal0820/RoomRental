import React from 'react'
import {Link } from 'react-router-dom'

const Layout = () => {
  return (
    <div>
  <Link to="/Signup" className="hover:bg-gray-200 font-bold py-2 px-4 rounded inline-flex items-center">Signup</Link>
  <Link to="/Login" className='hover:bg-gray-200 font-bold py-2 px-4 rounded inline-flex items-center'>Login</Link>
    </div>
  )
}

export default Layout