import React, { Component } from "react";
import Product from "./Product";

export default class ShoppingCart extends Component {
  constructor(props) {
    // calling super class constructor
    super(props);
    //initiatlization of the state
    this.state = {
      products: [],
    };
  }

  render() {
    return (
      <div>
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
  componentDidMount = async () => {
    //fetch data from data source
    let response = await fetch("http://localhost:5000/products", {
      method: "GET",
    });
    let prods = await response.json();
    this.setState({
      products: prods,
    });
  };

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
