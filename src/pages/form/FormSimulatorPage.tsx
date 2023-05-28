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
  Alert,
  AlertTitle,
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

  const [alertShow, setAlertShow] = useState(false);

  const [cepError, setCepError] = useState(false);
  const [valueError, setValueError] = useState(false);
  const [typeError, setTypeError] = useState(false);

  const [cep, setCep] = useState<string>('');
  const [type, setType] = useState<string>('');
  const [value, setValue] = useState<string>('');
  const [loading, setLoading] = useState(false);

  const handleCep = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    setCepError(false);
    setCep(value);

    if (value === '' || !cepIsValid(value)) {
      setCepError(true);
    }
  };

  const cepIsValid = (value: string) => {
    const digitsOnly = value.replace(/\D/g, '');
    return digitsOnly.length === 8;
  };

  const handleType = (event: SelectChangeEvent) => {
    let value = event.target.value;
    setTypeError(false);
    setType(value);

    if (value === '') {
      setTypeError(true);
    }
  };

  const handleValue = (event: React.ChangeEvent<HTMLInputElement>) => {
    let value = event.target.value;
    setValueError(false);
    setValue(value);

    if (value === '') {
      setValueError(true);
    }
  };

  async function handleSubmit(event: FormEvent) {
    event.preventDefault();
    setLoading(true);

    if (!cep || !type || !value) {
      console.log('erro');
      setAlertShow(true);
      setLoading(false);
      return;
    }

    setAlertShow(false);

    try {
      // ?estrutura=fibrocimento-metalico&valor_conta=2900&cep=06543-001
      const response = await axios.get(
        `https://api2.77sol.com.br/busca-cep?estrutura=${type}&valor_conta=${value}&ceps=${cep}`
      );

      localStorage.setItem('results', JSON.stringify(response));
      navigate('/results');
    } catch (error) {
      alert('Tente novamente mais tarde: ' + error.message);
      setLoading(false);
    }
  }

  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <div className={styles.header}>
          <img src={logo} alt="Logotipo do Ignite" />
          <h1>Simulador solar</h1>
          <p>É simples e fácil!</p>

          {alertShow ? (
            <Alert severity="error">
              <AlertTitle>Erro</AlertTitle>
              Por favor, verifique o preenchimento dos campos
            </Alert>
          ) : (
            ''
          )}
        </div>
        <Box className={styles.box} component="form" onSubmit={handleSubmit}>
          <TextField
            fullWidth
            className={styles['field-input']}
            id="cep"
            label="CEP"
            variant="outlined"
            error={cepError}
            helperText={cepError ? 'CEP inválido' : ''}
            onChange={handleCep}
            onBlur={handleCep}
          />
          <FormControl fullWidth>
            <InputLabel id="type-label">Tipo de estrutura</InputLabel>
            <Select
              className={styles['field-select']}
              labelId="type-label"
              id="type"
              value={type}
              label="Tipo de estrutura"
              error={typeError}
              helperText={typeError ? 'Escolha o tipo de estrutura' : ''}
              onChange={handleType}
              onBlur={handleType}
            >
              {typeList.map((item) => (
                <MenuItem key={item.value} value={item.value}>
                  {item.name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <TextField
            fullWidth
            className={styles['field-input']}
            id="value"
            label="Valor da Conta"
            variant="outlined"
            error={valueError}
            helperText={valueError ? 'Preecha o valor da sua conta' : ''}
            onChange={handleValue}
            onBlur={handleValue}
          />
          <Submit loading={loading}>Simular</Submit>
        </Box>
      </div>
    </div>
  );
}
