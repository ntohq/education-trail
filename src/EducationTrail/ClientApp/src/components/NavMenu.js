import React, { Component } from "react";
import { Link } from "react-router-dom";
import EducationTrailEmblem from '../assets/images/education_trail_emblem.png'

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
              <div class="w-10 rounded-full">
                <img src={EducationTrailEmblem} alt="The education trail's emblem."/>
              </div>
              <h3 class="hidden sm:block">The Education Trail</h3>
            </a>
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
          </div>
        </navbar>
      </header>
    );
  }
}
