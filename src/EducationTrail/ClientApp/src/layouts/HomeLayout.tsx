import React, { Component } from 'react';
import NavMenu from '@components/NavMenu';
import NavFooter from '@components/NavFooter'

export interface LayoutProps  { 
  children: React.ReactNode
}

class HomeLayout extends Component<LayoutProps> {
  static displayName = HomeLayout.name;

  render() {
    return (
      <div>
        <NavMenu />
          {this.props.children}
        <NavFooter />
      </div>
    );
  }
}

export default HomeLayout;