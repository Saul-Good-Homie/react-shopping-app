import React, { Component } from "react";

export default class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      product: this.props.product,
    };
  }

  render() {
    return (
      <div className="col-lg-6">
        <div className="card m-2">
          <div className="card-body">
            <div className="text-mtued">#{this.state.product.id}</div>
            <span
              className="pull-right hand-icon"
              onClick={() => {
                this.props.onDelete(this.state.product);
              }}
            >
              <i className="fa fa-times"></i>
            </span>
            <h5 className="pt-2 border-top">
              {this.state.product.productName}
            </h5>
            <div>${this.state.product.price}</div>
          </div>
          <div className="card-footer">
            {/* start float left */}
            <div className="float-left">
              <span className="badge bg-primary">
                {this.state.product.quantity}
              </span>
              <div className="btn-group">
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.props.onIncrement(this.state.product, 10);
                  }}
                >
                  +
                </button>
                <button
                  className="btn btn-outline-success"
                  onClick={() => {
                    this.props.onDecrement(this.state.product, 0);
                  }}
                >
                  -
                </button>
              </div>
            </div>
            <br></br>
            {/* start floart right */}
            <div className="float-right">{this.props.children}</div>
          </div>
        </div>
      </div>
    );
  }

  componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {
    //console.log("component will unmount - product");
  }
}
