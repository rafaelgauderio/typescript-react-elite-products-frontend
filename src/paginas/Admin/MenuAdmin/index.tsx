import { NavLink } from 'react-router-dom';
import './styles.css';
import { endpointTemRestricao } from '../../../util/requisicao';

function Menu() {

    return (
        <nav className="admin-menu-container">
            <ul>
                <li>
                    <NavLink to="/admin/sms" className="admin-menu-link">
                        <p>Email /sms</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/produtos" className="admin-menu-link">
                        <p>Produtos</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/embalagens" className="admin-menu-link">
                        <p>Embalagens</p>
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/admin/categorias" className="admin-menu-link">
                        <p>Categorias</p>
                    </NavLink>
                </li>
                {endpointTemRestricao(['ROLE_ADMIN_SISTEMA']) &&
                //n não vai renderizar o link para usuário se não tiver a permissao de admin de sistema
                    <li>
                        <NavLink to="/admin/usuarios" className="admin-menu-link">
                            <p>Usuários</p>
                        </NavLink>
                    </li>
                }
            </ul>
        </nav>
    )
}

export default Menu;