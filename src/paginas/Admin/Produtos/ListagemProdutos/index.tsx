import { Link } from "react-router-dom";
import CardCadastroProduto from "../../../../componentes/CardCadastroProduto";
import './styles.css';
import { AxiosRequestConfig } from "axios";
import { useEffect, useState } from "react";
import { requisicaoPadraoBackend } from "../../../../util/requisicao";
import { Produto } from "../../../../tipos/Produto";
import { PaginaSpring } from "../../../../tipos/biblioteca/spring";
import Paginacao from "../../../../componentes/Paginacao";

function ListagemProdutos() {

    /*
    const produtoMocado = {

        id: 1,
        descricao: "Papel Higiênico Rolo 7127",
        descricaoCompleta: "Papel higiênico em rolo 100% fibras virgens, Folha Dupla, Super Macio, Folhas Brancas",
        preco: null,
        largura: 10.0,
        metragem: 300,
        peso: null,
        fragrancia: null,
        imgUrl: "https://melhoramentoshigieners.com.br/imagens/7127.jpg",
        dataCadastro: "2023-03-01T16:00:00.123450Z",
        embalagens: [
            {
                id: 3,
                descricao: "2.400 metros"
            },
            {
                id: 1,
                descricao: "Fardo com 8 rolos"
            }
        ],
        categorias: [
            {
                id: 2,
                descricao: "Papel Higiênico"
            },
            {
                id: 6,
                descricao: "Excellence"
            },
            {
                id: 5,
                descricao: "Rolo"
            },
            {
                id: 10,
                descricao: "Folha Dupla"
            }
        ]
    };
    */

    const [pagina, setPagina] = useState<PaginaSpring<Produto>>();

    function getProdutos() {
        const configuracao: AxiosRequestConfig = {
            method: 'GET',
            url: '/produtos',
            params: {
                page: 0,
                size: 12,
            },
        };
        requisicaoPadraoBackend(configuracao).then((resposta) => {
            setPagina(resposta.data);
        });
    };

    // vai ficar monitorando o estado, quando deleter um produto, vai atulizar a listagem do bando de dados
    // assim vai renderizar a tela novamente sem ter clicar em atualziar a tela.
    useEffect(() => {
        getProdutos();
    }, []);



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
                            deletarProdutoComponente={() => { getProdutos() }}
                        />
                    </div>
                ))}
                <div className="paginacao-container">
                    <Paginacao />
                </div>
            </div>
        </>
    )
}

export default ListagemProdutos;