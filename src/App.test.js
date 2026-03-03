// src/App.test.js
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders SolidityBridge title', () => {
    render(<App />);
    const titleElement = screen.getByText(/SolidityBridge/i);
    expect(titleElement).toBeInTheDocument();
});
