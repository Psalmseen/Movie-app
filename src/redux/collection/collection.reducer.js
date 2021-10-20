const INITIAL_STATE = {
    results:[]
}

const collectionReducer = (state = INITIAL_STATE, { type, payload } ) => {
    switch (type) {
        case 'FETCH_COLLECTION_ARRAY':
            return {
                ...state,
                results:payload
            }
        default:
            return state
    }
}

export default collectionReducer