import { Meta, StoryObj } from '@storybook/react';
import { Submit } from './Submit';

export default {
  title: 'Components/Form/Submit',
  component: Submit,
  args: {
    key: '1',
    children: 'Simular',
  },
} as Meta;

/**
 * Variações
 */
export const Default: StoryObj = {};
export const Ative: StoryObj = { args: {} };
