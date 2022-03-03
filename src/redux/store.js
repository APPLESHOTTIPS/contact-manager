import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { rootReducer } from "./root.reducer";
import logger from "redux-logger";

 export const store = createStore(rootReducer,composeWithDevTools(applyMiddleware(logger)))
