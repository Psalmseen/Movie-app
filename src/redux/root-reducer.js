import { combineReducers } from "redux";

import collectionReducer from "./collection/collection.reducer";
import favouriteReducer from "./favourite/favourite.reducers";
import pageCountReducer from "./page-count/page-count.reducer";
import userReducer  from "./user/user.reducer";

const rootReducer = combineReducers({
  collection: collectionReducer,
  pageCount: pageCountReducer,
  user: userReducer,
  favourite:favouriteReducer,
});
export default rootReducer;
