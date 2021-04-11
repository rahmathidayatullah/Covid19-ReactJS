import React, { useState } from "react";
import IconBrand from "../../assets/icon/chicode0202.png";
import IconNotif from "../../assets/icon/notif";
import IconArrow from "../../assets/icon/arrow";

export default function Index({ onClick }) {
  const [show, setShow] = useState(false);
  return (
    <div className="fixed w-full bg-white flex justify-between px-5 border border-b-2 z-50">
      {/* menu ketika < md */}
      <div
        className="absolute top-1 font-semibold rounded-lg text-sm duration-200 hover:bg-blue-400 hover:text-white text-gray-600 px-3 py-1 md:hidden cursor-pointer"
        onClick={onClick}
      >
        <p>Menu</p>
      </div>
      {/* image brand */}
      <img
        className="relative left-1/2 transform -translate-x-1/2 md:transform-none md:static w-20 h-10"
        src={IconBrand}
      />
      {/* list header */}
      <ul className="flex items-center">
        <li className="relative mr-10 cursor-pointer">
          <IconNotif />
        </li>
        <li
          className="flex items-center relative cursor-pointer"
          onClick={() => (show === false ? setShow(true) : setShow(false))}
        >
          {/* icon profile */}
          <div className="w-6 h-6 rounded-full border mr-3"></div>
          {/* icon arrow */}
          <IconArrow />
          {/* list item arrow */}
          {show === false ? (
            ""
          ) : (
            <ul className="absolute right-0 top-10 border rounded-md whitespace-nowrap">
              <li className="hover:bg-gray-200 duration-500 cursor-pointer pl-2 pr-10 py-1 text-sm">
                Nama Akun
              </li>
              <li className="hover:bg-gray-200 duration-500 cursor-pointer pl-2 pr-10 py-1 text-sm">
                Logout
              </li>
            </ul>
          )}
        </li>
      </ul>
    </div>
  );
}
