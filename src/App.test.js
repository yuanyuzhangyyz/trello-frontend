import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import React from "react";

console.log(process.env.NODE_ENV);

describe("App", () => {
  it("renders login link", () => {
    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>
    );
    const linkElement = screen.getByText(/PHABRICATION/i);
    expect(linkElement).toBeInTheDocument();
  });
});
