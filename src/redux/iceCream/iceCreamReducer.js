import { BUY_IC } from "./iceCreamTypes";

const initialState = {
    numOfIC: 20
};

const iCReducer = (state = initialState, action) => {
    switch (action.type) {
        case BUY_IC:
            return {
                ...state,
                numOfIC: state.numOfIC - action.payload
            };
        default:
            return state;
    }
};

export default iCReducer;
