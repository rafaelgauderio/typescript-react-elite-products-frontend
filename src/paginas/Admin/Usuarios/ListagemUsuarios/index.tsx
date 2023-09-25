import { AxiosRequestConfig } from "axios";
import { useEffect, useState, useCallback } from "react";

import './styles.css';
import { PaginaSpring } from "../../../../tipos/biblioteca/spring";
import { Usuario } from "../../../../tipos/Usuario";
import { requisicaoPadraoBackend } from "../../../../util/requisicao";
import { Link } from "react-router-dom";
import CardCadastroUsuario from "../../../../componentes/CardCadastroUsuarios";


function Usuarios() {

    const [pagina, setPagina] = useState<PaginaSpring<Usuario>>();

    const getUsuarios = useCallback(requisicaoUsuarios, []);

    useEffect(() => {
        getUsuarios();
    }, [getUsuarios]);


    function requisicaoUsuarios() {

        const configuracao: AxiosRequestConfig = {
            method: 'GET',
            url: '/usuarios',
            withCredentials: true,
            params: {
                size: 50,
            }

        };
        requisicaoPadraoBackend(configuracao)
            .then((response) => {
                setPagina(response.data);
            });
    };

    return (
        <div className="usuario-container" >
            <div className="cadastro-usuario-botoes-container">
                <Link to="/admin/usuarios/inserir">
                    <button className="btn btn-primary botao-inserir-usuario">
                        Inserir Novo
                    </button>
                </Link>
            </div>
            <div className="cadastro-usuario-container">
                {pagina?.content.map((user) => (
                    <div key={user.id}>
                        <CardCadastroUsuario
                            usuario={user}
                            deletarComponenteUsuario={getUsuarios}
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};
export default Usuarios;

