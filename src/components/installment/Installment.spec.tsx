// import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Installment } from './Installment';

describe('Installment', () => {
  it('Must load component installment', () => {
    const installment = {
      parcelas: 1,
      taxa_minina: 1,
      taxa_maxima: 1,
      valor_minimo: 1,
      valor_maximo: 10,
    };

    render(<Installment content={installment} />);

    expect(screen.getByText('10')).toBeInTheDocument();
  });
});
