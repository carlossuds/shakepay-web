import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import Home from '../../pages/Home';

describe('Inputs search', () => {
  it('Github user', () => {
    const { getByTestId } = render(<Home />);

    fireEvent.change(getByTestId('input'), { target: { value: 'carlossuds' } });
    fireEvent.click(getByTestId('button'));

    expect(getByTestId('input')).toHaveValue('carlossuds');
  });
});
