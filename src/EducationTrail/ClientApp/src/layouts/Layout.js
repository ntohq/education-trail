import React, { Component } from 'react';
import { NavMenu } from '../components/NavMenu';
import '../assets/css/Layout.css'

export class Layout extends Component {
  static displayName = Layout.name;

  render() {
    return (
      <div>
        <NavMenu />
        <div class="container page-wrapper">
          {this.props.children}
        </div>
      </div>
    );
  }
}
