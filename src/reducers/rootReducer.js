import apisReducer from './apisReducer';
import { combineReducers } from 'redux';


const rootReducer = combineReducers({
    apis: apisReducer,
});

export default rootReducer;