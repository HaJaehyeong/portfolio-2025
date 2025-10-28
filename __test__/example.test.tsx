import { render, screen } from '@testing-library/react';
import React from 'react';

function Example() {
  return <div>Hello, Next.js 16!</div>;
}

test('renders example component', () => {
  render(<Example />);
  expect(screen.getByText('Hello, Next.js 16!')).toBeInTheDocument();
});
