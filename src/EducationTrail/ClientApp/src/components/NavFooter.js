import React, { Component } from "react";
import EducationTrailEmblem from "../assets/images/education_trail_emblem.png";

export class NavFooter extends Component {
  static displayName = NavFooter.name;

  render() {
    return (
      <footer className="footer footer-center p-10 bg-primary text-primary-content">
        <div>
          <img src={EducationTrailEmblem} width="50" height="50" alt="The Education Trail Emblem"/>
          <p className="font-bold">
            The Education Trail <br />

          </p>
          <p>Copyright © 2023 - All right reserved</p>
        </div>
        <div>
          <div className="grid grid-flow-col gap-4">
            <a href="https://educationtrail.org/discord">
                <span class="i-ic-baseline-discord auto text-2xl"></span>
            </a>
            <a href="https://www.instagram.com/educationtrail/">
                <span class="i-mdi-instagram auto text-2xl"></span>
            </a>
            <a href="https://ntohqdevelopers.com/">
                <span class="i-mdi-twitter auto text-2xl"></span>
            </a>
          </div>
        </div>
      </footer>
    );
  }
}
