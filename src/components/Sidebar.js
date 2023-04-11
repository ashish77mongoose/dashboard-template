import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { sideBarLinks } from "../utils/constants";
import { reactIcons } from "./../utils/icons";

const Sidebar = ({ setIsOpen }) => {
  const navigate = useNavigate();

  return (
    <div className="h-screen flex flex-col justify-between bg-white shadow-lg shadow-themecyan-lighter  overflow-auto w-full py-8    ">
      <div className="flex items-center gap-2 justify-between pr-1">
        <h4
          className="cursor-pointer  px-2"
          onClick={() => navigate("/overview")}
        >
          FXFort
        </h4>
        <button
          onClick={() => setIsOpen(true)}
          className="w-10 h-10 mycenter bg-themecyan-lighter rounded-full text-3xl"
        >
          {reactIcons.arrowleft}
        </button>
      </div>

      <div className="flex flex-col  mt-8 xxl:mt-12 flex-1">
        {sideBarLinks.map((item, index) => (
          <NavLink
            key={index}
            to={item.path}
            className={({ isActive }) =>
              `relative font-semibold  py-4 w-full px-4  flex gap-4 items-center cursor-pointer duration-300 hover:bg-themecyan-darker hover:text-white ${
                isActive ? "bg-themecyan-darker text-white" : "text-grey-90"
              }`
            }
          >
            <span className="text-2xl">{item.icon}</span>{" "}
            <span className="text-[18px] xxl:text-[22px]"> {item.title} </span>{" "}
          </NavLink>
        ))}
      </div>
      <div>
        <NavLink
          to={"/"}
          className={({ isActive }) =>
            `relative font-semibold text-red-dark  py-4 w-full px-4  flex gap-4 items-center cursor-pointer duration-300 hover:bg-red-light  `
          }
        >
          <span className="text-2xl">{reactIcons.logout}</span>{" "}
          <span className="text-[18px] xxl:text-[22px]"> Logout </span>{" "}
        </NavLink>
      </div>
    </div>
  );
};

export default Sidebar;
