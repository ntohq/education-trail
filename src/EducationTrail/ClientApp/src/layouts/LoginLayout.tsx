import React, { Component } from 'react';

export class Layout extends Component {
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