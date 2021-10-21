import { combineReducers } from "redux";

import collectionReducer from "./collection/collection.reducer";
const rootReducer = combineReducers({
  collection: collectionReducer,
});
export default rootReducer;
