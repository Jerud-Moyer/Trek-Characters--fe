import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { getCharacterById } from '../services/trek-api';
import { MemoryRouter } from 'react-router-dom';
import DetailPage from './DetailPage';

jest.mock('../services/trek-api');

describe('DetailPage', () => {
  it('displays a single charcters details', async() => {
    getCharacterById.mockResolvedValue([
      { 
        name: 'Kirk',
        affiliation: 'Starfleet',
        origin: 'Earth',
        race: 'Human',
        imageUrl: 'kirk.com'
      }
    ]);
    render(<MemoryRouter>
      <DetailPage />
    </MemoryRouter>);

    const detailPage = await screen.findByTestId('detail');

    return waitFor(() => {
      expect(detailPage).not.toBeEmptyDOMElement();
    });
  });
});
