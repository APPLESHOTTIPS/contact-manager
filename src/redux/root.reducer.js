import { combineReducers } from "redux";
import * as messageReducer  from "./wishMessage/wishMessage.reducer";
import * as productReducer from './productItem/Product.reducer';

export const rootReducer = combineReducers({
    [messageReducer.messageFeatureKey]:messageReducer.reducer,
    [productReducer.productItemFeatureKey]:productReducer.reducer
});