import { createSelector } from "reselect";

const selectCollection = (state) => state.collection;

export const selectCollectionResult = createSelector(
  selectCollection,
  (collection) => collection.results
);

export const selectCollectionData = createSelector(
  selectCollection,
  (collection) => collection.data
);
