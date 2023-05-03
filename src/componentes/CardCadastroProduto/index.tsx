import './styles.css';
import { Produto } from '../../tipos/Produto';
import RotuloCategoria from '../RotuloCategoria';
import RotuloEmbalagem from '../RotuloEmbalagem';

// Props são argumentos dos componentes Reacts.
// componentes reactes são funções javaScript

type Props = {
  produto: Produto;
}

function CardProduto({ produto }: Props) {

  return (
    <div className="produto-cadastro-card">
      <div className="produto-cadastro-container-superior">
        <img src={produto.imgUrl} alt="Imagem do Produto" />
      </div>
      <div className="produto-cadastro-descricao-categorias-container">
        <div className="produto-cadastro-container-inferior">
          <h4>{produto.descricao}</h4>
        </div>
        <div className="produto-cadastro-container-categorias">
          {produto.categorias.map(categoria => {
            return (
              <RotuloCategoria descricao={categoria.descricao} key={categoria.id} />
            )
          })}      
        </div>
        <div className="produto-cadastro-container-embalagens">
          {produto.embalagens.map(embalagem => {
            return (
              <RotuloEmbalagem descricao={embalagem.descricao} key={embalagem.id} />
            )
          })}      
        </div>
      </div>
    </div>
  );
};

export default CardProduto;