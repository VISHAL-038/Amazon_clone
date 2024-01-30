import React, { useEffect, useRef, useState } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import SideNavContent from "./SideNavContent";
import { useSelector } from "react-redux";

const HeaderBottom = () => {
  const userInfo = useSelector((state) => state.amazon.userInfo);
  const ref = useRef();
  const [sidebar, setSideBar] = useState(false);
  useEffect(() => {
    document.body.addEventListener("click", (e) => {
      if (e.target.contains(ref.current)) {
        setSideBar(false);
      }
    });
  }, [ref, sidebar]);
  return (
    <div className="w-full px-4 h-[36px] bg-amazon_light text-white flex items-center">
      <ul className="flex items-center gap-2 text-sm tracking-wide">
        <li
          onClick={() => setSideBar(true)}
          className="headerHover flex items-center gap-1"
        >
          <MenuIcon />
          All
        </li>
        <li className="headerHover hidden md:inline-flex">Today's Deals</li>
        <li className="headerHover hidden md:inline-flex">Customer Service</li>
        <li className="headerHover hidden md:inline-flex">Gift Cards</li>
        <li className="headerHover hidden md:inline-flex">Registry</li>
        <li className="headerHover hidden md:inline-flex">Sell</li>
      </ul>

      {sidebar && (
        <div className="w-full h-screen text-black  top-0 left-0 bg-amazon_blue bg-opacity-50 z-50 fixed">
          <div className="w-full h-full z-20  top-0 left-0 absolute">
            <div
              ref={ref}
              className="w-[350px] h-full bg-white border border-black relative"
            >
              <div className="w-full bg-amazon_light text-white py-2 px-6 flex items-center gap-4 z-50">
                {userInfo ? (
                  <h3 className="font-titleFont font-bold text-lg tracking-wide ">
                    <AccountCircleIcon/>
                    Hello,{userInfo.userName}
                  </h3>
                ) : (
                  <h3 className="font-titleFont font-bold text-lg tracking-wide ">
                    <AccountCircleIcon/>
                    Hello, Sign In
                  </h3>
                )}
              </div>
              <SideNavContent
                title="Digital Content & Devices"
                one="Amazon Music"
                two="Kindle E-Readers & Books"
                three="Amazon Appstore"
              />
              <SideNavContent
                title="Shop By Departments"
                one="Electronics"
                two="Computers"
                three="Smart Home"
              />
              <SideNavContent
                title="Programs & Features"
                one="Gift Cards"
                two="Amazon Live"
                three="International Shopping"
              />
              <SideNavContent
                title="Help & Setting"
                one="Your Account"
                two="Customer Service"
                three="Contact Us"
              />
            </div>
            <span
              onClick={() => setSideBar(false)}
              className="cursro-pointer absolute top-0 left-[360px] w-10 h-10 text-black flex items-center justify-center border bg-gray-200 hover:bg-red-500 hover:text-white duration-300"
            >
              <CloseIcon />
            </span>
          </div>
        </div>
      )}
    </div>
  );
};

export default HeaderBottom;
