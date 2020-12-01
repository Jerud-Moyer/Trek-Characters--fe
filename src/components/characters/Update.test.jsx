import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Update from './Update';

describe('Update component', () => {
  afterEach(() => cleanup());

  it('renders Character', () => {
    const { asFragment } = render(<Update
      name="test Name"
      affiliation="Milky way defense force"
      origin="Mars"
      race="Martian"
      imageUrl="Test Image"
      onChange={() => {}}
      onSubmit={() => {}}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
