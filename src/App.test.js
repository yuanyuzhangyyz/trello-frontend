import { render, screen } from '@testing-library/react';
import App from './App';
import React from 'react';

describe('App', () => {
  it('renders login link', () => {
    render(<App />);
    const linkElement = screen.getByText(/登录到 Trello/i);
    expect(linkElement).toBeInTheDocument();
  });
});
