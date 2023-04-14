import './styles.css';

function Menu() {

    return (
        <nav className="admin-menu-container">
            <ul>
                <li>
                    <a href="link-sms-email" className="admin-menu-link ativo">
                        <p>Email /sms</p>
                    </a>
                </li>


                <li>
                    <a href="link-produtos" className="admin-menu-link">
                        <p>Produtos</p>
                    </a>
                </li>
                <li>
                    <a href="link-embalagens" className="admin-menu-link">
                        <p>Embalagens</p>
                    </a>
                </li>
                <li>
                    <a href="link-categorias" className="admin-menu-link">
                        <p>Categorias</p>
                    </a>
                </li>
                <li>
                    <a href="link-usuarios" className="admin-menu-link">
                        <p>Usuários</p>
                    </a>
                </li>
            </ul>
        </nav>
    )
}

export default Menu;