import { Redirect, Route } from 'react-router-dom';

import { Regra, endpointTemRestricao, isUsuarioAutenticado } from '../../util/requisicao';

type Props = {
    children: React.ReactNode;
    path: string;
    roles?: Regra[];
}

const avisoRedirecionamento = () => {

    alert("Seu usuário não ter permissão para acessar essa rota.\n" +
    "Você será direcionado para página padrão após o login.\n" +
    "Contate o administrador do sistema se precisar do acesso.");
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
