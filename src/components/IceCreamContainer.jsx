import React from "react";
import { connect } from "react-redux";
import { buyIC } from "../redux";

function IceCreamContainer(props) {
    return (
        <div>
            <h2>Number of Ice Creams: {props.numOfIC}</h2>
            <button onClick={props.buyIC}>Buy I/C</button>
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
        buyIC: () => dispatch(buyIC())
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
