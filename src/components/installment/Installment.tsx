import styles from './Installment.module.css';

export interface Installmente {
  parcelas: number;
  taxa_minina: number;
  taxa_maxima: number;
  valor_minimo: number;
  valor_maximo: number;
}

export interface InstallmentProps {
  content: Installmente;
}

export function Installment({ content }: InstallmentProps) {
  return (
    <div key={content.parcelas} className={styles.installment}>
      <span>Parcelas:</span>
      <span>{content.parcelas}</span>
      <span>Taxa mínima:</span>
      <span>{content.taxa_minina}</span>
      <span>Taxa máxima:</span>
      <span>{content.taxa_maxima}</span>
      <span>Valor mínimo:</span>
      <span>{content.valor_minimo}</span>
      <span>Valor máximo:</span>
      <span>{content.valor_maximo}</span>
    </div>
  );
}
