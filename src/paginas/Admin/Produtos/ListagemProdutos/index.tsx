import { Link } from "react-router-dom";
import CardCadastroProduto from "../../../../componentes/CardCadastroProduto";
import './styles.css';
import { AxiosRequestConfig } from "axios";
import { useCallback, useEffect, useState } from "react";
import { requisicaoPadraoBackend } from "../../../../util/requisicao";
import { Produto } from "../../../../tipos/Produto";
import { PaginaSpring } from "../../../../tipos/biblioteca/spring";
import Paginacao from "../../../../componentes/Paginacao";

// vai ter 2 componentes monitorados para rendezirar o listagem dos produtos,
// o componente de barra de busca e o componente de paginação
export type DadosComponentesMonitorados = {
    paginaAtiva: number;
}

function ListagemProdutos() {

    const [pagina, setPagina] = useState<PaginaSpring<Produto>>();

    const [dadosComponentesMonitorados, setDadosAutenticacaoGlobais] = useState<DadosComponentesMonitorados>({
        paginaAtiva: 0, // quando montar o componente pela primeira vez vai ser na página de indice zero por default
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
                size: 4,
            },
        };
        requisicaoPadraoBackend(configuracao).then((resposta) => {
            setPagina(resposta.data);
        });
    };

    function actionPaginaAlterada(numeroPagina: number) {
        setDadosAutenticacaoGlobais({
            paginaAtiva: numeroPagina // atualizada o componente de acordo com o número da pagina que a requisição ao backend retornar
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
                <Link to="/admin/produtos/inserir">
                    <button className="btn btn-primary botao-inserir">
                        Inserir Novo
                    </button>
                </Link>
                <div className="barra-pesquisa-produto">Caixa de Busca</div>
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
                <div className="paginacao-container">
                    <Paginacao
                        totalPaginas={(pagina) ? pagina.totalPages : 0}
                        elementosPorPagina={4}
                        onAtualizarPagina={actionPaginaAlterada}
                    />
                </div>
            </div>
        </>
    )
};


export default ListagemProdutos;