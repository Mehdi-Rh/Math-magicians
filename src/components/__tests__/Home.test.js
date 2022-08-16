import React from 'react';
import Renderer from 'react-test-renderer';
import Home from '../../container/homePage/Home';

it('renders correctly', () => {
  const tree = Renderer
    .create(<Home />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
