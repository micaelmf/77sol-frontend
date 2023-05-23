import styles from './Submit.module.css';

export interface SubmitProps {
  key?: string;
  children?: React.ReactNode;
}

export function Submit({ children }: SubmitProps) {
  return (
    <button className={styles.submit} type="submit">
      {children}
    </button>
  );
}
