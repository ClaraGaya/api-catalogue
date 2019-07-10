import * as types from './types';


// Thunk Action creator 
export const getApis = () => {
    return dispatch => {
        dispatch(getApisRequest());
        fetch("./data/apisData.json", {
            headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
            }  
        })
        .then(res =>  res.json() )
        .then(json => { dispatch(getApisSuccess(json)); })
        .catch(err => { dispatch(getApisError(err)); });
    }
}

// Actions
export const getApisRequest = () =>  ({
    type: types.FETCH_APIS_REQUEST,
    loading: true
})

export const getApisSuccess = (apis) => ({
    type: types.FETCH_APIS_SUCCESS,
    payload: apis
})

export const getApisError = (err) => ({
    type: types.FETCH_APIS_ERROR,
    error: err
})

