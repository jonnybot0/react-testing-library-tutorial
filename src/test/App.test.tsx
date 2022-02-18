import * as React from 'react'
import { render, screen } from '@testing-library/react'
import App from "../main/App"

describe('App', () => {
    test('renders App component', () => {
        render(<App />);

        expect(screen.getByText('Search:')).toBeInTheDocument()
    });
});
