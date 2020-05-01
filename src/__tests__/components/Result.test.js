import React from 'react';
import { Router } from 'react-router-dom';
import { render, fireEvent } from '@testing-library/react';
import Result from '../../pages/Result';
import history from '../../services/history';

describe('Inputs search', () => {
  it('Github user', () => {
    const location = {
      state: {
        user: { login: 'diego3g' },
        repos: [
          { id: 1, title: 'repo1' },
          { id: 2, title: 'repo2' },
        ],
      },
    };
    const { getByTestId } = render(
      <Router history={history}>
        <Result location={location} />
      </Router>,
    );

    fireEvent.change(getByTestId('input'), { target: { value: 'carlossuds' } });
    fireEvent.click(getByTestId('button'));

    expect(getByTestId('input')).toHaveValue('carlossuds');
  });
});
