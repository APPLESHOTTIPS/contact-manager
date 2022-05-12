import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./root.reducer";
import logger from "redux-logger";
import thunk from 'redux-thunk';
// import laptopReducer from "../Reducers/LapTopRedecers";



let middleWare =  [thunk,logger]

 export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(...middleWare)))
