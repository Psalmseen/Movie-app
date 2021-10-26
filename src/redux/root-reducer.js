import { combineReducers } from "redux";

import collectionReducer from "./collection/collection.reducer";
import pageCountReducer from "./page-count/page-count.reducer";
const rootReducer = combineReducers({
  collection: collectionReducer,
  pageCount: pageCountReducer,
});
export default rootReducer;
