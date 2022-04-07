import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      message: "",
    };
  }
  render() {
    return (
      <div>
        <h4 className="m-1 p-2 border-bottom">Login</h4>
        <div className="form-group form-row">
          {/* email starts */}
          <label className="col-lg-4">Email</label>
          <input
            type="text"
            className="form-control"
            value={this.state.email}
            onChange={(event) => {
              this.setState({ email: event.target.value });
            }}
          ></input>
          {/* Email ends */}
          {/* password starts */}
          <label className="col-lg-4">Password</label>
          <input
            type="password"
            className="form-control"
            value={this.state.password}
            onChange={(event) => {
              this.setState({ password: event.target.value });
            }}
          ></input>
          {/* password ends */}
          <div className="text-right">
            <button className="btn btn-primary m-1" onClick={this.onLoginClick}>
              Login
            </button>
            {this.state.message}
          </div>
        </div>
      </div>
    );
  }
  //end of render method

  onLoginClick = async () => {
    let response = await fetch(
      `http://localhost:5000/users?email=${this.state.email}&password=${this.state.password}`,
      { method: "GET" }
    );

    let body = await response.json();

    if (body.length > 0) {
      console.log(body);
      //show success message
      this.setState({
        message: <span className="text-success">Login Successful</span>,
      });
    } else {
      //show failure message
      this.setState({
        message: (
          <span className="text-danger">Login Failed, Please Try Again</span>
        ),
      });
    }
    console.log(this.state);
  };
}
