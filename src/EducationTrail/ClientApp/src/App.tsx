import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AppRoutes from "./AppRoutes";

class App extends Component {
  static displayName = App.name;

  render() {
    return (
      <BrowserRouter>
        <Routes>
          {AppRoutes.map((route, index) => {
            const { element, ...rest } = route;
            return <Route key={index} {...rest} element={element} />;
          })}
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
