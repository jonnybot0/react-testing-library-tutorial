import * as React from 'react'
import axios from 'axios'
import { render, screen } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import App from "../main/App";

jest.mock('axios')
const moxios = jest.mocked(axios, true)

describe('App', () => {
    test('fetches stories from an API and displays them', async () => {
        const stories = [
            { objectID: '1', title: 'Hello' },
            { objectID: '2', title: 'React' },
        ]

        moxios.get.mockImplementationOnce(() =>
            Promise.resolve({ data: { hits: stories } })
        )

        render(<App />)

        await userEvent.click(screen.getByRole('button'))

        const items = await screen.findAllByRole('listitem')

        expect(items).toHaveLength(2)
    })
})
