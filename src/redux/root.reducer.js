import { combineReducers } from "redux";
// import * as authReducer from './auth/auth.reducer';
import  * as userListReducer from './UserListThunk/userList.reducer';

export const rootReducer = combineReducers({
    [userListReducer.userListFeatureKey] : userListReducer.reducer

});