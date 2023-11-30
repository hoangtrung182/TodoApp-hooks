import React, { useContext } from "react";
import { stateContext } from "../context/header-sidebar";

const Header = () => {
  const { handleCollapse } = useContext(stateContext);
  return (
    <div className="fixed box-border w-full bg-sky-950 h-[70px] text-2xl text-white">
      <div
        onClick={() => handleCollapse()}
        className="flex justify-center items-center h-full float-left px-6 cursor-pointer text-xl hover:bg-gray-800"
      >
        <i className="fa-solid fa-compress"></i>
      </div>
      <div className="float-left w-[250px] leading-[70px] text-xl">
        Management Center
      </div>
      <div className="float-right pr-[50px]">
        <div className="flex h-[70px] items-center">
          <div className="relative w-[30px] h-[30px] text-center rounded-xl cursor-pointer">
            <i className="fa-regular fa-bell"></i>
            <span className="absolute right-1 top-0 w-2 h-2 rounded-md bg-orange-600 text-white"></span>
          </div>
          <span className="ml-5">
            <img
              src="https://picsum.photos/30/30"
              alt=""
              className="rounded-[50%] object-cover"
            />
          </span>
          <div className="ml-3">
            <span className="text-white cursorp-pointer flex items-center text-sm">
              admin
              <i className="fa-solid fa-chevron-down font-inherit w-4 h-4 leading-3 ml-2"></i>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
