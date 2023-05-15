import { Link } from "react-router-dom";
import CardCadastroProduto from "../../../../componentes/CardCadastroProduto";
import './styles.css';
import { AxiosRequestConfig } from "axios";
import { useCallback, useEffect, useState } from "react";
import { requisicaoPadraoBackend } from "../../../../util/requisicao";
import { Produto } from "../../../../tipos/Produto";
import { PaginaSpring } from "../../../../tipos/biblioteca/spring";
import Paginacao from "../../../../componentes/Paginacao";
import BarraBuscaProdutos, { DadosBarraBusca } from "../../../../componentes/BarraBuscaProdutos";

// vai ter 2 componentes monitorados para rendezirar o listagem dos produtos,
// o componente de barra de busca e o componente de paginação
export type DadosComponentesMonitorados = {
    paginaAtiva: number;
    dadosBarraBusca: DadosBarraBusca;
}

function ListagemProdutos() {

    const [pagina, setPagina] = useState<PaginaSpring<Produto>>();

    const [dadosComponentesMonitorados, setDadosComponentesMonitorados] = useState<DadosComponentesMonitorados>({
        paginaAtiva: 0, // quando montar o componente pela primeira vez vai ser na página de indice zero por default
        dadosBarraBusca: { descricao: "", embalagem: null, categoria: null }
    });


    const getProdutos = useCallback(requisicaoProdutos, [dadosComponentesMonitorados]);
    // usar o useCallback para não entrar em loop infinito, ele guarda a mesma referência da função,
    // se a referência chamada for a mesma, não monta novamente o componente
    // useCallback tem 2 argumentos. uma função e uma lista de dependências
    function requisicaoProdutos() {
        const configuracao: AxiosRequestConfig = {
            method: 'GET',
            url: '/produtos',
            params: {
                page: dadosComponentesMonitorados.paginaAtiva,
                size: 3,
                descricao: dadosComponentesMonitorados.dadosBarraBusca.descricao,
                embalagemId: dadosComponentesMonitorados.dadosBarraBusca.embalagem?.id,
                categoriaId: dadosComponentesMonitorados.dadosBarraBusca.categoria?.id
            },
        };
        requisicaoPadraoBackend(configuracao).then((resposta) => {
            setPagina(resposta.data);
        });
    };

    function actionPaginaAlterada(numeroPagina: number) {
        setDadosComponentesMonitorados({
            paginaAtiva: numeroPagina // atualizada o componente de acordo com o número da pagina que a requisição ao backend retornar
            , dadosBarraBusca: dadosComponentesMonitorados.dadosBarraBusca
        });
    };

    function actionEnviarFormulario(dadosFormulario: DadosBarraBusca) : void {
        setDadosComponentesMonitorados({
            paginaAtiva: 0,
            dadosBarraBusca: dadosFormulario
        });
    };


    // vai ficar monitorando o estado, quando deletar um produto, vai atualizar a listagem do bando de dados
    // toda vez que alterar o componente, renderiza a tela novamente
    // assim vai renderizar a tela novamente sem ter clicar em atualizar a tela.
    useEffect(() => {
        getProdutos();
    }, [getProdutos]);


    return (
        <>
            <div className="cadastro-produto-container">
                <div className="cadastro-produto-inserir-barra-pesquisa-container">
                    <Link to="/admin/produtos/inserir">
                        <button className="btn btn-primary botao-inserir">
                            Inserir Novo
                        </button>
                    </Link>
                    <BarraBuscaProdutos onSubmitFormularioBusca={actionEnviarFormulario} />
                </div>

                <div className="row">
                    {pagina?.content.map((produto) => (
                        <div key={produto.id}>
                            <CardCadastroProduto
                                produto={produto}
                                deletarProdutoComponente={getProdutos}
                            />
                        </div>

                    ))}
                </div>
                <div className="paginacao-container">
                    <Paginacao
                        totalPaginas={(pagina) ? pagina.totalPages : 0}
                        elementosPorPagina={4}
                        onAtualizarPagina={actionPaginaAlterada}
                        forcarPagina={pagina?.number}
                    />
                </div>
            </div>

        </>
    )
};


export default ListagemProdutos;