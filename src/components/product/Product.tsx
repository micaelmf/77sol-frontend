import { Link } from 'react-router-dom';
import { Modal } from '../modal/Modal';
import styles from './Product.module.css';
import { useState } from 'react';

export interface Product {
  id: string | number;
  url: string;
  titulo: string;
  qtde: number;
  valor: number;
  categoria: string;
  datasheet: string;
  custo: number;
  estimativaEntrega: string;
  fornecedor: string;
  garantia: string;
  potenciaModulo: number;
  descricao: string;
}

export interface ProductProps {
  content: Product;
}

export function Product({ content }: ProductProps) {
  const [isModalVisible, setIsModalVisible] = useState(null);

  return (
    <div key={content.id.toString()} className={styles.product}>
      <img src={content.url} alt={content.titulo} />
      <p>{content.titulo}</p>
      <p>Id: {content.id}</p>
      <p>Quantidade: {content.qtde}</p>
      <p>Valor: {content.valor}</p>
      <p>Categoria:{content.categoria}</p>
      <button onClick={() => setIsModalVisible(content.id)}>Ver mais</button>
      {isModalVisible === content.id && (
        <Modal
          key={content.id.toString()}
          title={`Outros detalhes de ${content.titulo}`}
          onClose={() => setIsModalVisible(false)}
        >
          <p>
            Datasheet: <Link to={content.datasheet}>acessar </Link>
          </p>
          <p>Url: </p>
          <p>Custo: {content.custo}</p>
          <p>Estimativa de entrega: {content.estimativaEntrega}</p>
          <p>Fornecedor: {content.fornecedor}</p>
          <p>Garantia: {content.garantia}</p>
          <p>Potência Módulo: {content.potenciaModulo}</p>
          <p>Descricao:</p>
          <p>
            <span
              dangerouslySetInnerHTML={{ __html: content.descricao }}
            ></span>
          </p>
        </Modal>
      )}
    </div>
  );
}
