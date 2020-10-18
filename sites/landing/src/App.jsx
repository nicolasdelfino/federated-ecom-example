import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "team-shell/BaseStyles";
import "./styles/index.css";

import Standalone from "./Standalone";
import store from "team-shell/Store";

const LandingStandalone = () => (
  <Provider store={store}>
    <Standalone  />
  </Provider>
);

ReactDOM.render(<LandingStandalone />, document.getElementById("landing-app"));



