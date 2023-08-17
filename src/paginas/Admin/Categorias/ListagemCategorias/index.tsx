import { AxiosRequestConfig } from "axios";
import CardCadastroCategoria from "../../../../componentes/CardCadastroCategoria";
import { requisicaoPadraoBackend } from "../../../../util/requisicao";
import { PaginaSpring } from "../../../../tipos/biblioteca/spring";
import { useCallback, useEffect, useState } from "react";
import { Categoria } from "../../../../tipos/Categoria";

import './styles.css';
import { Link } from "react-router-dom";

export default function ListagemCategorias() {

    const [pagina, setPagina] = useState<PaginaSpring<Categoria>>();

    const getCagegorias = useCallback(requisicaoCategorias, []);

    useEffect(() => {
        getCagegorias();
    }, [getCagegorias]);

    function requisicaoCategorias() {
        const configuracao: AxiosRequestConfig = {
            method: 'GET',
            url: '/categorias',
            params: {
                size: 50,
            }
        };
        requisicaoPadraoBackend(configuracao).then((resposta) => {
            setPagina(resposta.data);
        });
    };


    return (<>
        <div className="cadastro-categoria-container">
            <div className="cadastro-categoria-botoes-container">
                <Link to="/admin/categorias/inserir">
                    <button className="btn btn-primary botao-inserir">
                        Inserir Categoria
                    </button>
                </Link>
            </div>
            <div className="cadastro-categoria-container">
                {pagina?.content.map((categoria) => (
                    <div key={categoria.id}>
                        <CardCadastroCategoria
                            categoria={categoria}
                            deletarCategoriaComponente={getCagegorias}
                        />
                    </div>
                ))

                }

            </div >
        </div>

    </>
    );
}




