import collectionActionTypes from "./collection.types";

const INITIAL_STATE = {
  results: [],
  data: [],
};

const collectionReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case collectionActionTypes.FETCH_COLLECTION_DATA:
      return {
        ...state,
        data: payload,
      };
    case collectionActionTypes.UPDATE_FAVOURITED_ITEMS:
      return {
        ...state,
        results: payload,
      };
    default:
      return state;
  }
};

export default collectionReducer;
