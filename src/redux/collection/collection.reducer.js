import collectionActionTypes from "./collection.types"

const INITIAL_STATE = {
    results:[]
}

const collectionReducer = (state = INITIAL_STATE, action ) => {
    switch (action.type) {
        case collectionActionTypes.FETCH_COLLECTION_DATA:
            return {
                ...state,
                results: action.payload
            }
        default:
            return state
    }
}

export default collectionReducer