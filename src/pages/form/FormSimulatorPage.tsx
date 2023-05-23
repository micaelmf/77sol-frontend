import { FormEvent, useState } from 'react';
import axios from 'axios';
import styles from './Form.module.css';
import { useNavigate } from 'react-router-dom';
import logo from '../../assets/logo.png';
import { Submit } from '../../components/buttons/submit/Submit';

export function FormSimulatorPage() {
  const navigate = useNavigate();

  const [cep, setCep] = useState('');
  const [type, setType] = useState('');
  const [value, setValue] = useState('');

  const typeList = [
    { name: 'Fibrocimento Madeira', value: 'fibrocimento-madeira' },
    { name: 'Fibrocimento Metálico', value: 'fibrocimento-metalico' },
    { name: 'Cerâmico', value: 'ceramico' },
    { name: 'Metálico', value: 'metalico' },
    { name: 'Laje', value: 'laje' },
    { name: 'Solo', value: 'solo' },
  ];

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();

    console.log('form', [cep, type, value]);
    if (!cep || !type || !value) {
      console.log('erro');
      return;
    }

    // ?estrutura=fibrocimento-metalico&valor_conta=2900&cep=06543-001
    const response = await axios.get(
      `https://api2.77sol.com.br/busca-cep?estrutura=${type}&valor_conta=${value}&cep=${cep}`
    );

    localStorage.setItem('results', JSON.stringify(response));
    navigate('/results');

    setCep('');
    setType('');
    setValue('');
  }

  return (
    <div className={styles.container}>
      <form onSubmit={handleSubmit} className={styles.form}>
        <div className={styles.header}>
          <img src={logo} alt="Logotipo do Ignite" />
          <h1>Simulador solar</h1>
          <p>É simples e fácil!</p>
        </div>

        <div className={styles.fields}>
          <div className={styles['input-container']}>
            {/* <label htmlFor="cep">Cep</label> */}
            <input
              type="text"
              id="cep"
              name="cep"
              value={cep}
              placeholder="CEP"
              onChange={(event) => setCep(event.target.value)}
              autoFocus
            />
          </div>

          <div>
            {/* <label htmlFor="tipo-estrutura">Tipo de estrutura</label> */}
            <select
              className={styles['select-container']}
              name="tipo_estrutura"
              id="tipo-estrutura"
              value={type}
              onChange={(event) => setType(event.target.value)}
            >
              <option value="">Selecione o tipo de estrutura</option>
              {typeList.map((item) => (
                <option key={item.value} value={item.value}>
                  {item.name}
                </option>
              ))}
            </select>
          </div>

          <div className={styles['input-container']}>
            {/* <label htmlFor="valor-conta">Valor da conta</label> */}
            <input
              id="valor-conta"
              name="valor_conta"
              value={value}
              placeholder="Valor da conta"
              onChange={(event) =>
                setValue((event.target as HTMLInputElement).value)
              }
            />
          </div>
        </div>

        <Submit>Simular</Submit>
      </form>
    </div>
  );
}
