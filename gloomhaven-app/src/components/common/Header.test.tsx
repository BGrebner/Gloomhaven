import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./Header";

it("should contain login link", () => {
    render(<Header />);

    const linkElement = screen.getByText(/login/i);

    expect(linkElement).toBeInTheDocument();
});