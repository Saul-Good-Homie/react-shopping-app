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
        photo: "https://picsum.photos/id/1010/50",
      },
      {
        id: 2,
        name: "Tom",
        phone: "",
        address: { city: "Eugene" },
        photo: "https://picsum.photos/id/1020/50",
      },
      {
        id: 3,
        name: "Hank",
        phone: "",
        address: { city: "Fargo" },
        photo: "https://picsum.photos/id/1031/50",
      },
      {
        id: 4,
        name: "Deron",
        phone: "123-4567",
        address: { city: "Las Vegas" },
        photo: "https://picsum.photos/id/1040/50",
      },
      {
        id: 5,
        name: "Ruth",
        phone: "123-4567",
        address: { city: "Houston" },
        photo: "https://picsum.photos/id/1050/50",
      },
    ],
  };

  render() {
    return (
      <div>
        <h3 className="m-1 p-1">
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
          <tbody>{this.getCustomerRow()}</tbody>
        </table>
      </div>
    );
  }
  onRefreshClick = () => {
    this.setState({ customersCount: 7 });
  };

  getPhoneToRender = (phone) => {
    if (phone) return phone;
    else {
      return <div className="bg-warning p-2 text-center">No Phone</div>;
    }
  };

  getCustomerRow = () => {
    {
      return this.state.customers.map((cust, index) => {
        return (
          <tr key={cust.id}>
            <td>{cust.id}</td>
            <td>
              <img src={cust.photo} alt="customer" />
              <div>
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={() => {
                    this.onChangePicChange(cust, index);
                  }}
                >
                  Change Photo
                </button>
              </div>
            </td>
            <td>{cust.name}</td>
            <td>{this.getPhoneToRender(cust.phone)}</td>
            <td>{cust.address.city}</td>
          </tr>
        );
      });
    }
  };

  onChangePicChange = (cust, index) => {
    let custArr = this.state.customers;
    custArr[index].photo = "https://picsum.photos/id/69/50";
    this.setState({ customers: custArr });
  };
}
