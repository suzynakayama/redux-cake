import { BUY_COOKIE } from "./cookieTypes";

const initialState = {
    numOfCookies: 30
};

export const cookieReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_COOKIE:
            return {
                ...state,
                numOfCookies: state.numOfCookies - action.payload
            };
        default:
            return state;
    }
};
