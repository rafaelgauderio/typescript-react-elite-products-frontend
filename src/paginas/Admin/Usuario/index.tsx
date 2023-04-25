import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { PaginaSpring } from "../../../tipos/biblioteca/spring";
import { requisicaoPadraoBackend } from "../../../util/requisicao";
import { Usuario } from "../../../tipos/Usuario";
import './styles.css';


const Usuarios = () => {
    const [pagina, setPagina] = useState<PaginaSpring<Usuario>>();

    useEffect(() => {
        const parametros: AxiosRequestConfig = {
            url: '/usuarios',
            withCredentials: true,
            params: {
                page: 0,
                size: 12,
            },
        };
        requisicaoPadraoBackend(parametros).then((resposta) => {
            setPagina(resposta.data);
        });
    }, []);
    return (
        <div className="usuario-container" >
            {pagina?.content.map((usuario) => (
                <div className="usuario-card" key={usuario.id}>
                    <p key={usuario.id}> {usuario.nome} {usuario.sobrenome} <br />
                        {usuario.email}</p>
                    {usuario?.regras.map(regra => (
                        <p>{regra.permissao}</p>
                    ))}
                </div>

            ))}
        </div>
    );
};
export default Usuarios;