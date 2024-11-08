import React, { useState } from "react";
import { HiMenuAlt1, HiOutlineX } from "react-icons/hi";
function Header() {
  const [toggle, setToggle] = useState(false);
  const menuList = [
    {
      id: 1,
      name: "Home",
    },
    {
      id: 2,
      name: "About",
    },
    {
      id: 3,
      name: "Skills",
    },
    {
      id: 4,
      name: "Portfolio",
    },
  ];
  return (
    <div>
      <div className="flex p-4 items-center justify-between md:justify-start lg:justify-start">
        <img
          src={require("./../Assets/Images/logo.png")}
          className="w-[140px]"
        />
        <ul className="md:flex lg:flex gap-2 ml-5 hidden">
          {menuList.map((item) => (
            <li className="hover:bg-blue-600 hover:text-white px-3 py-1 rounded-full">
              {item.name}
            </li>
          ))}
        </ul>
        <div className="md:hidden lg:hidden">
          {!toggle ? (
            <HiMenuAlt1
              className="text-[20px] cursor-pointer "
              onClick={() => setToggle(!toggle)}
            />
          ) : (
            <HiOutlineX
              className="text-[20px] cursor-pointer "
              onClick={() => setToggle(!toggle)}
            />
          )}
          {toggle ? (
            <ul className="flex flex-col gap-2  absolute ml-[-90px] items-center bg-gray-300 mt-2 rounded-md p-3">
              {menuList.map((item) => (
                <li className="hover:bg-blue-600 hover:text-white px-3 py-1 rounded-full">
                  {item.name}
                </li>
              ))}
            </ul>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Header;
