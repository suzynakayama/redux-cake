import { combineReducers } from "redux";
import cakeReducer from "./cake/cakeReducer";
import iCReducer from "./iceCream/iceCreamReducer";
import { cookieReducer } from "./cookie/cookieReducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iCReducer,
    cookie: cookieReducer
});

export default rootReducer;
