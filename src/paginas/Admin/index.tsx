import Menu from './MenuAdmin';
import './styles.css';

function MenuAdmin() {

    return (
        <div className="container admin-container">
            <div className="admin-menu">
                <Menu />
            </div>
            <div className="admin-conteudo">
                <h1>Conteudo temporário do painel do admin</h1>
            </div>
        </div>
    );
}

export default MenuAdmin;