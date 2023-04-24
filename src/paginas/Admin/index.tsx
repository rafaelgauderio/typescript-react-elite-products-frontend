import { Route, Switch } from 'react-router-dom';
import Menu from './MenuAdmin';
import './styles.css';
import Usuarios from './Usuario';

function MenuAdmin() {

    return (
        <div className="admin-container">
            <div className="admin-menu">
                <Menu />
            </div>
            <div className="admin-conteudo">
                <Switch>
                    <Route path="/admin/sms">
                        <h1>Envio de SMS</h1>
                    </Route>
                    <Route path="/admin/produtos">
                        <h1>Cadastro de Produtos</h1>
                    </Route>
                    <Route path="/admin/embalagens">
                        <h1>Cadastro de Embalagens</h1>
                    </Route>
                    <Route path="/admin/categorias">
                        <h1>Cadastro de Categorias</h1>
                    </Route>
                    <Route path="/admin/usuarios">
                        <h1>Dados dos Usuários</h1>
                        <Usuarios></Usuarios>
                    </Route>
                </Switch>
            </div>
        </div>
    );
}

export default MenuAdmin;