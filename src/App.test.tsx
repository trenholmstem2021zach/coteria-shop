import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('renders', () => {
  render(<App />);
  const linkElement = screen.getByText(/Yes coming soon/i);
  expect(linkElement).toBeInTheDocument();
});
