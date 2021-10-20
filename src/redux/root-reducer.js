import { combineReducers } from "redux";

import collectionReducer from "./collection/collection.reducer";
export default combineReducers({
  collection: collectionReducer,
});
