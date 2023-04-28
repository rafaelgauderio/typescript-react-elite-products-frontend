import { Redirect, Route } from 'react-router-dom';
import Swal from 'sweetalert2';
import { Regra, endpointTemRestricao, isUsuarioAutenticado } from '../../util/autenticacao';
import './styles.css';

type Props = {
    children: React.ReactNode;
    path: string;
    roles?: Regra[];
}

const avisoRedirecionamento = () => {

    /*
    alert("Seu usuário não possui permissão para acessar essa rota.\n" +
        "Você será direcionado para página padrão após o login.\n" +
        "Dúvidas? Contate o administrador do sistema.");
    */
    Swal.fire({
        title: '<h1>Acesso Negado</h1>',
        icon: 'error',
        html: '<h6>Seu usuário não possui permissão para acessar essa rota.<br />Você será redirecionado para página padrão do painel do admin.<br />Dúvidas? Contate o administrador do sistema. </h6>',
    });
}

function RotaPrivada({ children, path, roles = [] }: Props) {

    // somente renderizar os componentes filhos se o usuário estiver autenticado
    // senão redirecionar para a página de login
    return (
        <Route
            path={path}
            render={({ location }) =>
                // se usuario não está autenticado e acessar um rota protegida
                // é direcionado para login
                isUsuarioAutenticado() === false ? (
                    <Redirect to={{
                        pathname: "/admin/autenticar/login",
                        state: { from: location }
                    }} />) :
                    // se estiver logado, mas não tiver permissao espefifica
                    // redireciona para pagina de envio de sms
                    endpointTemRestricao(roles) === false ? (
                        avisoRedirecionamento(),
                        <Redirect to="/admin/sms" />

                    ) : (
                        // caso contrario renderiza o componente
                        <>{children}</>
                    )
            }
        />
    );
};

export default RotaPrivada;
