import React from "react";
import ReactDOM from "react-dom/client";
import { makeServer } from "./server";
import "./index.css";
import App from "./App";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";
import { store } from "./app/store";

const root = ReactDOM.createRoot(document.getElementById("root"));
// Call make Server
makeServer();
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>
);
