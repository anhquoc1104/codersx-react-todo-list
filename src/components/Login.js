//const { Component } = require("react");

import React, {Component} from 'react';
//import '../../public/assets/bootstrap-4.1.3-dist/css/bootstrap.min.css';
//import '../../public/assets/jquery-3.4.1.min';
//import '../../public/assets/bootstrap-4.1.3-dist/js/bootstrap.min';
class Login extends Component{
  render() {
    return (
      <div className="container d-flex flex-column align-items-center">
      <div className="row w-100">
        <div className="col d-flex justify-content-between">
          <a href="#">go back</a>
          <button className="btn btn-success">Sign up</button>
        </div>
      </div>
      <div className="row w-50">
        <div className="col">
          <form method="get" action>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input id="email" className="form-control" type="email" name value={this.props.email} />
            </div>
            <div className="form-group">
              <label htmlFor="password">password</label>
              <input id="password" className="form-control" type="password" name />
            </div>
            <div className="d-flex w-100">
              <button className="btn btn-primary w-100" type="submit">Go to school</button>
            </div>
            <div className="form-group form-check mt-3 text-align-center">
              <input id="remember-me" className="form-check-input" type="checkbox" name defaultValue="true" />
              <label htmlFor="remember-me" className="form-check-label">Keep me signed in</label>
            </div>
          </form>
          <div className="d-flex w-80 justify-content-around mt-3">
            <a href="#">forgot username?</a>
            <a href="#">forgot password?</a>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Login;
