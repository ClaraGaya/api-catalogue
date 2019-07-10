

import * as types from '../actions/types';

const initialState = {
    isFetching: false,
    data: [],
    error: null,
}

const apisReducer = (state = initialState, action) => {
    switch(action.type) {
        case types.FETCH_APIS_REQUEST:
            return Object.assign({}, state, {
                isFetching: true,
                error: null
            })
        case types.FETCH_APIS_SUCCESS:
            return Object.assign({}, state, {
                isFetching: true,
                data: action.payload,
                error: null
            })
        case types.FETCH_APIS_ERROR:
            return Object.assign({}, state, {
                isFetching: false,
                error: action.payload
            })
        default:
            return state;
    }
}

export default apisReducer;