import React, { Component } from 'react';

export class ProductLayout extends Component {
  static displayName = ProductLayout.name;

  render() {
    return (
      <div>
        <div class="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}