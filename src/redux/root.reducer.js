import { combineReducers } from "redux";
import * as authReducer from './auth/auth.reducer';



export const rootReducer = combineReducers({
    [authReducer.authFeatureKey] : authReducer.reducer

});