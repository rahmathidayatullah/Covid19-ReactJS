import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchSummaryDeaths,
  setOffset,
} from "../../features/SummaryDeaths/action";
import "./style.css";
import ReactPaginate from "react-paginate";
import { ClipLoader } from "react-spinners";
import moment from "moment";
export default function DetailConfrimed() {
  let dispatch = useDispatch();
  //   DD = Detail Deaths
  let dataSummaryDD = useSelector((state) => state.deaths);

  React.useEffect(() => {
    // dispatch from action
    dispatch(fetchSummaryDeaths());
  }, [dispatch, dataSummaryDD.offset]);
  return (
    <div>
      <h1 className="text-2xl xl:text-4xl font-semibold text-gray-600">
        COVID 19
      </h1>
      <div className="grid grid-cols-12 gap-10 mt-8">
        {/* content left */}
        <div className="col-span-12 xl:col-span-8 bg-white shadow-md border p-2">
          <h1 className="py-4 text-xl text-gray-600 font-semibold whitespace-nowrap mr-5">
            Detail Meniggal 5 teratas
          </h1>

          <div className="flex flex-col mt-4">
            <div className="-my-2 overflow-x-auto">
              <div className="py-2 align-middle inline-block min-w-full">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th
                          scope="col"
                          className="px-3 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          No
                        </th>
                        <th
                          scope="col"
                          className="px-3 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Negara
                        </th>
                        <th
                          scope="col"
                          className="px-3 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Meniggal
                        </th>
                        <th
                          scope="col"
                          className="px-3 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Sembuh
                        </th>
                        <th
                          scope="col"
                          className="px-3 lg:px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Terkonfirmasi
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {dataSummaryDD.status === "success" ? (
                        dataSummaryDD.dataForPagination.map((pd, key) => {
                          return (
                            <tr className="hover:bg-gray-50 duration-100 cursor-pointer">
                              <td className="px-3 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {key + 1}
                              </td>
                              <td className="px-3 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {pd.countryRegion}
                              </td>
                              <td className="px-3 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {pd.deaths}
                              </td>
                              <td className="px-3 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {pd.recovered}
                              </td>
                              <td className="px-3 lg:px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                                {pd.confirmed}
                              </td>
                            </tr>
                          );
                        })
                      ) : (
                        <tr>
                          <td colSpan="5" style={{ textAlignLast: "center" }}>
                            <ClipLoader />
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
                <p className="mt-2 text-xs text-gray-500 font-semibold pl-2">
                  Data terbaru{" "}
                  {dataSummaryDD.status === "success"
                    ? moment(dataSummaryDD.dataAll.lastUpdate).format(
                        "DD-MM-YYYY"
                      )
                    : ""}
                </p>
                <div className="w-full flex items-center">
                  <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={dataSummaryDD.pages}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={(page) =>
                      dispatch(setOffset(page.selected + 1))
                    }
                    containerClassName={"pagination"}
                    subContainerClassName={"pages pagination"}
                    activeClassName={"active"}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-12 xl:col-span-4 bg-blue-500 shadow-md border text-white p-2">
          <h1>Data statistik</h1>
          <p className="text-3xl font-bold">10 Teratas</p>
          <h1 className="text-sm font-semibold mt-3 border-b border-gray-300">
            Global data
          </h1>
          <div className="grid grid-cols-10 gap-2 h-52 rotate-180 transform">
            {dataSummaryDD.dataAll.slice(0, 10).map((items) => {
              let target = 221794;
              let data = items.deaths;
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
          <div className="flex justify-between w-full">
            <p className="mt-5 font-semibold text-base">Detail statistik</p>
            <p className="mt-5 font-semibold text-base">Jiwa</p>
          </div>
          <ul className="mt-3">
            {dataSummaryDD.dataAll.slice(0, 10).map((items) => {
              return (
                <li className="flex w-full justify-between border-b border-white pb-1 border-opacity-20 text-xs">
                  <p>{items.countryRegion}</p>
                  <p>{items.deaths}</p>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
}
