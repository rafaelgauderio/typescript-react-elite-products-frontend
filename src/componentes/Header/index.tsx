import './styles.css';
import '@popperjs/core';
import 'bootstrap/js/src/collapse';
import { ReactComponent as LogoBranco } from "../../assets/imagens/logo-branco.svg";


function Header() {
    return (

        <nav className='navbar navbar-expand-lg navbar-light cabecalho'>
            <header className='container-fluid' >
                <a href="link logo" className='texto-logo'>
                    <LogoBranco className="logo-branco" width="80%" height="100%" />
                </a>
                
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
                            <a href="link home" className='ativo'>
                                HOME
                            </a>
                        </li>
                        <li>
                            <a href="link catalogo">
                                CATÁLOGO
                            </a>
                        </li>
                        <li>
                            <a href="link contato">
                                CONTATO
                            </a>
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
