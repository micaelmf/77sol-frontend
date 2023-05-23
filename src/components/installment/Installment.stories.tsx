import { Meta, StoryObj } from '@storybook/react';
import { InstallmentProps, Installment } from './Installment';

export default {
  title: 'Components/Installment',
  component: Installment,
  args: {
    content: {
      parcelas: 1,
      taxa_minina: 1,
      taxa_maxima: 1,
      valor_minimo: 1,
      valor_maximo: 1,
    },
  },
} as Meta<InstallmentProps>;

/**
 * Variações
 */
export const Default: StoryObj<InstallmentProps> = {};
