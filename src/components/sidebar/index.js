import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function Sidebar() {
  const location = useLocation().pathname;
  return (
    <div>
      <h1 className="text-xl xl:text-2xl font-semibold text-gray-600">
        MANAGE
      </h1>
      <ul className="mt-8">
        <Link to="/">
          <li
            className={`p-2 text-sm xl:text-base ${
              location === "/" ? "bg-blue-400 text-white" : ""
            } hover:bg-blue-400 duration-100 cursor-pointer hover:text-white`}
          >
            Data Global
          </li>
        </Link>

        <Link to="/detailconfirmed">
          <li
            className={`p-2 text-sm xl:text-base ${
              location === "/detailconfirmed" ? "bg-blue-400 text-white" : ""
            } hover:bg-blue-400 duration-100 cursor-pointer hover:text-white`}
          >
            Data Terkonfrmasi
          </li>
        </Link>

        <Link to="/detailrecorvered">
          <li
            className={`p-2 text-sm xl:text-base ${
              location === "/detailrecorvered" ? "bg-blue-400 text-white" : ""
            } hover:bg-blue-400 duration-100 cursor-pointer hover:text-white`}
          >
            Data Sembuh
          </li>
        </Link>
        <Link to="/detaildeaths">
          <li
            className={`p-2 text-sm xl:text-base ${
              location === "/detaildeaths" ? "bg-blue-400 text-white" : ""
            }  hover:bg-blue-400 duration-100 cursor-pointer hover:text-white`}
          >
            Data Meninggal
          </li>
        </Link>
        <Link to="/dailybydate">
          <li
            className={`p-2 text-sm xl:text-base ${
              location === "/dailybydate" ? "bg-blue-400 text-white" : ""
            }  hover:bg-blue-400 duration-100 cursor-pointer hover:text-white`}
          >
            Cek Berdasarkan Tanggal
          </li>
        </Link>
      </ul>
    </div>
  );
}
