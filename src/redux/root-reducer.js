import { combineReducers } from "redux";

import collectionReducer from "./collection/collection.reducer";
import pageCountReducer from "./page-count/page-count.reducer";
import userReducer  from "./user/user.reducer";

const rootReducer = combineReducers({
  collection: collectionReducer,
  pageCount: pageCountReducer,
  user: userReducer,
});
export default rootReducer;
