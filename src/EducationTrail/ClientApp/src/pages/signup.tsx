import React, { Component } from "react";

export class Signup extends Component {
  static displayName = Signup.name;

  componentDidMount() {
    document.title = Signup.name + " - Education Trail";
  }

  render() {
    return <div>Please Login 😅</div>;
  }
}

export default Signup;