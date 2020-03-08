import React, { useState } from "react";
import { buyIC } from "../redux";
import { connect } from "react-redux";

function NewIceCreamContainer(props) {
    const [number, setNumber] = useState(1);

    const handleChange = evt => {
        setNumber(evt.target.value);
    };

    return (
        <div>
            <h2>Number of Ice Creams: {props.numOfIC}</h2>
            <input type="text" value={number} onChange={handleChange} />
            <button onClick={() => props.buyIC(number)}>Buy I/C</button>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        numOfIC: state.iceCream.numOfIC
    };
};

const mapDispatchToProps = dispatch => {
    return {
        buyIC: number => dispatch(buyIC(number))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NewIceCreamContainer);
