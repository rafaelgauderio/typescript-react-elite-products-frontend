import { Categoria } from '../../tipos/Categoria';
import './styles.css';

type Props = {
  categoria: Categoria;
}

function CardCadastroCategoria({ categoria }: Props) {

  return (
    <div className="categoria-card">
      <div className="categoria-cadastro-container">
        <h3>{categoria.descricao}</h3>
      </div>
    </div>
  );
};

export default CardCadastroCategoria;