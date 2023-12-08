import { render, screen } from '@testing-library/react';
import App from './App';

test("renders calculator title", () => {
    render(<App />);
    const linkElement = screen.getByText(/Calculator/i);
    expect(linkElement).toBeInTheDocument();
});

test("renders equal button", () => {
    render(<App />);
    const buttonElement = screen.getByText(/=/i);
    expect(buttonElement).toBeInTheDocument();
});
