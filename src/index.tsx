import React from "react";
import {BrowserRouter} from "react-router-dom";
import {Provider} from "react-redux";
import ReactDOM from "react-dom/client";

import App from "./App";

import "./assets/sass/style.sass";

import store from "./redux/store";

const root = ReactDOM.createRoot(
    document.getElementById("root") as HTMLElement
);

root.render(
    <BrowserRouter>
        <Provider store={store}>
            <App />
        </Provider>
    </BrowserRouter>
);