import * as React from 'react'
import {fireEvent, render, screen} from '@testing-library/react'
import App from "../main/App"

describe('App', () => {
    test('renders App component', async () => {
        render(<App />)

        expect(screen.queryByText(/Signed in as/)).toBeNull()

        expect(await screen.findByText(/Signed in as/)).toBeInTheDocument()
    })

    test('event firing', () => {
        render(<App />)

        expect(screen.queryByText(/Searches for JavaScript/)).toBeNull()

        fireEvent.change(screen.getByRole('textbox'), {
            target: { value: 'JavaScript' },
        })

        expect(screen.getByText(/Searches for JavaScript/)).toBeInTheDocument()
    })
})
