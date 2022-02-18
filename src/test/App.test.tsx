import * as React from 'react'
import { render, screen } from '@testing-library/react'
import App from "../main/App"

describe('App', () => {
    test('renders App component', () => {
        render(<App />);


        // fails
        //expect(screen.getByText('Search')).toBeInTheDocument();

        // succeeds
        expect(screen.getByText('Search:')).toBeInTheDocument();

        // Fails because regex returns multiple elements
        // expect(screen.getByText(new RegExp(/Search/))).toBeInTheDocument()

        expect(screen.getByRole('textbox')).toBeInTheDocument()
    });
});
