import collectionActionTypes from "./collection.types";

export const fetchCollectionData = (results) => ({
  type: collectionActionTypes.FETCH_COLLECTION_DATA,
  payload: results,
});

export const updateFavouritedItems = results => ({
  type: collectionActionTypes.UPDATE_FAVOURITED_ITEMS,
  payload: results
})

export const UpdateFavourite = (items) => ({
  type: collectionActionTypes.UPDATE_FAVOURITE,
  payload: items,
});
