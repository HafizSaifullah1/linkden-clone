import React from 'react'
import { AiOutlineArrowRight } from "react-icons/ai";
function Right() {
    return (
        <>
<div className="p-4 rounded-lg shadow space-y-2">
  <h4 className="text-lg font-bold text-gray-800">Add to Your Feed</h4>

  {/* Suggested Connections */}
  <div className="space-y-4">
    {/* Suggested Connection 1 */}
    <div className="flex items-center space-x-3">
      <img className="w-10 h-10 rounded-full mb-12" src="./linkden.png" alt="Profile 1" />
      <div>
        <p className="font-semibold text-sm text-gray-900">John Doe</p>
        <p className="text-xs text-gray-500">Software Engineer at ABC Corp</p>
        <button className="text-xs rounded-2xl mt-2 text-gray-500 font-semibold text-left">+ Follow</button>
      </div>
    </div>

    {/* Suggested Connection 2 */}
    <div className="flex items-center space-x-3 ">
      <img className="w-10 h-10 rounded-full mb-12" src="./linkden.png" alt="Profile 2" />
      <div>
        <p className="font-semibold text-sm text-gray-900">Jane Smith</p>
        <p className="text-xs text-gray-500 ">Product Manager at XYZ Inc</p>
        <button className="text-xs rounded-2xl mt-2 text-gray-500 font-semibold text-left">+ Follow</button>
      </div>
    </div>
  </div>
  <p className="text-xs text-gray-500 font-semibold cursor-pointer  flex items-center justify-center">
  View all recommendations <AiOutlineArrowRight className="ml-3" />
</p>

</div>


        </>
    )
}

export default Right