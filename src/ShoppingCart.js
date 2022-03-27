import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  state = {
    products: [
      { id: 1, productName: "iPhone", price: 1200, quantity: 0 },
      { id: 2, productName: "MacBook Pro", price: 2200, quantity: 0 },
      { id: 3, productName: "MacBook Air", price: 2100, quantity: 0 },
      { id: 4, productName: "iPad", price: 600, quantity: 0 },
      { id: 5, productName: "iPod", price: 400, quantity: 0 },
      { id: 6, productName: "AirPods", price: 200, quantity: 0 },
    ],
  };

  render() {
    return (
      <div>
        <h4>Shopping Cart</h4>
        <div>
          {this.state.products.map(() => {
            return <Product />;
          })}
        </div>
      </div>
    );
  }
}