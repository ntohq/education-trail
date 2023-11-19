import React, { Component } from 'react';
import NavMenu from '@components/NavMenu';
import NavFooter from '@components/NavFooter'
import '@assets/css/Layout.css'

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <NavMenu />
        <div className="container page-wrapper">
          {this.props.children}
        </div>
        <NavFooter />
      </div>
    );
  }
}


export default Layout;
