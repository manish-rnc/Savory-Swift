import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";


describe("Contact Us Page test cases", () => {
    test("Should load Contact Us Component", () => {
        render(<Contact />);
    
        const heading = screen.getByRole("heading");
        expect(heading).toBeInTheDocument();
    
    });
    
    // it is an alias for test
    it("Should load the button inside the Contact Component", () => {
        render(<Contact />);
    
        // const button = screen.getByRole("button");
        const button = screen.getByText("Submit");
        expect(button).toBeInTheDocument();
    
    });
    
    test("Should load the input inside the Contact Component", () => {
        render(<Contact />);
        const input = screen.getByPlaceholderText("Enter name");
        expect(input).toBeInTheDocument();
    });
    
    test("Should load 3 input boxes in the component", () => {
        render(<Contact />);
        const inputBoxes = screen.getAllByRole("textbox");
        expect(inputBoxes.length).toBe(2);
    
    });
});
