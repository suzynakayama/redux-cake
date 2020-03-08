import React, { useState } from "react";
import { buyCookie } from "../redux";
import { connect } from "react-redux";

function NewCookieContainer(props) {
    const [number, setNumber] = useState(1);
    const handleChange = evt => {
        setNumber(evt.target.value);
    };
    return (
        <div>
            <h2>Number of Cookies: {props.numOfCookies}</h2>
            <input type="text" value={number} onChange={handleChange} />
            <button onClick={() => props.buyCookie(number)}>Buy Cookie</button>
        </div>
    );
}

const mapStateToProps = state => {
    return {
        numOfCookies: state.cookie.numOfCookies
    };
};

const mapDispatchToProps = dispatch => {
    return {
        buyCookie: number => dispatch(buyCookie(number))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(NewCookieContainer);
