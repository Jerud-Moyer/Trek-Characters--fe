import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import { getCharacters } from '../../services/trek-api';
import CharacterList from './CharacterList';


jest.mock('../../services/trek-api');

describe('CharacterList component', () => {
  it('displays a list of characters after a quick load', async() => {
    getCharacters.mockResolvedValue([
      { id: 1, name: 'Kirk', imageUrl: 'kirk.com'  }
    ]);
    render(<CharacterList />);

    screen.getByText('Nomad Loading!');

    const characterList = await screen.findByTestId('characters');
    
    return waitFor(() => {
      expect(characterList).not.toBeEmptyDOMElement();
    });
  }
  );
});
