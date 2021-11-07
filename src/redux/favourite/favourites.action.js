import { favouriteActionTypes } from "./favourites.type";

export const toggleItemFavourite = item => ({
    type: favouriteActionTypes.TOGGLE_ITEM_FAVOURITE,
    payload: item
})

export const updateFavouriteItems = (items) => ({
  type: favouriteActionTypes.UPDATE_FAVOURITE_ITEMS,
  payload: items,
});
