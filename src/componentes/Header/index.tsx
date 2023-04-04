import './styles.css';

function Header() {
  return (

    <nav className='bg-primary'>
        <header>
            <div>
                <a href="link logo">
                    <h3>Logo Melhoramentos</h3>
                </a>
                <div>
                    <ul>
                        <li>
                            <a href="link home">
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
            </div>            
        </header>
    </nav>
  
  );
}

export default Header;
