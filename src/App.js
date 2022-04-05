import React, { Component } from "react";
import NavBar from "./NavBar";
import Login from "./Login";
// import CustomerList from "./CustomerList";
// import ShoppingCart from "./ShoppingCart";

export default class App extends Component {
  render() {
    return (
      <React.Fragment>
        <NavBar />
        <Login />
      </React.Fragment>
    );
  }
}
