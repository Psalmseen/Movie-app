import { createSelector } from "reselect";

export const selectFavourite = (state) => state.favourite;

export const selectFavourites = createSelector(
  selectFavourite,
  (favourite) => favourite.favourites
);

export const selectFavouriteLength = createSelector(
  selectFavourites,
  favourites => favourites.length
)