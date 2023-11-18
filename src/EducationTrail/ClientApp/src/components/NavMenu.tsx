import React, { Component } from "react";
import EducationTrailEmblem from "@assets/images/education_trail_emblem.png";

class NavMenu extends Component {
  static displayName = NavMenu.name;

  render() {
    return (
        <nav className="navbar bg-base-100">
          {/* navbar container right */}
          <div className="navbar-start">
            <div className="navbrand">
              <a
                className="btn btn-ghost normal-case text-xl"
                href="/"
              >
                <div className="w-10 rounded-full">
                  <img
                    src={EducationTrailEmblem}
                    alt="The education trail's emblem."
                    className="mask mask-circle shadow-xl"
                  />
                </div>
                <h3 className="hidden sm:block">The Education Trail</h3>
              </a>
            </div>
            {/* navbar navigation */}
            <div className="hidden w-full md:flex md:items-center md:w-auto">
              <ul className="menu menu-horizontal px-1">
                <li>
                  <a className="text-dark" href="/">
                    Home
                  </a>
                </li>
                <li>
                  <a className="text-dark" href="/counter">
                    Counter
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* navbar end */}
          <div className="navbar-end">
            {/* search? login? */}
            <div>

            </div>
            {/* mobile navburger */}
            <div className="cursor-pointer md:hidden block">
              <button className="btn btn-ghost auto">
                <span className="i-fa-solid-bars auto text-xl"></span>
              </button>
            </div>
          </div>
        </nav>
    );
  }
}

export default NavMenu;