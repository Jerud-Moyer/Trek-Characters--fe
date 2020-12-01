import React from 'react';
import { render, cleanup } from '@testing-library/react';
import CharacterItem from './CharacterItem';

describe('CharacterItem component', () => {
  afterEach(() => cleanup());

  it('renders Character', () => {
    const { asFragment } = render(<CharacterItem
      imageUrl="Test Image"
      name="test Name"
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
