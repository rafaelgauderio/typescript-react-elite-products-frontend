import './styles.css';
import { Produto } from '../../tipos/Produto';


// Props são argumentos dos componentes Reacts.
// componentes reactes são funções javaScript

type Props = {
  produto : Produto;
  
}

function CardProduto ({produto} : Props)  {
    
  return (
    <div className="produto-card">
      <div className="produto-container-superior">
        <img src={require('../../assets/imagens/7127.png')} alt="Nome do Produto" />
      </div>
      <div className="produto-container-inferior">
        <h4>{produto.descricao}</h4>        
      </div>
    </div>
  );
};

export default CardProduto;