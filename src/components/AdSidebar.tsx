import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { stateContext } from "../context/header-sidebar";
import "../index.css";
import { PopoverWithDescription } from "./ui/Popover";

const AdSidebar = () => {
  const { isCollapse, handleCollapse } = useContext(stateContext);
  const listItems = [
    {
      id: 1,
      title: "Notifications",
      url: "/admin/notifications",
      icon: "fa-solid fa-circle-exclamation",
    },
    {
      id: 2,
      title: "Dashboard",
      url: "/admin/dashboard",
      icon: "fa-solid fa-house",
    },
    {
      id: 3,
      title: "Category",
      url: "/admin/category",
      icon: "fa-solid fa-list",
    },
    {
      id: 4,
      title: "Products",
      url: "/admin/products",
      icon: "fa-brands fa-product-hunt",
    },
    {
      id: 5,
      title: "Users",
      url: "/admin/users",
      icon: "fa-solid fa-user",
    },
    {
      id: 6,
      title: "Setup",
      url: "/admin/setup",
      icon: "fa-solid fa-gear",
    },
  ];

  useEffect(() => {
    setTimeout(() => {
      handleCollapse();
    }, 100);
  }, []);

  return (
    <div className="block absolute left-0 top-[70px] bottom-0 overflow-y-scroll scrollbar-thin scrollbar-thumb-gray-800 scrollbar-track-gray-200">
      <ul
        className={`h-full space-y-3 bg-blue-gray-600 text-white ${
          isCollapse
            ? "w-[64px] transition-width ease-in-out duration-500 delay-200"
            : "w-[250px] transition-width ease-in-out duration-500"
        }`}
      >
        {listItems.map((item) => (
          <li key={item.id} className="relative hover:bg-sky-700">
            <Link to={item.url} className="block  p-4 mx-3 w-full rounded-md">
              <PopoverWithDescription icon={item.icon} name={item.title} />
              {!isCollapse && <span className="ml-4 w-full">{item.title}</span>}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default AdSidebar;
