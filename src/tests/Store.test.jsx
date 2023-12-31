import {
  describe,
  expect,
  vi,
} from 'vitest';
import { render, screen } from '@testing-library/react';
import Store from '../components/Store';

describe('testing Store component', () => {
  it('set category state based on api call', async () => {
    render(<Store />);
    await screen.findAllByTestId('options');
    const options = screen.getAllByTestId('options') 
    expect(options.length).toBe(4);
  });
});
