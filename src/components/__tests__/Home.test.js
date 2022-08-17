import React from 'react';
import Renderer from 'react-test-renderer';
import Home from '../../container/Quote';

it('renders correctly', () => {
  const tree = Renderer
    .create(<Home />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
