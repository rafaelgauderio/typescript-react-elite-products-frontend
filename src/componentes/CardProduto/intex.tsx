import './styles.css';
import  ImagemProduto from '../../assets/imagens/7210.png';

function CardProduto ()  {
    
  return (
    <div className="produto-card">
      <div className="produto-container-superior">
        <img src={ImagemProduto} alt="Nome do Produto" />
      </div>
      <div className="produto-container-inferior">
        <h4>Toalha de Papel Interfolhada Folha Dupla 7210</h4>        
      </div>
    </div>
  );
};

export default CardProduto;