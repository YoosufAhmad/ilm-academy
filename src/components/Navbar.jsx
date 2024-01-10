import React, { useState } from "react";
import { IoIosMenu } from "react-icons/io";
import { CgClose } from "react-icons/cg";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-7xl mx-auto px-4">
      <h1 className="w-full text-3xl font-bold text-[#3a8690]">Ilm-Academy</h1>
      <ul className="hidden md:flex font-semibold">
        <li className="p-4">Home</li>
        <li className="p-4">Courses</li>
        <li className="p-4">About</li>
        <li className="p-4">Contact</li>
      </ul>
      <div onClick={handleNav} className="block md:hidden">
        {nav ? <CgClose size={30} /> : <IoIosMenu size={30} />}
      </div>
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-400 bg-[#F4EAE6] ease-in-out duration-500"
            : "fixed left-[-100%]"
        }
      >
        <h1 className="w-full text-3xl font-bold text-[#3a8690] m-4">
          Ilm-Academy
        </h1>
        <ul className="uppercase p-4 font-semibold">
          <li className="p-4 border-b border-gray-400">Home</li>
          <li className="p-4 border-b border-gray-400">About</li>
          <li className="p-4 border-b border-gray-400">Courses</li>
          <li className="p-4 border-b border-gray-400">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;


