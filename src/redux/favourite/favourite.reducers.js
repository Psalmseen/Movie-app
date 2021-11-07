import { toggleFavouriteItem } from "../../utils/favourite/favourite-utils";
import { favouriteActionTypes } from "./favourites.type";

const INITIAL_STATE = {
  favourites: [],
};

const favouriteReducer = (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case favouriteActionTypes.TOGGLE_ITEM_FAVOURITE:
      return {
        ...state,
        favourites: toggleFavouriteItem(state.favourites, payload),
      };
    case favouriteActionTypes.UPDATE_FAVOURITE_ITEMS:
      return {
        ...state,
        favourites: payload,
      };
    default:
      return state;
  }
};

export default favouriteReducer;
