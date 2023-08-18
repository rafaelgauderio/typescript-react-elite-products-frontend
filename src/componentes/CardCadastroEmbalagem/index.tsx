import { toast } from 'react-toastify';
import './styles.css';
import { AxiosRequestConfig } from 'axios';
import { requisicaoPadraoBackend } from '../../util/requisicao';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { Embalagem } from '../../tipos/Embalgem';

type Props = {
  embalagem: Embalagem;
  deletarEmbalagemComponente: Function;
}

function CardCadastroEmbalagem({ embalagem, deletarEmbalagemComponente }: Props) {


  function deletarEmbalagem(embalagemId: number) {
    if (!window.confirm("Confirma exclusão de embalagem: " + embalagem.descricao.toLocaleUpperCase())) {
      toast.info("Cancelada exclusão de Embalagem.", {
        theme: "colored",
      });
      return;
    }

    const conficaracaoDelete: AxiosRequestConfig = {
      method: 'DELETE',
      url: `/embalagens/${embalagemId}`,
      withCredentials: true, // necessidade de login para excluir embalagem
    }

    requisicaoPadraoBackend(conficaracaoDelete)
      .then(() => {
        toast.success("Embalagem " + embalagem.descricao.toUpperCase() + " excluída com sucesso", {
          theme: "colored",
        });
        deletarEmbalagemComponente();
      }).catch(() => {

        Swal.fire({
          title: '<h1 id="titulo-sweetAlert">Erro ao tentar excluir!</h1>',
          icon: 'error',
          html: '<h5>Não é possível excluir embalagem que já possui produto cadastrado.</h5>',
        });
        toast.error("Não é possivel excluir embalagem que já possui produto cadastrado.", {
          theme: "dark",
        });
      });
  }

  return (
    <div className="embalagem-cadastro-card">
      <div className="embalagem-cadastro-container">
        <h4>{embalagem.descricao}</h4>
      </div>
      <div className="embalagem-cadastro-botoes-container">
        <button className="embalagem-cadastro-botao btn btn-outline-danger"
          //deletar produto pelo Id da categoria
          onClick={() => deletarEmbalagem(embalagem.id)}>
          EXCLUIR
        </button>
        <Link to={`/admin/embalagens/${embalagem.id}`}>
          <button className="embalagem-cadastro-botao btn btn-outline-warning">
            EDITAR
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardCadastroEmbalagem;