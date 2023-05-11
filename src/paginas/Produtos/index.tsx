
import { Link } from 'react-router-dom';
import CardProduto from '../../componentes/CardProduto';
import { Produto } from '../../tipos/Produto';
import './styles.css';
import Paginacao from '../../componentes/Paginacao';
import { useEffect, useState } from 'react';
import { PaginaSpring } from '../../tipos/biblioteca/spring';
import { ParametrosAxios } from '../../tipos/biblioteca/axios';
import { BASE_URL } from '../../util/requisicao';
import axios from 'axios';
import CardLoader from './CardLoader';

function Produtos() {

    /*
    const produtoMocado: Produto = {

        id: 1,
        descricao: "Papel Higiênico Rolo 7127",
        descricaoCompleta: "Papel higiênico em rolo 100% fibras virgens, Folha Dupla, Super Macio, Folhas Brancas",
        preco: null,
        largura: 10.0,
        metragem: 300,
        peso: null,
        fragrancia: null,
        imgUrl: require("../../assets/imagens/7127.png"),
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
    */

    const [paginaCarregando, setPaginaCarregando] = useState(false);
    const [pagina, setPagina] = useState<PaginaSpring<Produto>>();


    function getProdutos(numeroPagina: number) {
        const parametros: ParametrosAxios = {

            url: `${BASE_URL}/produtos`,
            metodo: 'GET',
            parametros: {
                page: numeroPagina,
                size: 12,
            },
        };
        setPaginaCarregando(true);
        axios(parametros).then(resposta => {
            setPagina(resposta.data);
            //console.log(pagina);
        })
            .finally(() => {
                setPaginaCarregando(false);
            });
    };


    useEffect(() => {
        getProdutos(0) // montar o componente na página zero
    }, []);


    return (
        <>
            <div className="container w-100 h-100 my-4 my-lg-5 produtos-container">
                <div className="row titulo-container">
                    <h2>Conheça nos produtos</h2>
                </div>
                <div className="row">
                    {paginaCarregando ?
                        <>
                            <CardLoader />
                            <CardLoader />
                            <CardLoader />
                        </>
                        : (
                            pagina?.content.map(produto => {
                                return (

                                    <div className="col-xl-3 col-lg-4 col-sm-6">
                                        <Link to={`/produtos/${produto.id}`}>
                                            <CardProduto produto={produto} key={produto.id} />
                                        </Link>
                                    </div>
                                );
                            })
                        )}
                </div>
                <div className="row icones-paginacao">
                    <Paginacao
                        totalPaginas={(pagina) ? pagina.totalPages : 0}
                        elementosPorPagina={4}
                        onAtualizarPagina={getProdutos} />
                </div>
            </div>
        </>
    )
}


export default Produtos;