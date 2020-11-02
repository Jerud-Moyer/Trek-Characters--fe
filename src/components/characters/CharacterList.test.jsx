import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { getCharacters } from '../../services/trek-api';
import CharacterList from './CharacterList';
import { MemoryRouter } from 'react-router-dom';


jest.mock('../../services/trek-api.js');

describe('CharacterList component', () => {
  it('displays a list of characters after a quick load', async() => {
    getCharacters.mockResolvedValue([
      { id: 1, name: 'Kirk', imageUrl: 'kirk.com'  }
    ]);
    render(<MemoryRouter>
      <CharacterList />
    </MemoryRouter>);

    screen.getByText('Nomad Loading!');

    const characterList = await screen.findByTestId('characters');
    
    return waitFor(() => {
      expect(characterList).not.toBeEmptyDOMElement();
    });
  }
  );
});
