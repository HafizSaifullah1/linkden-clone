import React from 'react'
import { IoMdHome } from "react-icons/io"
import { AiFillProduct } from "react-icons/ai";
import { IoBagHandleSharp } from "react-icons/io5";
import { AiFillMessage } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa6";
import { IoNotifications } from "react-icons/io5";
import { Link } from 'react-router-dom';
import { Input } from 'antd';
function Header() {
  return (
    <>
    <header className="bg-white	 text-gray-600 body-font">
      <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        {/* Logo and Search Input */}
        <div className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">     
          <FaLinkedin className="text-3xl text-blue-800	" />
          <input className="ml-3 text-xl border rounded px-3 py-1  " placeholder="Search" />
        </div>

        {/* Navigation Links */}
        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
          <a className="mr-5 p-4 text-xl hover:text-gray-900"><IoMdHome /></a>
          <a className="mr-5 p-4 text-xl hover:text-gray-900"><AiFillProduct /></a>
          <a className="mr-5 p-4 text-xl hover:text-gray-900"><IoBagHandleSharp /></a>
          <a className="mr-5 p-4 text-xl hover:text-gray-900"><AiFillMessage /></a>
          <a className="mr-5 p-4 text-xl hover:text-gray-900"><IoNotifications /></a>
        </nav>

        {/* Profile Image */}
        <a href="#" className="inline-flex items-center border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
          <img width={40} src="https://www.vhv.rs/dpng/d/551-5511364_circle-profile-man-hd-png-download.png" alt="Profile" />
        </a>
      </div>
    </header>

    </>
  )
}

export default Header