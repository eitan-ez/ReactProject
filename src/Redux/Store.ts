import { authReducer } from './AuthState';
import { combineReducers, createStore } from "redux";

const rootReducers = combineReducers({AuthState: authReducer});
const store = createStore(rootReducers);

export default store;