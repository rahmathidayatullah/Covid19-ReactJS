// (1) import module dari `redux`
import { combineReducers, createStore, applyMiddleware, compose } from "redux";

import summaryReducer from "../features/SummaryAll/reducer";
import summaryConfirmedReducer from "../features/SummaryConfirmed/reducer";
import summaryDeathsReducer from "../features/SummaryDeaths/reducer";
import summaryRecorveredReducer from "../features/SummaryRecorvered/reducer";
import dailyReducer from "../features/Daily/reducer";

// (2) import redux-thunk middleware
import thunk from "redux-thunk";

// (3) buat composer enhancer untuk menghubungkan dengan Chrome DevTools Redux
const composerEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// (4) gabung reducer, untuk sementara kosong, karena kita belum membuat reducer
const rootReducers = combineReducers({
  summary: summaryReducer,
  confirmed: summaryConfirmedReducer,
  deaths: summaryDeathsReducer,
  recorvered: summaryRecorveredReducer,
  daily: dailyReducer,
});

// (5) buat store, dan gunakan composerEnhancer + middleware thunk
const store = createStore(
  rootReducers,
  composerEnhancer(applyMiddleware(thunk))
);

// (6) export store
export default store;
