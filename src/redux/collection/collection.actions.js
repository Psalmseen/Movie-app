import collectionActionTypes from './collection.types'

export const fetchCollectionData = (results) => ({
    type: collectionActionTypes.FETCH_COLLECTION_DATA,
    payload: results
})