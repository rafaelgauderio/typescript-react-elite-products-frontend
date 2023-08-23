import { Switch } from 'react-router-dom';
import Menu from './MenuAdmin';
import './styles.css';
import RotaPrivada from '../../componentes/RotasPrivadas';
import ProdutosCadastro from './Produtos';
import CategoriasCadastro from './Categorias';
import EmbalagensCadastro from './Embalagens';
import UsuariosCadastro from './Usuarios';


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
                        <ProdutosCadastro></ProdutosCadastro>
                    </RotaPrivada>
                    <RotaPrivada path="/admin/embalagens">
                        <EmbalagensCadastro></EmbalagensCadastro>
                    </RotaPrivada>
                    <RotaPrivada path="/admin/categorias">
                        <CategoriasCadastro></CategoriasCadastro>
                    </RotaPrivada>
                    <RotaPrivada path="/admin/usuarios" roles={['ROLE_ADMIN_SISTEMA']}>
                        <UsuariosCadastro></UsuariosCadastro>
                    </RotaPrivada>                
                </Switch>
            </div>
        </div>
    );
}

export default MenuAdmin;