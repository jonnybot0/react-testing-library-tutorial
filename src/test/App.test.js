import React from 'react';
import {render, screen} from '@testing-library/react';

import App from '../main/App';
import userEvent from "@testing-library/user-event";
import axios from 'axios'

jest.mock('axios')

describe('App', () => {
    test('fetches stories from an API and displays them', async () => {
        const stories = [
            { objectID: '1', title: 'Hello' },
            { objectID: '2', title: 'React' },
        ]

        axios.get.mockImplementationOnce(() =>
            Promise.resolve({ data: { hits: stories } })
        )

        render(<App />)

        await userEvent.click(screen.getByRole('button'))

        const items = await screen.findAllByRole('listitem')

        expect(items).toHaveLength(2)
    })
})

