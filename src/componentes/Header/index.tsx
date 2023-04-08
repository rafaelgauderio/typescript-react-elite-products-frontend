import './styles.css';
import '@popperjs/core';
import 'bootstrap/js/src/collapse';
import { ReactComponent as LogoBranco } from "../../assets/imagens/logo-branco.svg";
import { Link, NavLink } from 'react-router-dom';


function Header() {
    return (

        <nav className='navbar navbar-expand-lg navbar-light cabecalho'>
            <header className='container-fluid' >
                <Link to="/" className='texto-logo'>
                    <LogoBranco className="logo-branco" width="80%" height="100%" />
                </Link>

                <button
                    className="navbar-toggler"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#menu-hamburguer-navbar"
                    aria-controls="menu-hamburguer-navbar"
                    aria-expanded="false"
                    arial-label="Toggle navigation"
                >
                    <p>menu</p>
                    <span className="navbar-toggler-icon"></span>
                </button>

                <div id="menu-hamburguer-navbar" className='collapse navbar-collapse'>
                    <ul className='menu-principal navbar-nav offset-md-2'>
                        <li>
                            <NavLink to="/" activeClassName='ativo' exact>
                                HOME
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/produtos" activeClassName='ativo'>
                                CATÁLOGO
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/contatos" activeClassName='ativo'>
                                CONTATO
                            </NavLink>
                        </li>
                        <li>
                            <a href="link quem_somos">
                                QUEM SOMOS
                            </a>
                        </li>
                        <li>
                            <a href="link admim">
                                PAINEL ADMIN
                            </a>
                        </li>
                    </ul>
                </div>
            </header>
        </nav>

    );
}

export default Header;
