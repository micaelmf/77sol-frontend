// import '@testing-library/jest-dom';
import { render, screen } from '@testing-library/react';
import { Modal } from './Modal';
import { useState } from 'react';

describe('Modal', () => {
  it('Must load component modal', () => {
    const [isModalVisible, setIsModalVisible] = useState(null);

    render(<Modal title={'Título'} onClose={() => setIsModalVisible(false)} />);

    expect(screen.getByText('Título')).toBeInTheDocument();
  });
});
