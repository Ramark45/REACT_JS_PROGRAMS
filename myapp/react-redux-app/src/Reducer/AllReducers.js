import counterReducer from "./counterReducer";
import signInReducer from "./signInReducer";
import {combineReducers} from 'redux';
const AllReducers = combineReducers(
    {
        counter:counterReducer,
        signin:signInReducer
    }
)
export default AllReducers;