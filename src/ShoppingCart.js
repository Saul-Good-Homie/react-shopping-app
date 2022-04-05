import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  constructor(props) {
    // calling super class constructor
    super(props);
    //initiatlization of the state
    this.state = {
      products: [
        { id: 1, productName: "iPhone", price: 1200, quantity: 0 },
        { id: 2, productName: "MacBook Pro", price: 2200, quantity: 0 },
        { id: 3, productName: "MacBook Air", price: 2100, quantity: 0 },
        { id: 4, productName: "iPad", price: 600, quantity: 0 },
        { id: 5, productName: "iPod", price: 400, quantity: 0 },
        { id: 6, productName: "AirPods", price: 200, quantity: 0 },
      ],
    };
  }

  render() {
    return (
      <div className="container-fluid">
        <h4>Shopping Cart</h4>
        <div className="row">
          {this.state.products.map((prod) => {
            return (
              <Product
                key={prod.id}
                product={prod}
                onIncrement={this.handleIncrement}
                onDecrement={this.handleDecrement}
                onDelete={this.handleDelete}
              >
                <button className="btn btn-primary">Buy Now</button>
              </Product>
            );
          })}
        </div>
      </div>
    );
  }

  //executes after constructor and render methods
  componentDidMount() {
    //fetch data from data source
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("component did update - shopping cart");
    //console.log(prevProps, prevState, this.props, this.state);
    //if (prevProps != this.props){
    //make http call
    //}
  }

  componentWillUnmount() {
    // console.log("component will unmount - shopping cart");
  }

  componentDidCatch(error, info) {
    // console.log(error, info);
    localStorage.lastError = `${error} \n ${JSON.stringify(info)}`;
  }

  handleIncrement = (product, max) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    if (allProducts[index].quantity < max) {
      allProducts[index].quantity++;
      this.setState({
        products: allProducts,
      });
    }
  };

  handleDecrement = (product, minValue) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);
    if (allProducts[index].quantity > minValue) {
      allProducts[index].quantity--;
      this.setState({
        products: allProducts,
      });
    }
  };

  handleDelete = (product) => {
    let allProducts = [...this.state.products];
    let index = allProducts.indexOf(product);

    if (window.confirm("Are you sure you want to delete?")) {
      allProducts.splice(index, 1);
      this.setState({
        products: allProducts,
      });
    }
  };
}
