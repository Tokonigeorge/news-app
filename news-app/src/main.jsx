import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { DataContext } from "./context/dataContext";
import { initialState, reducer } from "./context/reducer";

ReactDOM.render(
  <React.StrictMode>
    <DataContext initialState={initialState} reducer={reducer}>
      <App />
    </DataContext>
  </React.StrictMode>,
  document.getElementById("root")
);
