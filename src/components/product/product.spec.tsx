// import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Product } from './Product';

describe('Product', () => {
  it('Must load component product', () => {
    const product = {
      id: '1',
      url: 'https://storage77sol.s3.sa-east-1.amazonaws.com/loja/35481/imagens/1617887867.png',
      titulo: 'Produto 1',
      qtde: 1,
      valor: 10.4,
      categoria: '62',
      datasheet: 'localhost/arquivo.pdf',
      custo: 11,
      estimativaEntrega: '20',
      fornecedor: '41',
      garantia: '20',
      potenciaModulo: 30,
      descricao: 'Descrição do produto',
    };

    render(<Product content={product} />);

    expect(screen.getByText('Produto 1')).toBeInTheDocument();
  });
});
