import React, { Component } from 'react';

export interface LayoutProps  { 
  children: React.ReactNode
}

export class ProductLayout extends Component<LayoutProps> {
  static displayName = ProductLayout.name;

  render() {
    return (
      <div>
        <div className="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default ProductLayout;