import React, { Component } from 'react';

export interface LayoutProps  { 
  children: React.ReactNode
}

export class Layout extends Component<LayoutProps> {
  static displayName = Layout.name;

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

export default Layout;