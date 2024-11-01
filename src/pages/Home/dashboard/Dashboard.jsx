import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Profile from './Profile';
import Setting from './Setting';
import Notification from './notfication';
import Center from './Center';
import Right from './Right';
import { BsFillSaveFill } from "react-icons/bs";
import { Link } from 'react-router-dom';
function Dashboard() {
    return (
        <>
            <div className="flex ">
                {/* Sidebar */}
               
                <div className="border-2 bg-white rounded-lg shadow-md p-4 max-w-xs">
    {/* Background and Profile Picture */}
    <div className="relative">
        {/* Background Image */}
        <div className="h-20 bg-cover bg-center rounded-t-lg" style={{ backgroundImage: "url('./linkden.png')" }}></div>

        {/* Profile Picture */}
        <div className="absolute top-10 left-1/2 transform -translate-x-1/2">
            <img className="w-20 h-20 rounded-full border-4 border-white" src="./linkden.png" alt="Profile" />
        </div>
    </div>

    {/* Name and Description */}
    <div className="mt-12 text-center">
        <h5 className="text-lg font-semibold text-gray-800">Saif</h5>
        <p className="text-sm text-gray-600">Short description goes here</p>
    </div>

    {/* Divider */}
    <hr className="my-4 border-gray-300" />

    {/* Profile Viewers and Post Impressions */}
    <div className="space-y-2">
        <div className="flex justify-between items-center">
            <p className="text-sm text-gray-700 font-semibold">Profile viewers</p>
            <p className="text-xs text-gray-500">XX views</p>
        </div>
        <div className="flex justify-between items-center">
            <p className="text-sm text-gray-700 font-semibold">Post impressions</p>
            <p className="text-xs text-gray-500">XX impressions</p>
        </div>
    </div>

    {/* Premium Promotion */}
    <div className="mt-4 text-left">
    <p className="text-sm text-gray-700 font-semibold">
        Leverage LinkedIn Premium for career success
    </p>
    <button className="mt-2 bg-yellow-800 text-white px-4 py-1 rounded-full text-xs hover:bg-yellow-700">
        Try Premium for PKR 0
    </button>
</div>


    {/* Divider */}
    <hr className="my-4 border-gray-300" />

    {/* Saved Items */}
    <div className="text-center">
    <Link className="flex items-center  text-gray-600 text-sm font-semibold hover:text-gray-600">
        <BsFillSaveFill className="mr-1" /> {/* Icon with spacing */}
        <span>Saved items</span>
    </ Link>
</div>
</div>



                {/* Main Content */}
                <main className="flex-1 p-6 bg-gray-100 flex">

                    <Center />
                    <Right />

                    <Routes>
                        <Route path="/profile" element={<Profile />} />
                        <Route path="/notifications" element={<Notification />} />
                        <Route path="/settings" element={<Setting />} />
                        {/* Add more routes as needed */}
                    </Routes>
                </main>
            </div>
        </>
    );
}

export default Dashboard;
