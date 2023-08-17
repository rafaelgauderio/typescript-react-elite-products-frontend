import { toast } from 'react-toastify';
import { Categoria } from '../../tipos/Categoria';
import './styles.css';
import { AxiosRequestConfig } from 'axios';
import { requisicaoPadraoBackend } from '../../util/requisicao';
import Swal from 'sweetalert2';

type Props = {
  categoria: Categoria;
  deletarCategoriaComponente: Function;
}

function CardCadastroCategoria({ categoria, deletarCategoriaComponente }: Props) {

  
  function deletarCategoria(categoriaId: number) {
    if (!window.confirm("Confirma exclusão de categoria: " + categoria.descricao.toLocaleUpperCase())) {
      toast.info("Cancelada exclusão de Categoria.", {
        theme: "colored",
      });
      return;
    }

    const conficaracaoDelete: AxiosRequestConfig = {
      method: 'DELETE',
      url: `/categorias/${categoriaId}`,
      withCredentials: true, // necessidade de login para excluir categoria
    }

    requisicaoPadraoBackend(conficaracaoDelete)
      .then(() => {
        toast.success("Categoria " + categoria.descricao.toUpperCase() + " excluída com sucesso", {
          theme: "colored",
        });
        deletarCategoriaComponente();
      }).catch(() => {

        Swal.fire({
          title: '<h1>Erro ao tentar excluir</h1>',
          icon: 'error',
          html: '<h5>Não é possível excluir categoria que já possui produto cadastrado.</h5>',
      });
        toast.error("Não é possivel excluir Categoria que já possui produto cadastrado.", {
          theme: "dark",
        }) ;
      });
  }

  return (
    <div className="categoria-cadastro-card">
      <div className="categoria-cadastro-container">
        <h4>{categoria.descricao}</h4>
      </div>
      <div className="categoria-cadastro-botoes-container">
        <button className="categoria-cadastro-botao btn btn-outline-danger"
        //deletar produto pelo Id da categoria
        onClick={ () => deletarCategoria(categoria.id)}>
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