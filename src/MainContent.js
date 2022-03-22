import React, { Component } from "react";

export default class App extends Component {
  state = { pageTitle: "Customers", customersCount: 5 };

  render() {
    return (
      <div>
        <h3 className="border-bottom m-1 p-1">
          {this.state.pageTitle}

          <span className="badge bg-secondary m-2">
            {this.state.customersCount}
          </span>
          <button className="btn btn-info" onClick={this.onRefreshClick}>
            Refresh
          </button>
        </h3>
      </div>
    );
  }
  onRefreshClick() {
    console.log("refresh clicked");
  }
}
