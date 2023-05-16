import './styles.css';
import { Produto } from '../../tipos/Produto';
import RotuloCategoria from '../RotuloCategoria';
import RotuloEmbalagem from '../RotuloEmbalagem';
import { Link } from 'react-router-dom';
import { AxiosRequestConfig } from 'axios';
import { requisicaoPadraoBackend } from '../../util/requisicao';
import { toast } from 'react-toastify';


// Props são argumentos dos componentes Reacts.
// componentes reactes são funções javaScript
// funçao deletar um produto passada como prop do componente CardProduto
type Props = {
  produto: Produto;
  deletarProdutoComponente: Function;
};

//const rotaListagemProdutos : string = '/admin/produtos';

function CardProduto({ produto, deletarProdutoComponente }: Props) {


  function deletarProduto(produtoId: number) {

    if (window.confirm("Confirmar exclusão do produto: " + produto.descricao) === false) {
      toast.info('Cancelada exclusão de Produto', {
        theme: "colored",
      });
      return;
    }

    const configuracaoDelete: AxiosRequestConfig = {
      method: 'DELETE',
      url: `/produtos/${produtoId}`,
      withCredentials: true, // tem que estar logado para poder deletar
    };

    requisicaoPadraoBackend(configuracaoDelete).then(() => {
      toast.success('Produto excluído com sucesso', {
        theme: "colored",
      });
      deletarProdutoComponente();
      //historico.push(rotaListagemProdutos);
      
    }).catch(() => {
      toast.error("erro ao tentar excluir Produto!")
    });

  };


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
      <div className="produto-cadastro-botoes-container">
        <button className="produto-cadastro-botao btn btn-outline-danger"
          onClick={() => deletarProduto(produto.id)}>
          EXCLUIR
        </button>
        <Link to={`/admin/produtos/${produto.id}`}>
          <button className="produto-cadastro-botao btn btn-outline-warning">
            EDITAR
          </button>
        </Link>
      </div>
    </div >
  );
};

export default CardProduto;