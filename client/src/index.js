import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";
import "./global.css";
import { Provider } from "react-redux";
import { createStore, applyMiddleware, compose } from "redux";
import reducers from "./reducers/index.js";
import thunk from "redux-thunk";
import { GoogleOAuthProvider } from '@react-oauth/google';

const store = createStore(reducers, compose(applyMiddleware(thunk)))

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <Provider store={store}>
        <React.StrictMode>
          <GoogleOAuthProvider clientId="753487592976-9f1s9qq83228vvdigoq2unnh7vlfhk3q.apps.googleusercontent.com">
                  <App />
              </GoogleOAuthProvider>
        </React.StrictMode>
    </Provider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
