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
        <div className="usuario-container">
            {pagina?.content.map((item) => (
                <>
                    <div className="usuario-card">
                        <p key={item.id}>{item.nome} {item.sobrenome}</p>
                        <p key={item.id}>{item.email}</p>
                        {item?.regras.map(regra => (
                            <p className="usuario-regra">{regra.permissao}</p>
                        ))}
                    </div>
                </>
            ))}
        </div>
    );
};
export default Usuarios;