import styles from './Results.module.css';
import { Installment } from '../../components/installment/Installment';
import { Product } from '../../components/product/Product';

export function ResultSimulatorPage() {
  const response = JSON.parse(localStorage.getItem('results'));

  return (
    <div className={styles.container}>
      <h1>Resultados</h1>
      <div className={styles.results}>
        <div className={styles.item}>
          <span>Irradiancia</span>
          <p>
            <strong>{response.data.irradiancia}</strong> | Mínimo:{' '}
            {response.data.irradiancia_minima} | Máximo:{' '}
            {response.data.irradiancia_maxima}
          </p>
        </div>

        <div className={styles.item}>
          <span>Integradores</span>
          <p>
            <strong>{response.data.integradores_regiao}</strong> | Mínimo:{' '}
            {response.data.integradores_minimo} | Máximo:{' '}
            {response.data.integradores_maximo}
          </p>
        </div>
        <div className={styles.item}>
          <span>Economia</span>
          <p>{response.data.economia}</p>
        </div>
        <div className={styles.item}>
          <span>Potencial</span>
          <p>{response.data.potencial}</p>
        </div>
        <div className={styles.item}>
          <span>Valor da instalação</span>
          <p>{response.data.valor_instalacao}</p>
        </div>
        <div className={styles.item}>
          <span>Co2</span>
          <p>{response.data.co2}</p>
        </div>
        <div className={styles.item}>
          <span>Potência CC</span>
          <p>{response.data.potencyCC}</p>
        </div>
        <div className={styles.item}>
          <span>Perfomance</span>
          <p>{response.data.performance}</p>
        </div>
        <div className={styles.item}>
          <span>Quantidade de inversores</span>
          <p>{response.data.qtdeInversores}</p>
        </div>
        <div className={styles.item}>
          <span>Índice único</span>
          <p>{response.data.indiceUnico}</p>
        </div>
        <div className={styles.item}>
          <span>Potência do sistema</span>
          <p>{response.data.potenciaSistema}</p>
        </div>
      </div>

      <h2>Parcelamento</h2>
      <div className={styles['result-list']}>
        {response.data.parcelamento.map((item) => (
          <Installment content={item} />
        ))}
      </div>

      <h2>Kit</h2>
      <div className={styles['result-list']}>
        {response.data.kit.map((item) => (
          <Product content={item} />
        ))}
      </div>
    </div>
  );
}
