import {createStore} from "redux";
import counterReducer from "./reducers/reducerCounter";


const store = createStore(counterReducer)

export default store
