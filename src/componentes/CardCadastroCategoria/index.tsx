import { Categoria } from '../../tipos/Categoria';
import './styles.css';

type Props = {
  categoria: Categoria;
}

function CardCadastroCategoria({ categoria }: Props) {

  return (
    <div className="categoria-cadastro-card">
      <div className="categoria-cadastro-container">
        <h4>{categoria.descricao}</h4>
      </div>
      <div className="categoria-cadastro-botoes-container">
        <button className="categoria-cadastro-botao btn btn-outline-danger">
          EXCLUIR
        </button>
        <button className="categoria-cadastro-botao btn btn-outline-warning">
          EDITAR
        </button>
      </div>
    </div>
  );
};

export default CardCadastroCategoria;