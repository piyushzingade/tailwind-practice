import React from 'react';
import { FaSearch } from 'react-icons/fa';

const Topbar = () => {
    return (
        <div className="flex justify-between items-center bg-white shadow-md p-4">
            <div className="flex space-x-8 items-center">
                <div className="text-blue-700 underline">Siddhita X Piyush</div>
                <div className="text-black font-normal hover:text-blue-500 cursor-pointer">Destination</div>
                <div className="text-black font-normal hover:text-blue-500 cursor-pointer">Planning</div>
                <div className="text-black font-normal hover:text-blue-500 cursor-pointer">Inspiration</div>
                <div className="text-black font-normal hover:text-blue-500 cursor-pointer">Shop</div>
            </div>

            <div className="flex space-x-8 items-center">
                <div className="text-black font-normal hover:text-blue-500 cursor-pointer flex items-center">
                    <FaSearch className="mr-2" />
                    Search
                </div>
                <div className="text-black font-normal hover:text-blue-500 cursor-pointer">Saves</div>
                <button className="bg-blue-600 text-white rounded-md shadow px-4 py-2">Sign In</button>
            </div>
        </div>
    );
}

export default Topbar;
