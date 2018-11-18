import React, { Component } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Home from "./components/Home";
import Restaurant from "./components/Restaurant";
import Checkout from "./components/Checkout";

import "./App.css";

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route path="/restaurant" component={Restaurant} />
          <Route path="/Checkout" component={Checkout} />
        </div>
      </Router>
    ); // la route créer sera localhost:3000/restaurant ou localhost:3000/restaurant
  }
}

export default App;
