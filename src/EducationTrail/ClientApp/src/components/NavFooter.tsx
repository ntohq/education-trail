import React, { Component } from "react";
import EducationTrailEmblem from "../assets/images/coffee-bear.png";

class NavFooter extends Component {
  static displayName = NavFooter.name;

  render() {
    return (
      <footer className="footer footer-center p-10 bg-primary text-primary-content">
        <div>
          <figure className="">
            <img src={EducationTrailEmblem} className="mask mask-heart" width="60" height="50" alt="The Education Trail Emblem"/>
          </figure>
          <p className="font-bold">
            The Education Trail <br />

          </p>
          <p>Copyright © 2023 - All rights reserved</p>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <a href="https://educationtrail.org/discord">
                <span className="i-ic-baseline-discord auto text-2xl"></span>
            </a>
            <a href="https://www.instagram.com/educationtrail/">
                <span className="i-mdi-instagram auto text-2xl"></span>
            </a>
            <a href="https://ntohqdevelopers.com/">
                <span className="i-mdi-twitter auto text-2xl"></span>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}

export default NavFooter;