import React, { Component } from "react";
import HomeLayout from "@layouts/HomeLayout";

export class NotFound extends Component {
  static displayName = NotFound.name;

  componentDidMount() {
    document.title = "404 - Not Found";
  }

  render() {
    return (
      <HomeLayout>
        <div className="hero min-h-screen bg-base-200">
          <div className="hero-content text-center">
            <div className="max-w-md">
              <h1 className="text-6xl font-bold">404 Not Found</h1>
            </div>
          </div>
        </div>
      </HomeLayout>
    );
  }
}

export default NotFound;
