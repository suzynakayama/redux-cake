import { BUY_IC } from "./iceCreamTypes";

export const buyIC = (number = 1) => {
    return {
        type: BUY_IC,
        payload: number
    };
};
