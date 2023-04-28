import { Switch } from 'react-router-dom';
import Menu from './MenuAdmin';
import './styles.css';
import Usuarios from './Usuario';
import RotaPrivada from '../../componentes/RotasPrivadas';

function MenuAdmin() {

    return (
        <div className="admin-container">
            <div className="admin-menu">
                <Menu />
            </div>
            <div className="admin-conteudo">
                <Switch>
                    <RotaPrivada path="/admin/sms">
                        <h1>Envio de SMS</h1>
                    </RotaPrivada>
                    <RotaPrivada path="/admin/produtos">
                        <h1>Cadastro de Produtos</h1>
                    </RotaPrivada>
                    <RotaPrivada path="/admin/embalagens">
                        <h1>Cadastro de Embalagens</h1>
                    </RotaPrivada>
                    <RotaPrivada path="/admin/categorias">
                        <h1>Cadastro de Categorias</h1>
                    </RotaPrivada>
                    <RotaPrivada path="/admin/usuarios" >
                        <h1>Dados dos Usuários</h1>
                        <Usuarios></Usuarios>
                    </RotaPrivada>
                </Switch>
            </div>
        </div>
    );
}

export default MenuAdmin;