import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSummary,
  fetchCountrySingle,
} from "../../features/SummaryAll/action";
import { Link } from "react-router-dom";
import { fetchSummaryRecorvered } from "../../features/SummaryRecorvered/action";
import { fetchCountry } from "../../features/SummaryAll/action";
import IconArrowDown from "../../assets/icon/arrow";
import IconArrowUp from "../../assets/icon/arrow";
import AnimatedNumber from "react-animated-number";
import moment from "moment";
import { ClipLoader } from "react-spinners";

export default function Index() {
  let dispatch = useDispatch();
  let dataSummary = useSelector((state) => state.summary);
  // state global or single country select
  const [globalorselectC, setGlobalorselectC] = useState(false);
  // data all country
  // AL = All Country
  let dataAL = useSelector((state) => state.summary);
  // data country selectOption

  const data =
    dataAL.status === "success"
      ? dataAL?.allcountry?.countries?.map((item) => {
          return { nama: item.name, initial: item.iso3 };
        })
      : "";

  // set show select
  const [showSelect, setShowSelect] = useState(false);
  // change value when click
  const [valueDefaultSelect, setvalueDefaultSelect] = useState(
    "Pilih negara :"
  );
  // function set show select
  const changestateSelect = () => {
    if (showSelect === true) {
      setShowSelect(false);
    } else {
      setShowSelect(true);
    }
  };
  // function selected value select
  const changeValueoption = (item) => {
    if (item === null) {
      dispatch(fetchSummary());
      setvalueDefaultSelect("Global");
      setShowSelect(false);
      setGlobalorselectC(false);
    } else {
      dispatch(fetchCountrySingle(item.initial));
      setvalueDefaultSelect(item.nama);
      setShowSelect(false);
      setGlobalorselectC(true);
    }
  };

  // data statistik
  const confirmValue = dataSummary?.data?.confirmed?.value;
  const deathsValue = dataSummary?.data?.deaths?.value;
  const recorveredValue = dataSummary?.data?.recovered?.value;

  const dataValue = [confirmValue, deathsValue, recorveredValue];

  React.useEffect(() => {
    // dispatch from action
    dispatch(fetchSummaryRecorvered());
    dispatch(fetchCountry());
    dispatch(fetchSummary());
  }, [dispatch]);

  return (
    <div>
      <h1 className="text-2xl xl:text-4xl font-semibold text-gray-600">
        COVID 19
      </h1>
      <div className="grid grid-cols-12 gap-10 mt-8">
        {/* content left */}
        <div className="col-span-12 xl:col-span-8 bg-white h-96 shadow-md border p-2  h-fit-content">
          <h1 className="py-4 text-xl xl:text-3xl font-semibold text-center ">
            Data COVID19 seluruh{" "}
            {valueDefaultSelect === "Global" ? "dunia" : valueDefaultSelect}
          </h1>

          {/* selectOption Negara */}

          <div className="relative w-full flex items-start mr-5">
            <div className="flex flex-col w-full">
              <div className="relative w-full text-gray-500">
                <div
                  className="w-full text-sm cursor-pointer bg-white duration-500 py-2 border pl-2 rounded-md border-gray-300"
                  onClick={() => changestateSelect()}
                >
                  {valueDefaultSelect}
                </div>

                {showSelect === false ? (
                  <IconArrowDown
                    fill={"currentColor"}
                    width={"11"}
                    className={
                      "absolute top-1/2 transform -translate-y-1/2 right-3"
                    }
                  />
                ) : (
                  <IconArrowUp
                    fill={"currentColor"}
                    width={"11"}
                    className={
                      "absolute  top-1/2 transform rotate-180 -translate-y-1/2 right-3"
                    }
                  />
                )}
              </div>

              {showSelect === true ? (
                <ul className="border overflow-scroll bg-white rounded-md top-12 absolute w-full h-48 text-gray-500">
                  <li
                    className="cursor-pointer hover:bg-gray-50 duration-200 p-2 text-sm"
                    onClick={() => changeValueoption(null)}
                  >
                    Global
                  </li>
                  {data.map((item, key) => {
                    return (
                      <li
                        className="cursor-pointer hover:bg-gray-50 duration-200 p-2 text-sm"
                        onClick={() => changeValueoption(item)}
                      >
                        {item.nama}
                      </li>
                    );
                  })}
                  {/* {BtnAction} */}
                </ul>
              ) : (
                ""
              )}
            </div>
          </div>

          {globalorselectC === false ? (
            dataSummary.status === "process" ? (
              <ClipLoader /> // nanti distyle yat
            ) : (
              <div className="mt-5">
                <div className="grid grid-cols-12 gap-5 text-md font-semibold text-gray-600">
                  <Link
                    to="/detailconfirmed"
                    className="col-span-4 border p-2 hover:bg-blue-400 duration-200 cursor-pointer hover:text-white text-gray-800 rounded-md"
                  >
                    Terkonfirmasi <br />
                    {dataSummary.status === "success" ? (
                      <span className="text-2xl font-bold currentColor">
                        <AnimatedNumber
                          value={dataSummary?.data?.confirmed?.value}
                          formatValue={(n) => n.toFixed(0)}
                        />
                      </span>
                    ) : (
                      ""
                    )}
                  </Link>

                  <Link
                    to="/detailrecorvered"
                    className="col-span-4 border p-2 hover:bg-blue-400 duration-200 cursor-pointer hover:text-white text-gray-800 rounded-md"
                  >
                    <div className="">
                      Sembuh <br />
                      {dataSummary.status === "success" ? (
                        <span className="text-2xl  font-bold currentColor">
                          <AnimatedNumber
                            value={dataSummary?.data?.recovered?.value}
                            formatValue={(n) => n.toFixed(0)}
                          />
                        </span>
                      ) : (
                        ""
                      )}
                    </div>
                  </Link>
                  <Link
                    to="/detaildeaths"
                    className="col-span-4 border p-2 hover:bg-blue-400 duration-200 cursor-pointer hover:text-white text-gray-800 rounded-md"
                  >
                    Meniggal <br />
                    {dataSummary.status === "success" ? (
                      <span className="text-2xl  font-bold currentColor">
                        <AnimatedNumber
                          value={dataSummary?.data?.deaths?.value}
                          formatValue={(n) => n.toFixed(0)}
                        />
                      </span>
                    ) : (
                      ""
                    )}
                  </Link>
                </div>
                <p className="mt-2 text-xs text-gray-500 font-semibold pl-2">
                  Data terbaru{" "}
                  {dataSummary.status === "success"
                    ? moment(dataSummary.data.lastUpdate).format("DD-MM-YYYY")
                    : ""}
                </p>
              </div>
            )
          ) : dataSummary.status === "process" ? (
            "proses"
          ) : (
            <div className="mt-5">
              <div className="grid grid-cols-12 gap-5 text-md font-semibold text-gray-600">
                <Link
                  to="/detailconfirmed"
                  className="col-span-4 border p-2 hover:bg-blue-400 duration-200 cursor-pointer hover:text-white text-gray-800 rounded-md"
                >
                  Terkonfirmasi <br />
                  {dataSummary.status === "success" ? (
                    <span className="text-2xl  font-bold currentColor">
                      <AnimatedNumber
                        value={dataSummary?.singlecountry?.confirmed?.value}
                        formatValue={(n) => n.toFixed(0)}
                      />
                    </span>
                  ) : (
                    ""
                  )}
                </Link>

                <Link
                  to="/detailrecorvered"
                  className="col-span-4 border p-2 hover:bg-blue-400 duration-200 cursor-pointer hover:text-white text-gray-800 rounded-md"
                >
                  <div className="">
                    Sembuh <br />
                    {dataSummary.status === "success" ? (
                      <span className="text-2xl  font-bold currentColor">
                        <AnimatedNumber
                          value={dataSummary?.singlecountry?.recovered?.value}
                          formatValue={(n) => n.toFixed(0)}
                        />
                      </span>
                    ) : (
                      ""
                    )}
                  </div>
                </Link>
                <Link
                  to="/detaildeaths"
                  className="col-span-4 border p-2 hover:bg-blue-400 duration-200 cursor-pointer hover:text-white text-gray-800 rounded-md"
                >
                  Meniggal <br />
                  {dataSummary.status === "success" ? (
                    <span className="text-2xl  font-bold currentColor">
                      <AnimatedNumber
                        value={dataSummary?.singlecountry?.deaths?.value}
                        formatValue={(n) => n.toFixed(0)}
                      />
                    </span>
                  ) : (
                    ""
                  )}
                </Link>
              </div>
              <p className="mt-2 text-xs text-gray-500 font-semibold pl-2">
                Data terbaru{" "}
                {dataSummary.status === "success"
                  ? dataSummary?.singlecountry?.lastUpdate
                  : ""}
              </p>
            </div>
          )}
        </div>
        <div className="col-span-12 xl:col-span-4 bg-blue-500 h-96 shadow-md border text-white p-2 h-fit-content">
          <h1>Data statistik</h1>
          <h1 className="text-sm font-semibold mt-3 border-b border-gray-300">
            Global data
          </h1>
          <div className="grid grid-cols-3 gap-2 h-52 transform rotate-180 mt-7">
            {dataValue.map((items, key) => {
              let target = 145501833;
              let data = items;
              var hasil = ((data / target) * 100).toFixed(1);
              return (
                <div className="col-span-1">
                  <div
                    className="bg-blue-300 relative bg-opacity-50"
                    style={{ height: `${hasil}%` }}
                  >
                    <div className="bg-white absolute -bottom-3 opacity-75 w-full h-2"></div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
