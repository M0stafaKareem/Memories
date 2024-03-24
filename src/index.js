import { BrowserRouter } from "react-router-dom";
import { FavouriteProvider } from "./store/favourite-context";
import ReactDOM from "react-dom";
import React from "react";
import App from "./App";
import "./index.css";

ReactDOM.render(
  <FavouriteProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FavouriteProvider>,
  document.getElementById("root")
);
