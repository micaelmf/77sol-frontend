import { Meta, StoryObj } from '@storybook/react';
import { Product, ProductProps } from './Product';

export default {
  title: 'Components/Product',
  component: Product,
  args: {
    content: {
      id: '1',
      url: 'https://storage77sol.s3.sa-east-1.amazonaws.com/loja/35481/imagens/1617887867.png',
      titulo: 'Produto 1',
      qtde: 1,
      valor: 10.4,
      categoria: '62',
      datasheet: 'localhost/arquivo.pdf',
      custo: 11.0,
      estimativaEntrega: '20',
      fornecedor: '41',
      garantia: '20',
      potenciaModulo: 30,
      descricao: 'Descrição do produto',
    },
  },
} as Meta<ProductProps>;

/**
 * Variações
 */
export const Default: StoryObj<ProductProps> = {};
