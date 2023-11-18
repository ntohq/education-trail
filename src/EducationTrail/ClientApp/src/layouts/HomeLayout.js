import React, { Component } from 'react';
import { NavMenu } from '../components/NavMenu';
import { NavFooter } from '../components/NavFooter'

export class HomeLayout extends Component {
  static displayName = HomeLayout.name;

  render() {
    return (
      <div>
        <NavMenu />
        <div className="container">
          {this.props.children}
        </div>
        <NavFooter />
      </div>
    );
  }
}