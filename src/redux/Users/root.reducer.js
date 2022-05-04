import { combineReducers } from "redux";
import * as useReducer from './redux/Users/user.reducer';
export const rootReducer = combineReducers({
    [userReducer.userFeatureKey] :useReducer.reducer;
}); 