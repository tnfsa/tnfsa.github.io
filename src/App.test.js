import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';

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
