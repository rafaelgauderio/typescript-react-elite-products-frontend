import { toast } from 'react-toastify';
import './styles.css';
import { AxiosRequestConfig } from 'axios';
import { requisicaoPadraoBackend } from '../../util/requisicao';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import { Usuario } from '../../tipos/Usuario';

type Props = {
  usuario: Usuario;
  deletarComponenteUsuario: Function;
}

function CardCadastroUsuario({ usuario, deletarComponenteUsuario }: Props) {


  function deletarUsuario(usuarioId: number) {
    if (!window.confirm("Confirma exclusão de usuário: " + (usuario.nome + " " + usuario.sobrenome).toLocaleUpperCase())) {
      toast.info("Cancelada exclusão de Usuário.", {
        theme: "colored",
      });
      return;
    }

    const conficaracaoDelete: AxiosRequestConfig = {
      method: 'DELETE',
      url: `/usuarios/${usuarioId}`,
      withCredentials: true, // necessidade de login para excluir embalagem
    }

    requisicaoPadraoBackend(conficaracaoDelete)
      .then(() => {
        toast.success("Usuário " + (usuario.nome + " " + usuario.sobrenome).toLocaleUpperCase() + " excluído com sucesso", {
          theme: "colored",
        });
        deletarComponenteUsuario();
      }).catch(() => {

        Swal.fire({
          title: '<h1 id="titulo-sweetAlert">Erro ao tentar excluir!</h1>',
          icon: 'error',
          html: '<h5>Não foi possível excluir o usuário.</h5>',
        });
        toast.error("Não foi possível excluir o usuário.", {
          theme: "dark",
        });
      });
  }

  return (
    <div className="usuario-cadastro-card">
      <div className="usuario-cadastro-container">
        <h4>{usuario.nome + " " + usuario.sobrenome}</h4>
        <h4>{usuario.email}</h4>
        <h4>{usuario.regras.map(regra => (
          <p>{regra.permissao}</p>
        ))}</h4>

      </div>
      <div className="usuario-cadastro-botoes-container">
        <button className="usuario-cadastro-botao btn btn-outline-danger"
          disabled
          onClick={() => deletarUsuario(usuario.id)}>
          EXCLUIR

        </button>
        <Link to={`/admin/usuarios/${usuario.id}`}>
          <button className="usuario-cadastro-botao btn btn-outline-warning">
            EDITAR
          </button>
        </Link>
      </div>
    </div>
  );
};

export default CardCadastroUsuario;