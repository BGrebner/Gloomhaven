import React from "react";
import { render, screen } from "@testing-library/react";
import LoginDialog from "./LoginDialog";

it("should contain login link for google", () => {
    render(<LoginDialog />);

    const linkElement = screen.getByText(/google/i);

    expect(linkElement).toBeInTheDocument();
});