import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "./style.css";
import ReactPaginate from "react-paginate";
import moment from "moment";
import { fetchDaily, setOffset } from "../../features/Daily/action";
import DatePicker from "react-datepicker";

export default function DailyByDate() {
  let dispatch = useDispatch();
  let dataDailyByDate = useSelector((state) => state.daily);

  //   state value date
  const [valueDate, setValueDate] = useState(new Date());
  const [filterDate, setFilterDate] = useState(new Date());

  //   handle change date input
  const handleChangeDate = (e) => {
    let date = moment(e).format("MM-DD-YYYY");
    setValueDate(e);
    setFilterDate(date);
  };

  React.useEffect(() => {
    // dispatch from action
    dispatch(fetchDaily(filterDate));
  }, [filterDate, dataDailyByDate.offset]);
  return (
    <div>
      <h1 className="text-2xl xl:text-4xl font-semibold text-gray-600">
        COVID 19
      </h1>

      <div className="grid grid-cols-12 gap-10 mt-8">
        <div className="col-span-12 bg-white shadow-md border p-2">
          <div className="flex w-full items-center justify-between">
            <h1 className="py-4 text-xl text-gray-600 font-semibold whitespace-nowrap mr-5">
              Detail harian berdasarkan tanggal
            </h1>
            <div className="relative right-8">
              <DatePicker
                selected={valueDate}
                onChange={(e) => handleChangeDate(e)}
                className="border focus:outline-none cursor-pointer px-2 py-1 transform-none rounded-md"
              />
            </div>
          </div>

          <div className="flex flex-col mt-4">
            <div className="-my-2 overflow-x-auto">
              <div className="py-2 align-middle inline-block min-w-full">
                <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-100">
                      <tr>
                        <th
                          scope="col"
                          className="px-3 lg:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          No
                        </th>
                        <th
                          scope="col"
                          className="px-3 lg:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Negara
                        </th>
                        <th
                          scope="col"
                          className="px-3 lg:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Provinsi
                        </th>
                        <th
                          scope="col"
                          className="px-3 lg:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Terkonfirmasi
                        </th>
                        <th
                          scope="col"
                          className="px-3 lg:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Sembuh
                        </th>
                        <th
                          scope="col"
                          className="px-3 lg:px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                        >
                          Meniggal
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {dataDailyByDate.status === "success" ? (
                        dataDailyByDate.data.map((items, key) => {
                          return (
                            <tr className="hover:bg-gray-50 duration-100 cursor-pointer">
                              <td className="px-3 lg:px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                                {key + 1}
                              </td>
                              <td className="px-3 lg:px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                                {items.countryRegion}
                              </td>
                              <td className="px-3 lg:px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                                {items.provinceState === ""
                                  ? "Tidak ada provinsi"
                                  : items.provinceState}
                              </td>
                              <td className="px-3 lg:px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                                {items.confirmed}
                              </td>
                              <td className="px-3 lg:px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                                {items.recovered}
                              </td>
                              <td className="px-3 lg:px-4 py-4 whitespace-nowrap text-sm text-gray-500">
                                {items.deaths}
                              </td>
                            </tr>
                          );
                        })
                      ) : (
                        <tr>
                          <td colSpan="5" style={{ textAlignLast: "center" }}>
                            data tidak ditemukan
                          </td>
                        </tr>
                      )}
                    </tbody>
                  </table>
                </div>
                <div className="w-full flex items-center">
                  <ReactPaginate
                    previousLabel={"prev"}
                    nextLabel={"next"}
                    breakLabel={"..."}
                    breakClassName={"break-me"}
                    pageCount={dataDailyByDate.pages}
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
      </div>
    </div>
  );
}
