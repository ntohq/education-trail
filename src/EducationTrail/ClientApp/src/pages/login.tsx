import React, { Component } from "react";

export class Login extends Component {
  static displayName = Login.name;

  componentDidMount() {
    document.title = Login.name + " - Education Trail";
  }

  render() {
    return <div>Please Login 😅</div>;
  }
}

export default Login;
