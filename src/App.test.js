import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

test('Navigation Bar Render Test', () => {
    render(<App />);
    [
        '餐廳',
        '相關連結'
    ].forEach(str=>{
        expect(screen.getByText(str)).toBeInTheDocument();
    })
});

test('Footer Render Test', () => {
  render(<App />);
  [
      '隱私權聲明',
      '行為準則',
      '意見反饋'
  ].forEach(str=>{
    expect(screen.getByText(str)).toBeInTheDocument();
  })
});
