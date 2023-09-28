import { NavLink } from 'react-router-dom';
import './styles.css';
import { endpointTemRestricao } from '../../../util/autenticacao';

function Menu() {

    // renderizacao condicional do componete. Senão tiver a permissão necessária nem renderiza o componete para o usuário    
    return (
        <nav className="admin-menu-container">
            <ul>
                <li>
                    <NavLink to="/admin/sms" className="admin-menu-link">
                        <p>Email /sms</p>
                    </NavLink>
                </li>
                {endpointTemRestricao(['ROLE_GERENTE_LOJA']) &&
                    <li>
                        <NavLink to="/admin/produtos" className="admin-menu-link">
                            <p>Produtos</p>
                        </NavLink>
                    </li>
                }
                {endpointTemRestricao(['ROLE_GERENTE_LOJA']) &&
                    <li>
                        <NavLink to="/admin/embalagens" className="admin-menu-link">
                            <p>Embalagens</p>
                        </NavLink>
                    </li>
                }
                {endpointTemRestricao(['ROLE_GERENTE_LOJA']) &&
                    <li>
                        <NavLink to="/admin/categorias" className="admin-menu-link">
                            <p>Categorias</p>
                        </NavLink>
                    </li>
                }
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