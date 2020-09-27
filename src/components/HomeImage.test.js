/* eslint-disable no-undef, react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import HomeImage from './HomeImage';

test('header loads and has title', () => {
  const { getByText } = render(<HomeImage />);
  expect(getByText('Change Logo *')).toBeInTheDocument();
});
