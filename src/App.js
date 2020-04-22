import React from "react";
import "./App.css";
import CakeContainer from "./components/CakeContainer";
import NewCakeContainer from "./components/NewCakeContainer";
import { Provider } from "react-redux";
import store from "./redux/store";
import HooksCakeContainer from "./components/HooksCakeContainer";
import IceCreamContainer from "./components/IceCreamContainer";
import HooksIceCreamContainer from "./components/HooksIceCreamContainer";
import CookieContainer from "./components/CookieContainer";
import HooksCookieContainer from "./components/HooksCookieContainer";
import NewIceCreamContainer from "./components/NewIceCreamContainer";
import NewCookieContainer from "./components/NewCookieContainer";
import Footer from "react-myfooter";

function App() {
	return (
		<Provider store={store}>
			<div className="App">
				<CakeContainer />
				<HooksCakeContainer />
				<IceCreamContainer />
				<HooksIceCreamContainer />
				<CookieContainer />
				<HooksCookieContainer />
				<NewCakeContainer />
				<NewIceCreamContainer />
				<NewCookieContainer />
				<Footer github="https://www.suzynakayama.com" name="Suzy Nakayama" />
			</div>
		</Provider>
	);
}

export default App;
