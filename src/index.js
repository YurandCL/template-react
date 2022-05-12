import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { configureStore } from "./redux/Store";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import "./data";
//import reportWebVitals from './reportWebVitals';
import Spinner from "./views/spinner/Spinner";

ReactDOM.render(
  <Provider store={configureStore()}>
    <Suspense fallback={<Spinner />}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </Suspense>
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
//reportWebVitals();
