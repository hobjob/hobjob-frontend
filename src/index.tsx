import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import ReactDOM from "react-dom";

import App from "./App";

import "./assets/sass/style.sass";

import store from "./redux/store";

ReactDOM.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>,
    document.getElementById("root")
);
