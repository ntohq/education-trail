import React, { Component } from "react";
import ProductLayout from "@layouts/ProductLayout"

export class Hub extends Component {
  static displayName = Hub.name;

  componentDidMount() {
    document.title = Hub.name + " - Education Trail";
  }

  render() {
    return (
      <ProductLayout>
        <p>Welcome to the Hub</p>
      </ProductLayout>
    );
  }
}

export default Hub;