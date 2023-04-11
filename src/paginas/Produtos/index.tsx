
import CardProduto from '../../componentes/CardProduto/intex';
import { Produto } from '../../tipos/Produto';
import './styles.css';


function Produtos() {

    const produtoMocado: Produto = {

        id: 1,
        descricao: "Papel Higiênico Rolo 7127",
        descricaoCompleta: "Papel higiênico em rolo 100% fibras virgens, Folha Dupla, Super Macio, Folhas Brancas",
        preco: null,
        largura: 10.0,
        metragem: 300,
        peso: null,
        fragrancia: null,
        imgUrl: "/assets/imagens/7127.png",
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
        "categorias": [
            {
                id: 10,
                descricao: "Folha Dupla"
            },
            {
                id: 2,
                descricao: "Papel Higiênico"
            },
            {
                id: 5,
                descricao: "Rolo"
            },
            {
                id: 6,
                descricao: "Excellence"
            }
        ]
    }



    return (
        <>
            <div className="container w-100 h-100 my-5 produtos-container">
                <h2>Listagem de Produtos</h2>
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <CardProduto produto={produtoMocado} />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <CardProduto produto={produtoMocado} />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <CardProduto produto={produtoMocado} />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <CardProduto produto={produtoMocado} />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <CardProduto produto={produtoMocado} />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <CardProduto produto={produtoMocado} />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <CardProduto produto={produtoMocado} />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <CardProduto produto={produtoMocado} />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <CardProduto produto={produtoMocado} />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <CardProduto produto={produtoMocado} />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <CardProduto produto={produtoMocado} />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <CardProduto produto={produtoMocado} />
                    </div>                   
                </div>
            </div>
        </>
    )
}


export default Produtos;