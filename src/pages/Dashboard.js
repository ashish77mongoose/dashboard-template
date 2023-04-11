import React, { useState } from "react";
import { Outlet } from "react-router-dom";
import Sidebar from "../components/Sidebar";
import { reactIcons } from "../utils/icons";

const Dashboard = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className=" min-h-screen w-full ">
      <div
        className={`${
          isOpen ? "left-[-100%]" : "left-0"
        } w-[280px] flex xxl:w-[350px]  h-full transition-all duration-300 flex-shrink-0 fixed  top-0 z-50 `}
      >
        <Sidebar setIsOpen={setIsOpen} />
      </div>
      <div
        className={`pb-6 transition-all duration-300 ${
          isOpen
            ? "ml-0"
            : " ml-[280px] xxl:ml-[350px] w-[calc(100%-280px)] xxl:w-[calc(100%-350px)]"
        }`}
      >
        <nav className=" bg-white text-grey-90 w-full py-6 xxl:py-8 sticky left-0 top-0 z-50 shadow-sm px-8">
          <div className="flex items-center gap-2">
            {isOpen && (
              <button
                onClick={() => setIsOpen(false)}
                className="w-10 h-10 mycenter bg-themecyan-lighter rounded-full text-3xl"
              >
                {reactIcons.arrowright}
              </button>
            )}
            <h4>Hi, Admin</h4>
          </div>
        </nav>
        <div className="px-6 w-full mt-10">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
