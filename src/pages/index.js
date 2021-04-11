import React, { useState } from "react";
import Header from "../components/header/Index";
import Sidebar from "../components/sidebar/index";
import DetailRecorvered from "../components/content/DetailRecorvered";
import DetailDeaths from "../components/content/DetailDeaths";
import DetailConfrimed from "../components/content/DetailConfrimed";
import DailyByDate from "../components/content/DailyByDate";
import HomeGlobal from "../components/content/index";
import { Route, Switch } from "react-router-dom";

export default function Index() {
  const [showSidebar, setShowSidebar] = useState(false);
  return (
    <div>
      <Header
        onClick={() =>
          showSidebar === false ? setShowSidebar(true) : setShowSidebar(false)
        }
      />
      <div className="flex items-start">
        <div
          className={`${
            showSidebar === true
              ? "absolute left-0 top-0 bottom-0 w-2/6 bg-white z-20"
              : "hidden"
          } md:block md:w-1/5 border h-screen pl-3 pt-16`}
        >
          <Sidebar />
        </div>
        <div className="w-full md:w-4/5 border h-screen overflow-scroll px-5 pt-16 bg-gray-100 bg-opacity-40">
          <Switch>
            <Route exact path="/" component={HomeGlobal} />
          </Switch>
          <Switch>
            <Route path="/detailrecorvered" component={DetailRecorvered} />
          </Switch>
          <Switch>
            <Route path="/detaildeaths" component={DetailDeaths} />
          </Switch>
          <Switch>
            <Route path="/detailconfirmed" component={DetailConfrimed} />
          </Switch>
          <Switch>
            <Route path="/dailybydate" component={DailyByDate} />
          </Switch>
        </div>
      </div>
    </div>
  );
}
