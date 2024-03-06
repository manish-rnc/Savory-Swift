import { render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";

it("Should render the header component with a login button", () => {
    render(
        <BrowserRouter>
            <Provider store={appStore}>
                render(<Header />);
            </Provider>
        </BrowserRouter>
    )

    const loginButton = screen.getByText(/[0]/);
    expect(loginButton).toBeInTheDocument();
});