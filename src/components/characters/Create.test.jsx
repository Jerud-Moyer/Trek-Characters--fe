import React from 'react';
import { render, cleanup } from '@testing-library/react';
import Create from './Create';

describe('Create component', () => {
  afterEach(() => cleanup());

  it('renders Character', () => {
    const { asFragment } = render(<Create
      name="test Name"
      affiliation="Saturn"
      origin="pluto"
      race="Uranusonian"
      imageUrl="Test Image"
      onChange={() => {}}
      onSubmit={() => {}}
    />);
    expect(asFragment()).toMatchSnapshot();
  });
});
