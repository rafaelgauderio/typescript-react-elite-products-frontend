import './styles.css';

function Header() {
  return (

    <nav className='navbar navbar-expand-md cabecalho'>
        <header className='container-fluid' >            
                <a href="link logo" className='texto-logo'>
                    <h3>Logo Melhoramentos</h3>
                </a>
                <div className='collapse navbar-collapse'>
                    <ul className='menu-principal navbar-nav offset-md-3'>
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
