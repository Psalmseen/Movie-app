import { createSelector } from "reselect";

export const selectFavourite = (state) => state.favourite;

export const selectFavourites = createSelector(
  selectFavourite,
  (favourite) => favourite.favourites
);
