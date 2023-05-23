import styles from './Modal.module.css';

export interface ModalProps {
  key?: string;
  children?: React.ReactNode;
  title: string;
  onClose: () => void;
}

export function Modal({ children, title, onClose }: ModalProps) {
  return (
    <div className={styles.modal}>
      <div className={styles['modal-container']}>
        <div className={styles.header}>
          <h2 className={styles['modal-title']}>{title}</h2>
          <button className={styles['close-icon']} onClick={onClose}>
            &times;
          </button>
        </div>
        <div className={styles.content}>{children}</div>
        <div className={styles.footer}>
          <button className={styles['close-button']} onClick={onClose}>
            Fechar
          </button>
        </div>
      </div>
    </div>
  );
}
