import React from 'react';
import { render, screen } from '@testing-library/react';

import App from '../main/App';

describe('App', () => {
    test('renders App component', () => {
        render(<App />);

        // fails
        //expect(screen.getByText('Search')).toBeInTheDocument();

        // succeeds
        expect(screen.getByText('Search:')).toBeInTheDocument();

        // fails, despite what the blog says, because multiple things match Search
        // expect(screen.getByText(/Search/)).toBeInTheDocument();
    });
});