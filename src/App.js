import React from "react";

import Titles from "./components/Titles";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./components/Weather";
import { BrowserRouter as Router, Route } from "react-router-dom";
//const API_KEY = "507146c78a8e53ceae6a194277c2fbec";

class App extends React.Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <div className="main">
            <div className="container-fluid">
              <div className="row">
                <Titles />
              </div>
              <div className="row">
                <Route path="/" component={Weather} />
              </div>
            </div>
          </div>
        </div>
      </Router>
    );
  }
}

export default App;
