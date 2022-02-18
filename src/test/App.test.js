import React from 'react';
import {render, screen} from '@testing-library/react';

import App from '../main/App';
import userEvent from "@testing-library/user-event";

describe('App', () => {
    test('renders App component', async () => {
        render(<App />);
        expect(screen.queryByText(/Signed in as/)).toBeNull()

        expect(await screen.findByText(/Signed in as/)).toBeInTheDocument()
    });

    test('event firing', async () => {
        render(<App />)

        expect(screen.queryByText(/Searches for JavaScript/)).toBeNull()

        await userEvent.type(screen.getByRole('textbox'), 'JavaScript')

        expect(screen.getByText(/Searches for JavaScript/)).toBeInTheDocument()
    })
});