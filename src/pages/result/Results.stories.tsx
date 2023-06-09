import { ResultSimulatorPage } from './ResultSimulatorPage';
import { withRouter } from 'storybook-addon-react-router-v6';
let response = {
  data: {
    irradiancia: 5761,
    irradiancia_minima: 5242,
    irradiancia_maxima: 6379,
    integradores_regiao: 42,
    integradores_minimo: 1,
    integradores_maximo: 785,
    economia: 29520,
    potencial: 'MARAVILHOSO',
    valor_instalacao: 7075.162222222222,
    parcelamento: [
      {
        parcelas: 1,
        taxa_minina: 0,
        taxa_maxima: 3.5,
        valor_minimo: 7075.162222222222,
        valor_maximo: 7782.678444444445,
      },
      {
        parcelas: 24,
        taxa_minina: 0.79,
        taxa_maxima: 3.5,
        valor_minimo: 324.7873725422712,
        valor_maximo: 440.5903761284791,
      },
      {
        parcelas: 36,
        taxa_minina: 0.99,
        taxa_maxima: 3.5,
        valor_minimo: 234.59132790935226,
        valor_maximo: 348.69344668275795,
      },
      {
        parcelas: 48,
        taxa_minina: 0.99,
        taxa_maxima: 3.5,
        valor_minimo: 185.8995690874682,
        valor_maximo: 306.40021579448774,
      },
      {
        parcelas: 60,
        taxa_minina: 1.08,
        taxa_maxima: 3.5,
        valor_minimo: 160.8368461221775,
        valor_maximo: 283.6334991057828,
      },
    ],
    co2: 2.3238144,
    kit: [
      {
        id: 47723,
        qtde: 3,
        valor: 1436.22,
        categoria: 62,
        potenciaModulo: 455,
        valueTotal: 4308.66,
        descricao:
          '<p>Tensão Máxima de Potência:&nbsp;41.3V</p><p>Corrente de Operação:&nbsp;11,02A</p><p>Tensão de Curto Circuito: 49.3V</p><p>Eficiência:&nbsp;20.6%</p><p><br></p><p>Coeficiente de Temperatura:</p><p>Corrente:&nbsp;<span>+0.05</span><span>%/ º</span><span>C</span></p><p>Tensão&nbsp;&nbsp;-0.27<span>%/ º</span><span>C</span></p><p>Potencia:&nbsp;<span><span>-0.35%/ ºC</span></span></p><p><br></p><p>Dimensões:&nbsp;2108x1048x35mm</p><p>Peso:&nbsp;24.3kg</p>',
        datasheet:
          'https://storage77sol.s3.sa-east-1.amazonaws.com/loja/47723/datasheet/1632143606.pdf',
        url: 'https://storage77sol.s3.sa-east-1.amazonaws.com/loja/47723/imagens/1632143606.jpg',
        titulo: 'Módulo solar',
        custo: 711,
        estimativaEntrega: 20,
        fornecedor: 40,
        garantia: 25,
      },
      {
        id: 35771,
        qtde: 1,
        valor: 1080.69,
        categoria: 63,
        valueTotal: 1080.69,
        descricao:
          '<p>Itens:</p>\n<p>- PERFIL DE ALUMÍNIO CIS 037 (x2)</p>\n<p>- PERFIL DE ALUMÍNIO 036 (x2)</p>\n<p>- PERFIL DE ALUMÍNIO 034 (x2)</p>\n<p>- PERFIL DE ALUMÍNIO CIS 032 (x2)</p>\n<p>- PARAFUSO 8 X 60 (x6)</p>\n<p>- ARRUELA 5/16 INOX (x14)</p>\n<p>- PORCA SEXTAVADA INOX MA8 - NOVO\t(x6)</p>\n<p>- PARAFUSO CL SI INOX 304 MA 8X25 RI POL\t(x2)</p>\n<p>- PORCA PARA ESTRUTURA LAJE PLANA (x2)</p>\n<p>- PERFIL CANTONEIRA 3 MTS (x1)</p>\n<p>- CABO DE AÇO\t(x10)</p>\n<p>- CLIPS PARA CABO DE AÇO (x2)</p>\n<p>- ESTICADO (x2)</p>\n',
        datasheet: '',
        url: 'https://storage77sol.s3.sa-east-1.amazonaws.com/loja/35771/imagens/1618952232.png',
        titulo: 'Estrutura para instalação',
        custo: 534.99,
        estimativaEntrega: 20,
        fornecedor: 40,
        garantia: '12',
      },
      {
        id: 35481,
        qtde: 1,
        valor: 2020,
        categoria: 61,
        potenciaInversor: 1200,
        valueTotal: 2020,
        descricao:
          '<p><span>HOYMILES MI1200</span><br><span>ENTRADA DC:</span><br><span>MAX. POTÊNCIA DC DE ENTRADA (W): 380</span><br><span>MAX. TENSÃO DC DE ENTRADA (V): 60</span><br><span>TENSÃO DE START (V): 22</span><br><span>TENSÃO DE MPPT RANGE (V): 16-60</span><br><span>MAX. CORRENTE DE ENTRADA (A): 10,5X4</span><br><br><span>SAÍDA AC:</span><br><span>POTÊNCIA DE SAÍDA (W): 1200</span><br><span>TENSÃO NOMINAL DA REDE (V): 220</span><br><span>FREQUÊNCIA NOMINAL DA REDE (HZ): 50/60</span><br><span>FASES: MONOFÁSICO 220V</span><br><span>CORRENTE NOMINAL DE SAÍDA (A): 5A</span><br><span>MAX. CORRENTE DE SAÍDA (A): 5.76A</span><br><span>QUANTIDADE MÁXIMA POR BARRAMENTO: 4</span><br><span>THDI: &lt;3%</span><br><br><span>EFICIÊNCIA:</span><br><span>MAX. EFICIÊNCIA: 96,60%</span><br><span>MPPT EFICIÊNCIA: &gt;99,80%</span><br><br><span>DADOS GERAIS:</span><br><span>DIMENSÃO (MM): 280MM*176MM*33MM</span><br><span>PESO (KG): 3,75</span><br><span>TOPOLOGIA: SEM TRANSFORMADOR</span><br><span>TEMPERATURA AMBIENTE DE OPERAÇÃO: -40~65°C</span><br><span>RESFRIAMENTO: NATURAL</span><br><br><span>CARACTERÍSTICAS:</span><br><span>CONEXÃO DC: MC4</span><br><span>CONEXÃO AC: CONECTORES DE TERMINAL</span><br><span>MONITORAMENTO HOYMILES SISTEMA DTUW100</span><br><span>GARANTIA: 12 ANOS</span>?</p>',
        datasheet:
          'https://storage77sol.s3.sa-east-1.amazonaws.com/loja/35481/datasheet/1617887867.pdf',
        url: 'https://storage77sol.s3.sa-east-1.amazonaws.com/loja/35481/imagens/1617887867.png',
        titulo: 'Inversor solar',
        custo: 1000,
        estimativaEntrega: null,
        fornecedor: 40,
        garantia: '5',
      },
      {
        id: 55217,
        qtde: 1,
        valor: 98.98,
        categoria: 69,
        valueTotal: 98.98,
        descricao: '<p>-</p>',
        datasheet: '',
        url: 'https://saas77sol.s3.sa-east-1.amazonaws.com/store/products/55217_1639079005712458247.jpeg',
        titulo: 'Cabo Tronco',
        custo: 49,
        estimativaEntrega: null,
        fornecedor: 40,
        garantia: null,
      },
      {
        id: 55218,
        qtde: 1,
        valor: 32.32,
        categoria: 70,
        valueTotal: 32.32,
        descricao: '<p>-</p>',
        datasheet: '',
        url: 'https://saas77sol.s3.sa-east-1.amazonaws.com/store/products/55218_16390792701307715806.jpg',
        titulo: 'End Cap',
        custo: 16,
        estimativaEntrega: null,
        fornecedor: 40,
        garantia: null,
      },
      {
        id: 35781,
        qtde: 25,
        valor: 11.21,
        categoria: 65,
        valueTotal: 280.25,
        descricao:
          '<p>Tensão nominal: 1,8KV</p><p>Bitola: 6mm²</p><p>Isolação: 90ºC - composto termofixo extrudado a base de etilenopropileno de alto módulo.</p><p>Cobertura: PVC/ST2 - composto termoplástico extrudado à base de policloreto de vinila.</p>',
        datasheet: '',
        url: 'https://saas77sol.s3.sa-east-1.amazonaws.com/store/products/35781_1664477160248128356.jpg',
        titulo: 'Cabo solar C/C preto',
        custo: 5.55,
        estimativaEntrega: 20,
        fornecedor: 40,
        garantia: null,
      },
      {
        id: 35780,
        qtde: 25,
        valor: 11.21,
        categoria: 68,
        valueTotal: 280.25,
        descricao:
          '<p>Tensão nominal: 1,8KV</p><p>Bitola: 6mm²</p><p>Isolação: 90ºC - composto termofixo extrudado a base de etilenopropileno de alto módulo.</p><p>Cobertura: PVC/ST2 - composto termoplástico extrudado à base de policloreto de vinila.</p>',
        datasheet: '',
        url: 'https://saas77sol.s3.sa-east-1.amazonaws.com/store/products/35780_1664477267247489300.jpg',
        titulo: 'Cabo solar C/C vermelho',
        custo: 5.55,
        estimativaEntrega: 20,
        fornecedor: 40,
        garantia: null,
      },
      {
        id: 35757,
        qtde: 2,
        valor: 36.36,
        categoria: 64,
        valueTotal: 72.72,
        descricao:
          '<p><span>PAR DE CONECTORES STAUBLI MC4 MACHO/FÊMEA</span><br><br><span>DADOS ELÉTRICOS</span><br><span>- TENSÃO NOMINAL: 1500V</span><br><span>- CORRENTE NOMINAL: 39A PARA 4MM² / 6MM²</span><br><span>- GRAU DE PROTEÇÃO: IP68 (CONECTADO)</span><br><br><span>DADOS MECÂNICOS:</span><br><span>- SEÇÃO DO CONDUTOR: IEC 4MM² / 6MM²</span><br><span>- CONTATO: COBRE ESTANHADO</span><br><span>- TERMINAÇÃO: CRIMPAGEM</span><br>?</p>',
        datasheet: '',
        url: 'https://storage77sol.s3.sa-east-1.amazonaws.com/loja/35757/imagens/1618601067.jpeg',
        titulo: 'Par de conector MC4',
        custo: 18,
        estimativaEntrega: 20,
        fornecedor: 40,
        garantia: null,
      },
    ],
    potencyCC: 1.5,
    performance: 69.13,
    qtdeInversores: 1,
    indiceUnico: 0.6384928104575164,
    potenciaSistema: 1.4236111111111114,
  },
  status: 200,
  statusText: '',
  headers: {
    'access-control-allow-origin': '*',
    'access-control-expose-headers': '*',
    'apigw-requestid': 'FYYYLhRsGjQEMog=',
    'cache-control': 'no-cache, private',
    'content-length': '7229',
    'content-type': 'application/json',
    date: 'Tue, 23 May 2023 14:57:08 GMT',
    'x-powered-by': 'PHP/7.4.23',
  },
  config: {
    transitional: {
      silentJSONParsing: true,
      forcedJSONParsing: true,
      clarifyTimeoutError: false,
    },
    adapter: ['xhr', 'http'],
    transformRequest: [null],
    transformResponse: [null],
    timeout: 0,
    xsrfCookieName: 'XSRF-TOKEN',
    xsrfHeaderName: 'X-XSRF-TOKEN',
    maxContentLength: -1,
    maxBodyLength: -1,
    env: {},
    headers: {
      Accept: 'application/json, text/plain, */*',
    },
    method: 'get',
    url: 'https://api2.77sol.com.br/busca-cep?estrutura=fibrocimento-metalico&valor_conta=123&cep=62900000',
  },
  request: {},
};

export default {
  title: 'Pages/ResultSimulatorPage',
  component: ResultSimulatorPage,

  decorators: [withRouter],
  parameters: {
    reactRouter: {
      routePath: '/results',
    },
  },
};

/**
 * Variações
 */
export const Default = () => <ResultSimulatorPage data={response} />;
