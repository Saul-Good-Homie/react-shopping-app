import React, { Component } from "react";

export default class App extends Component {
  state = {
    pageTitle: "Customers",
    customersCount: 5,
    customers: [
      {
        id: 1,
        name: "Scott",
        phone: "123-4567",
        address: { city: "Anchorage" },
      },
      { id: 2, name: "Tom", phone: "123-4567", address: { city: "Eugene" } },
      { id: 3, name: "Hank", phone: "123-4567", address: { city: "Fargo" } },
      {
        id: 4,
        name: "Deron",
        phone: "123-4567",
        address: { city: "Las Vegas" },
      },
      { id: 5, name: "Ruth", phone: "123-4567", address: { city: "Houston" } },
    ],
  };

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
        <table className="table">
          <thead>
            <tr>
              <th>#</th>
              <th>Customer Name</th>
              <th>Phone</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {this.state.customers.map((cust) => {
              return (
                <tr key={cust.id}>
                  <td>{cust.id}</td>
                  <td>{cust.name}</td>
                  <td>{cust.phone}</td>
                  <td>{cust.address.city}</td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    );
  }
  onRefreshClick = () => {
    this.setState({ customersCount: 7 });
  };
}
