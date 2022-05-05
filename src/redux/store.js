import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./root.reducer";
import logger from "redux-logger";
import laptopReducer from "../Reducers/LapTopRedecers";

 export const store = createStore(laptopReducer,rootReducer,composeWithDevTools(applyMiddleware(logger)))
