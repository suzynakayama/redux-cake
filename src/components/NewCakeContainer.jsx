import React, { useState } from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux/index";

function NewCakeContainer(props) {
    const [number, setNumber] = useState(1);

    const handleChange = evt => {
        setNumber(evt.target.value);
    };

    return (
        <div>
            <h2>Payload - Number of cakes: {props.numOfCakes}</h2>
            <input type="text" value={number} onChange={handleChange} />
            <button onClick={() => props.buyCake(number)}>
                Buy {number} Cakes
            </button>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        numOfCakes: state.cake.numOfCakes
    };
};

const mapDispatchToProps = dispatch => {
    return {
        buyCake: number => dispatch(buyCake(number))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
