import React from "react";
import { render, screen } from "@testing-library/react";
import LoginDialog from "./LoginDialog";
import { JsxEmit } from "typescript";

it("should contain login link for google", () => {
    render(<LoginDialog open={true} onClose={jest.fn()} />);

    const linkElement = screen.getByText(/google/i);

    expect(linkElement).toBeInTheDocument();
});