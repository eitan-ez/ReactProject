import { authReducer } from './AuthState';
import { combineReducers, createStore } from "redux";

const rootReducers = combineReducers({authReducer: authReducer});
const store = createStore(rootReducers);

export default store;