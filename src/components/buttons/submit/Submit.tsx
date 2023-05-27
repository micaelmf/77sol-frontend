import * as React from 'react';
import LoadingButton from '@mui/lab/LoadingButton';
import styles from './Submit.module.css';

export interface SubmitProps {
  key?: string;
  children?: React.ReactNode;
  loading: boolean;
}

export function Submit(props: SubmitProps) {
  return (
    <LoadingButton
      className={styles.submit}
      type="submit"
      size="large"
      variant="contained"
      loading={props.loading}
      disableElevation
    >
      <span>{props.children}</span>
    </LoadingButton>
  );
}
