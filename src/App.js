import React, { Component } from "react";
import NavBar from "./NavBar";
import Login from "./Login";
import Dashboard from "./Dashboard";
import CustomerList from "./CustomerList";
import ShoppingCart from "./ShoppingCart";
import { Routes, BrowserRouter as Router } from "react-router-dom";
import { Route } from "react-router";
import NoMatchPage from "./NoMatchPage";

export default class App extends Component {
  render() {
    return (
      <Router>
        <NavBar />
        <div className="container-fluid">
          <Routes>
            <Route path="/" exact element={<Login />} />
            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="/Customers" exact element={<CustomerList />} />
            <Route path="/cart" exact element={<ShoppingCart />} />
            <Route path="*" element={<NoMatchPage />} />
          </Routes>
        </div>
      </Router>
    );
  }
}
