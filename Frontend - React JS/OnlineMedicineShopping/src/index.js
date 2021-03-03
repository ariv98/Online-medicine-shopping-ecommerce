import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";
import "./CustomCSS/paymentcss.css";
import "./CustomCSS/headnfoot.css";
import cartReducer from "./Component/Cart/Reducer/cartReducer";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import ReduxThunk from "redux-thunk";

const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(cartReducer)}>
    <App />
  </Provider>,
  document.getElementById("root")
);

reportWebVitals();
