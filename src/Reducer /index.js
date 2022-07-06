import { combineReducers } from "redux";
import CounterReducer from "./Counter";
import loggedReducer from "./Islogged";
//import {combineReducers} from 'redux'; 

const allReducer = combineReducers({
    counter: CounterReducer,
    islogged: loggedReducer
})
 

export default allReducer;