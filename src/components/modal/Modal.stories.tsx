import { Meta, StoryObj } from '@storybook/react';
import { Modal } from './Modal';

export default {
  title: 'Components/Modal',
  component: Modal,
  args: {
    key: '1',
    title: 'Storybook',
    children: 'Conteúdo',
  },
} as Meta;

/**
 * Variações
 */
export const Default: StoryObj = {};
