import React from 'react'
import { MdOutlinePermMedia } from "react-icons/md";
import { MdEvent } from "react-icons/md";
import { TfiWrite } from "react-icons/tfi";
import { Link } from 'react-router-dom';
import { BiLike } from "react-icons/bi";
import { FaRegCommentDots } from "react-icons/fa";
import { BiRepost } from "react-icons/bi";
import { IoIosSend } from "react-icons/io";


function Center() {
    return (
        <>

            <div className="space-y-6 max-w-lg mx-auto p-4 bg-gray-50">
                {/* Premium Promotion */}
                <div className="p-4 rounded-lg shadow border space-y-2 bg-white">
                    <h4 className="text-lg font-bold text-gray-700 text-left">Get Ahead with Premium</h4>
                    <div className="border-t pt-4">
                        <div className="flex justify-center mb-2">
                            <img className="mx-auto" width={100} src="./linkden.png" alt="LinkedIn Premium" />
                        </div>
                        <h5 className="text-center font-semibold">Looking for your next role?</h5>
                        <p className="text-center text-gray-600 text-sm">Premium members are 2.6x more likely to get hired on average.</p>
                        <button className="w-full bg-yellow-800 text-white py-2 mt-4 rounded-3xl hover:bg-yellow-700">Get Premium Now</button>
                    </div>
                </div>

                {/* Start a Post */}
                <div className="border rounded-lg p-4 bg-white">
                    <div className="flex items-center space-x-3">
                        <a href="#">
                            <img width={40} className="rounded-full" src="./linkden.png" alt="Profile" />
                        </a>
                        <input
                            type="text"
                            placeholder="Start a post..."
                            className="w-full px-4 py-2 rounded-full border border-gray-300 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500"
                        />
                    </div>
                    <div className="flex justify-around mt-4 text-sm text-gray-600">
                        <button className="flex items-center hover:bg-gray-200 p-2 rounded-lg">
                            <MdOutlinePermMedia className="text-blue-500 mr-1" />
                            <span>Media</span>
                        </button>
                        <button className="flex items-center hover:bg-gray-200 p-2 rounded-lg">
                            <MdEvent className="text-orange-500 mr-1" />
                            <span>Event</span>
                        </button>
                        <button className="flex items-center hover:bg-gray-200 p-2 rounded-lg">
                            <TfiWrite className="text-orange-600 mr-1" />
                            <span>Write article</span>
                        </button>
                    </div>
                </div>

                {/* LinkedIn Post */}
                <div className="border rounded-lg p-4 shadow-lg bg-white">
                    {/* Profile Section */}
                    <Link href="#">
                        <div className="flex items-center space-x-3 mb-2">
                            <img className="w-10 h-10 rounded-full" src="./linkden.png" alt="Profile" />
                            <div className="text-left">
                                <h5 className="font-semibold text-slate-700">Saif</h5>
                                <p className="text-xs text-gray-500">500+ followers • Promoted</p>
                                <p className="text-xs text-gray-500"> Promoted</p>
                            </div>
                        </div>
                    </Link>


                    {/* Post Description */}
                    <p className="text-gray-800 text-sm mb-4">This is a sample LinkedIn post description. It gives some context about the post or project.</p>

                    {/* Post Image */}
                    <img className="w-full rounded-lg mb-4" src="./linkden.png" alt="Post Content" />

                    {/* Action Buttons */}
                    <div className="flex justify-between text-gray-600 text-sm border-t pt-2">
                        <button className="flex items-center hover:text-blue-600 space-x-1">
                            <BiLike className="text-lg" />
                            <span>Like</span>
                        </button>
                        <button className="flex items-center hover:text-blue-600 space-x-1">
                            <FaRegCommentDots className="text-lg" />
                            <span>Comment</span>
                        </button>
                        <button className="flex items-center hover:text-blue-600 space-x-1">
                            <BiRepost className="text-lg" />
                            <span>Repost</span>
                        </button>
                        <button className="flex items-center hover:text-blue-600 space-x-1">
                            <IoIosSend className="text-lg" />
                            <span>Share</span>
                        </button>
                    </div>
                </div>

                 {/* LinkedIn Post */}
                 <div className="border rounded-lg p-4 shadow-lg bg-white">
                    {/* Profile Section */}
                    <Link href="#">
                        <div className="flex items-center space-x-3 mb-2">
                            <img className="w-10 h-10 rounded-full" src="./linkden.png" alt="Profile" />
                            <div className="text-left">
                                <h5 className="font-semibold text-slate-700">Saif</h5>
                                <p className="text-xs text-gray-500">500+ followers • Promoted</p>
                                <p className="text-xs text-gray-500"> Promoted</p>
                            </div>
                        </div>
                    </Link>


                    {/* Post Description */}
                    <p className="text-gray-800 text-sm mb-4">This is a sample LinkedIn post description. It gives some context about the post or project.</p>

                    {/* Post Image */}
                    <img className="w-full rounded-lg mb-4" src="./linkden.png" alt="Post Content" />

                    {/* Action Buttons */}
                    <div className="flex justify-between text-gray-600 text-sm border-t pt-2">
                        <button className="flex items-center hover:text-blue-600 space-x-1">
                            <BiLike className="text-lg" />
                            <span>Like</span>
                        </button>
                        <button className="flex items-center hover:text-blue-600 space-x-1">
                            <FaRegCommentDots className="text-lg" />
                            <span>Comment</span>
                        </button>
                        <button className="flex items-center hover:text-blue-600 space-x-1">
                            <BiRepost className="text-lg" />
                            <span>Repost</span>
                        </button>
                        <button className="flex items-center hover:text-blue-600 space-x-1">
                            <IoIosSend className="text-lg" />
                            <span>Share</span>
                        </button>
                    </div>
                </div>
            </div>







        </>
    )
}

export default Center