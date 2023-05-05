import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { PaginaSpring } from "../../../tipos/biblioteca/spring";
import { requisicaoPadraoBackend } from "../../../util/requisicao";
import { Usuario } from "../../../tipos/Usuario";
import './styles.css';


function Usuarios() {
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
                <div key={usuario.id} className="usuario-card" >
                    {usuario.nome} {usuario.sobrenome} <br />
                    {usuario.email}
                    {usuario?.regras.map(regra => (
                        <p>{regra.permissao}</p>
                    ))}
                </div>
            ))}
        </div>
    );
};
export default Usuarios;