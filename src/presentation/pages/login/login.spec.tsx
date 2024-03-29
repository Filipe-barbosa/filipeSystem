import React from 'react';
import { getByTestId, render } from '@testing-library/react';
import '@testing-library/jest-dom';
import Login from './login';

describe('Login Component', () => {
  test('Should start with initial state', () => {
    const { getByTestId } = render(<Login />);
    const errorWrap = getByTestId('error-wrap');
    expect(errorWrap.childElementCount).toBe(0);
    const submitButton = getByTestId('submit') as HTMLButtonElement;
    expect(submitButton.disabled).toBe(true);
  });
});
