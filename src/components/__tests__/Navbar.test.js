import React from 'react';
import Renderer from 'react-test-renderer';
import Navbar from '../navbar/Navbar';

it('renders correctly', () => {
  const tree = Renderer
    .create(<Navbar />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});
