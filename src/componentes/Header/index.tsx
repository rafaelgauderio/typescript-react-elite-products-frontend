import './styles.css';
import '@popperjs/core';
import 'bootstrap/js/src/collapse';
import { ReactComponent as LogoBranco } from "../../assets/imagens/logo-branco.svg";
import { Link, NavLink } from 'react-router-dom';
import { getDadosTokenJwt, isUsuarioAutenticado, removerDadosAutenticacao } from '../../util/autenticacao';
import { useContext, useEffect } from 'react';
import historico from '../../util/historico';
import { ContextoGlobalAutenticado } from '../../ContextoGlobal';


function Header() {

    // estado inicial o usuário não está autenticado
   

    const {dadosAutenticacaoGlobais, setDadosAutenticacaoGlobais} = useContext(ContextoGlobalAutenticado);

    useEffect(function () {
        if (isUsuarioAutenticado() === true) {
            setDadosAutenticacaoGlobais(
                {
                    dadosTokenJwt: getDadosTokenJwt(),
                    usuarioAutenticado: true
                });
        } else {
            setDadosAutenticacaoGlobais({
                usuarioAutenticado: false,
            });
        }
        // adicionar os dados de autenticação globais a lista de dependência
        // ao alterar algum valor desse componente 
        // dispara a função on click e aparece o user_name e altera o botão de login para sair
    }, [setDadosAutenticacaoGlobais]);

    function clicarEmSair(event: React.MouseEvent<HTMLAnchorElement>) {
        event.preventDefault(); // previne o comportamento padrão de clicar no link (ir para o link de destino )
        setDadosAutenticacaoGlobais({
            usuarioAutenticado: false,
        });
        removerDadosAutenticacao();
        // direcionar par ao home depois de clicar em sair
        historico.push("/");

    }

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
                    <ul className='menu-principal navbar-nav offset-md-1'>
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
                            <NavLink to="/empresa" activeClassName='ativo'>
                                QUEM SOMOS
                            </NavLink>
                        </li>
                        <li>
                            <NavLink to="/admin" activeClassName='ativo'>
                                PAINEL ADMIN
                            </NavLink>
                        </li>
                        <div className='menu-login-sair-mobile'>
                            <li>
                                <NavLink to="/admin/autenticar/login">
                                    LOGIN
                                </NavLink>
                            </li>
                            <li>
                                <NavLink to="/" onClick={clicarEmSair}>
                                    SAIR
                                </NavLink>
                            </li>
                        </div>
                    </ul>

                </div>
                <div className="menu-logar-sair">
                    {(dadosAutenticacaoGlobais.usuarioAutenticado) === true ? (
                        <>
                            <a className="btn btn-info" href="/" onClick={clicarEmSair} >
                                Sair
                            </a>
                            < br />
                            <span className="menu-email-cliente">
                                {dadosAutenticacaoGlobais.dadosTokenJwt?.user_name}
                            </span>
                        </>
                    ) : <Link className="btn btn-info" to="/admin/autenticar">Login</Link>}
                </div>
            </header>
        </nav>

    );
}

export default Header;
