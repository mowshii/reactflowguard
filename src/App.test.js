import { render, screen } from '@testing-library/react';
import App from './App';

test('renders ReactFlowGuard application', () => {
  render(<App />);

  const titleElement = screen.getByRole('heading', {
    name: 'ReactFlowGuard',
    level: 1
  });

  expect(titleElement).toBeInTheDocument();
});