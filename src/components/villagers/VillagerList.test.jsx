/**
 * @jest-environment jsdom
 */
import React from 'react';
import { render, screen } from '@testing-library/react';
// import userEvent from '@testing-library/user-event'
import { MemoryRouter } from 'react-router-dom';
import { rest } from 'msw';
import { setupServer } from 'msw/node';

import animalCrossingCharacterList from '../../animalCrossingCharacterList.json';
import VillagerList from './VillagerList';

const server = setupServer(
  rest.get(`https://acnhapi.com/v1a/villagers`, (req, res, ctx) => {
    return res(ctx.json(animalCrossingCharacterList));
  })
);

describe('Avatar', () => {
  beforeAll(() => server.listen());
  afterAll(() => server.close());

  it('renders a list of animal crossing characters on the screen', async () => {
    render(
      <MemoryRouter>
        <VillagerList />
      </MemoryRouter>
    );
    screen.getByText('Loading...');
  });
});
