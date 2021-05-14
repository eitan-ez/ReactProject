import { authReducer } from './AuthState';
import { combineReducers, createStore } from "redux";

const rootReducers = combineReducers({authreducer: authReducer});
const store = createStore(rootReducers);

export default store;