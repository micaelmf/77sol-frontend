import { FormEvent, useState } from 'react';
import axios from 'axios';
import logo from '../../assets/logo.png';
import { useNavigate } from 'react-router-dom';
import {
  TextField,
  Box,
  FormControl,
  InputLabel,
  MenuItem,
  Button,
} from '@mui/material';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import styles from './Form.module.css';
import { Submit } from '../../components/buttons/submit/Submit';

interface TypeItem {
  value: string;
  name: string;
}

const typeList: TypeItem[] = [
  { name: 'Fibrocimento Madeira', value: 'fibrocimento-madeira' },
  { name: 'Fibrocimento Metálico', value: 'fibrocimento-metalico' },
  { name: 'Cerâmico', value: 'ceramico' },
  { name: 'Metálico', value: 'metalico' },
  { name: 'Laje', value: 'laje' },
  { name: 'Solo', value: 'solo' },
];

export function FormSimulatorPage() {
  const navigate = useNavigate();

  const [cep, setCep] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [value, setValue] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleCepChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setCep(event.target.value);
  };

  const handleTypeChange = (event: SelectChangeEvent) => {
    setType(event.target.value as string);
  };

  const handleValueChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);

    console.log('form', [cep, type, value]);
    if (!cep || !type || !value) {
      console.log('erro');
      setLoading(false);
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

    setLoading(false);
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <img src={logo} alt="Logotipo do Ignite" />
          <h1>Simulador solar</h1>
          <p>É simples e fácil!</p>
        </div>
        <Box className={styles.box} component="form" onSubmit={handleSubmit}>
          <TextField
            className={styles['field-input']}
            id="cep"
            label="CEP"
            variant="outlined"
            onChange={handleCepChange}
          />
          <FormControl fullWidth>
            <InputLabel id="type-label">Tipo de estrutura</InputLabel>
            <Select
              className={styles['field-select']}
              labelId="type-label"
              id="type"
              value={type}
              label="Tipo de estrutura"
              onChange={handleTypeChange}
            >
              {typeList.map((item) => (
                <MenuItem key={item.value} value={item.value}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            className={styles['field-input']}
            id="value"
            label="Valor da Conta"
            variant="outlined"
            onChange={handleValueChange}
          />
          <Submit loading={loading}>Simular</Submit>
        </Box>
      </div>
    </div>
  );
}
