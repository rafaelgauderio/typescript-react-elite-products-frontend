import { AxiosRequestConfig } from "axios";
import { requisicaoPadraoBackend } from "../../../../util/requisicao";
import { PaginaSpring } from "../../../../tipos/biblioteca/spring";
import { useCallback, useEffect, useState } from "react";

import './styles.css';
import { Link } from "react-router-dom";
import { Embalagem } from "../../../../tipos/Embalgem";
import CardCadastroEmbalagem from "../../../../componentes/CardCadastroEmbalagem";

export default function ListagemEmbalagens() {

    const [pagina, setPagina] = useState<PaginaSpring<Embalagem>>();

    const getEmbalagens = useCallback(requisicaoEmbalagens, []);

    useEffect(() => {
        getEmbalagens();
    }, [getEmbalagens]);

    function requisicaoEmbalagens() {
        const configuracao: AxiosRequestConfig = {
            method: 'GET',
            url: '/embalagens',
            params: {
                size: 50,
            }
        };
        requisicaoPadraoBackend(configuracao).then((resposta) => {
            setPagina(resposta.data);
        });
    };


    return (<>
        <div className="embalagem-container">
            <div className="cadastro-embalagem-botoes-container">
                <Link to="/admin/embalagens/inserir">
                    <button className="btn btn-primary botao-inserir-embalagem">
                        Inserir Embalagem
                    </button>
                </Link>
            </div>
            <div className="cadastro-embalagem-container">

                {pagina?.content.map((emb) => (
                    <div key={emb.id}>
                        <CardCadastroEmbalagem
                            embalagem={emb}
                            deletarEmbalagemComponente={getEmbalagens} />
                    </div>
                ))}

            </div >
        </div>

    </>
    );
}




