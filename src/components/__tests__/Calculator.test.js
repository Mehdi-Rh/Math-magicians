import { fireEvent, render, screen } from '@testing-library/react';
import React from 'react';
import Renderer from 'react-test-renderer';
import Calculator from '../Calculator';

it('renders correctly', () => {
  const tree = Renderer
    .create(<Calculator />)
    .toJSON();
  expect(tree).toMatchSnapshot();
});

it('shows 30 on "5 x 6 =" operation', () => {
  render(<Calculator />);

  fireEvent.click(screen.getByRole('button', { name: '5' }));
  fireEvent.click(screen.getByRole('button', { name: 'x' }));
  fireEvent.click(screen.getByRole('button', { name: '6' }));
  fireEvent.click(screen.getByRole('button', { name: '=' }));

  expect(screen.getByText('30')).toBeTruthy();
});
