import { screen } from '@testing-library/react';
import React from 'react';
import App from './App';
import { render } from './test-utils';

test('renders dark mode toggle button', () => {
  render(<App />);
  const linkElement = screen.getByRole('button', {
    ariaLabel: /^Switch to/,
  });
  expect(linkElement).toBeInTheDocument();
});
