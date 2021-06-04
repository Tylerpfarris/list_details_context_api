/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen, cleanup } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import animalCrossingCharacterList from '../../animalCrossingCharacterList.json';
import VillagerList from './VillagerList';
import { ThemeProvider } from '../state/ThemeContext';

const server = setupServer(
  rest.get(`https://acnhapi.com/v1a/villagers`, (req, res, ctx) => {
    return res(ctx.json(animalCrossingCharacterList));
  })
);

describe('VillagerList', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());
  afterEach(cleanup);

  it('renders a list of animal crossing characters on the screen', async () => {
    render(
      <ThemeProvider>
        <MemoryRouter>
          <VillagerList />
        </MemoryRouter>
      </ThemeProvider>
    );

    const disabledBackButton = screen.getByTestId('back-button-disabled');
    expect(disabledBackButton).toHaveTextContent('back');

    const nextButton = screen.getByTestId('next-button');
     expect(nextButton).toHaveTextContent('next');

    userEvent.click(nextButton);

    const backButton = screen.getByTestId('back-button');
     expect(backButton).toHaveTextContent('back');

    userEvent.click(nextButton);

    const listEl = await screen.getByRole('list', 'villager-list');
    expect(listEl).toMatchSnapshot();

    // waitFor(() => {
    //   const disabledNextButton =  screen.getByTestId('next-button-disabled');
    //   expect(disabledNextButton).toHaveTextContent('next')

    // })
  });
});
