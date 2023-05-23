// import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Submit } from './Submit';

describe('Submit', () => {
  it('Must load component modal', () => {
    render(<Submit />);

    expect(screen.getByText('Simular')).toBeInTheDocument();
  });
});
