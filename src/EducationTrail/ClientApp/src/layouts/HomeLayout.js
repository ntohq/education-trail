import React, { Component } from 'react';
import { NavMenu } from '../components/NavMenu';

export class HomeLayout extends Component {
  static displayName = HomeLayout.name;

  render() {
    return (
      <div>
        <NavMenu />
        <div class="container">
          {this.props.children}
        </div>
      </div>
    );
  }
}