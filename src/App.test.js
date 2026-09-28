import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Brew & Bloom Cafe application', () => {
  render(<App />);

  const heading = screen.getByRole('heading', {
    name: /Your daily cup of happiness/i
  });

  expect(heading).toBeInTheDocument();
});