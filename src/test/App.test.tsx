import * as React from 'react'
import { render, screen } from '@testing-library/react'
import App from "../main/App"

describe('App', () => {
    test('renders App component', async () => {
        render(<App />);

        expect(screen.queryByText(/Signed in as/)).toBeNull()

        expect(await screen.findByText(/Signed in as/)).toBeInTheDocument()
    });
});
