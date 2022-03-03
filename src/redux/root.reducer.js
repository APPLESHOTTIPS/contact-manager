import { combineReducers } from "redux";
import * as messageReducer  from "./wishMessage/wishMessage.reducer"

export const rootReducer = combineReducers({
    [messageReducer.messageFeatureKey]:messageReducer.reducer
});