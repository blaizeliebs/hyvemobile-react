/* eslint-disable no-undef, react/jsx-filename-extension */
import React from 'react';
import { render } from '@testing-library/react';
import Home from './Home';

test('renders HomePage and has the word Reddit in content', () => {
  const { getByText } = render(<Home />);
  expect(getByText('Fetch Reddit Posts')).toBeInTheDocument();
});
