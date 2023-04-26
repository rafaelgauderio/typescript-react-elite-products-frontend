import { Redirect, Route } from 'react-router-dom';

import { isUsuarioAutenticado } from '../../util/requisicao';


type Props = {
    children: React.ReactNode;
    path: string;
}

function RotaPrivada({ children, path }: Props) {

    // somente renderizar os componentes filhos se o usuário estiver autenticado
    // senão redirecionar para a página de login
    return (
        <Route
            path={path}
            render={() =>
                isUsuarioAutenticado() === true ? (
                    <>{children}</>)
                    : (
                        <Redirect to="/admin/autenticar/login" />
                    )
            }
        />
    );
};

export default RotaPrivada;