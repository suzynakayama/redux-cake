import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyIC } from "../redux";

function HooksIceCreamContainer() {
    const numOfIC = useSelector(state => state.iceCream.numOfIC);
    const dispatch = useDispatch();
    return (
        <div>
            <h2>Hooks - Number of Ice Creams: {numOfIC}</h2>
            <button onClick={() => dispatch(buyIC())}>Buy I/C</button>
        </div>
    );
}

export default HooksIceCreamContainer;
