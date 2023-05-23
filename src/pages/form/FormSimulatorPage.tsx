import { FormEvent, useState } from 'react';
import axios from 'axios';
import styles from './Form.module.css';
import { useNavigate } from 'react-router-dom';

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
    <form onSubmit={handleSubmit}>
      <h1>Simulador solar</h1>
      <p>É simples e fácil!</p>

      <div className={styles.fields}>
        <div>
          <label htmlFor="cep">Cep</label>
          <input
            type="text"
            id="cep"
            name="cep"
            value={cep}
            onChange={(event) => setCep(event.target.value)}
            autoFocus
          />
        </div>

        <div>
          <label htmlFor="tipo-estrutura">Tipo de estrutura</label>
          <select
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

        <div>
          <label htmlFor="valor-conta">Valor da conta</label>
          <input
            id="valor-conta"
            name="valor_conta"
            value={value}
            onChange={(event) =>
              setValue((event.target as HTMLInputElement).value)
            }
          />
        </div>
      </div>

      <button type="submit">Simular</button>
    </form>
  );
}
