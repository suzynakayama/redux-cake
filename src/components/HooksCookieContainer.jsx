import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { buyCookie } from "../redux";

export default function HooksCookieContainer() {
    const numOfCookies = useSelector(state => state.cookie.numOfCookies);

    const dispatch = useDispatch();
    return (
        <div>
            <h2>Hooks - Number of Cookies: {numOfCookies}</h2>
            <button onClick={() => dispatch(buyCookie())}>Buy Cookie</button>
        </div>
    );
}
