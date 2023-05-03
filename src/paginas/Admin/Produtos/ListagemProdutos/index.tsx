import { Link } from "react-router-dom";
import CardCadastroProduto from "../../../../componentes/CardCadastroProduto";
import './styles.css';

function ListagemProdutos() {

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
    }

    return (
        <>
            <div className="cadastro-produto-container">
                <Link to="/admin/produtos/inserir">
                    <button className="btn btn-primary botao-inserir">Inserir Novo</button>
                </Link>
                <div className="barra-pesquisa-produto">Caixa de Busca</div>
            </div>

            <CardCadastroProduto produto={produtoMocado}></CardCadastroProduto>
            <CardCadastroProduto produto={produtoMocado}></CardCadastroProduto>
            <CardCadastroProduto produto={produtoMocado}></CardCadastroProduto>
            <CardCadastroProduto produto={produtoMocado}></CardCadastroProduto>
        </>
    )
}

export default ListagemProdutos;