import React, { Component } from "react";
import { Link } from "react-router-dom";
import "../assets/css/NavMenu.css";

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  render() {
    return (
      <header>
        <navbar className="navbar bg-base-100">
          <div className="flex-1">
            <a
              className="btn btn-ghost normal-case text-xl"
              tag={Link}
              href="/"
            >
              EducationTrail
            </a>
          </div>
          <div className="flex-none">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a tag={Link} className="text-dark" href="/">
                  Home
                </a>
              </li>
              <li>
                <a tag={Link} className="text-dark" href="/counter">
                  Counter
                </a>
              </li>
              <li>
                <a tag={Link} className="text-dark" href="/fetch-data">
                  Fetch data
                </a>
              </li>
            </ul>
          </div>
        </navbar>
      </header>
    );
  }
}
