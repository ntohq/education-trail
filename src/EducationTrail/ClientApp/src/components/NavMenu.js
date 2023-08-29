import React, { Component } from "react";
import EducationTrailEmblem from "../assets/images/education_trail_emblem.png";

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  render() {
    return (
        <navbar class="navbar bg-base-100">
          {/* navbar container right */}
          <div class="navbar-start">
            <div class="navbrand">
              <a
                className="btn btn-ghost normal-case text-xl"
                href="/"
              >
                <div class="w-10 rounded-full">
                  <img
                    src={EducationTrailEmblem}
                    alt="The education trail's emblem."
                    className="mask mask-circle shadow-xl"
                  />
                </div>
                <h3 class="hidden sm:block">The Education Trail</h3>
              </a>
            </div>
            {/* navbar navigation */}
            <div class="">
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
          <div class="navbar-end">
            {/* search? login? */}
            <div>

            </div>
            {/* mobile navburger */}
            <div class="m:hidden lg:hidden flex">
              <button class="btn btn-ghost auto">
                <span class="i-fa-solid-bars auto text-xl"></span>
              </button>
            </div>
          </div>
        </navbar>
    );
  }
}
