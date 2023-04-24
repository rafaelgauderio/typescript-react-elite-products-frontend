import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { PaginaSpring } from "../../../tipos/biblioteca/spring";
import { Usuario } from '../../../tipos/usuario';
import { requisicaoPadraoBackend } from "../../../util/requisicao";


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
        <div>
            {pagina?.content.map((item) => (
                <>
                    <p key={item.id}>{item.nome} {item.sobrenome}</p>
                    <p>{item.email}<br /></p>
                </>
            ))}
        </div>
    );
};
export default Usuarios;