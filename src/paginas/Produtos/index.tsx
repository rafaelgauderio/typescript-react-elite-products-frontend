
import { Link } from 'react-router-dom';
import CardProduto from '../../componentes/CardProduto';
import { Produto } from '../../tipos/Produto';
import './styles.css';
import Paginacao from '../../componentes/Paginacao';
import { useCallback, useEffect, useState } from 'react';
import { PaginaSpring } from '../../tipos/biblioteca/spring';
//import { ParametrosAxios } from '../../tipos/biblioteca/axios';
import { BASE_URL, requisicaoPadraoBackend } from '../../util/requisicao';
import { AxiosRequestConfig } from 'axios';
//import CardLoader from './CardLoader';
import CatalogoLoader from './CataloLoader';
import BarraBuscaProdutos, { DadosBarraBusca } from '../../componentes/BarraBuscaProdutos';

export type MonitoredComponentData = {
    activePage: number;
    dadosBarraBusca: DadosBarraBusca;
}

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

    const [monitoredComponentData, setMonitoredComponentData] = useState<MonitoredComponentData>({
        activePage: 0,
        dadosBarraBusca: { descricao: "", embalagem: null, categoria: null }
    })

    const getProdutos = useCallback(requestProducts, [monitoredComponentData]);

    function requestProducts() {
        const config: AxiosRequestConfig = {
            method: 'GET',
            url: `${BASE_URL}/produtos`,
            params: {
                page: monitoredComponentData.activePage,
                size: 12,
                descricao: monitoredComponentData.dadosBarraBusca.descricao,
                embalagemId: monitoredComponentData.dadosBarraBusca.embalagem?.id,
                categoriaId: monitoredComponentData.dadosBarraBusca.categoria?.id
            },
        };
        setPaginaCarregando(true);
        requisicaoPadraoBackend(config)
            .then((response) => {
                setPagina(response.data);
            })
            .finally(() => {
                setPaginaCarregando(false);
            });
    }

    const actionChangePage = (pageNumber: number) => {
        setMonitoredComponentData({
            activePage: pageNumber,
            dadosBarraBusca: monitoredComponentData.dadosBarraBusca
        });
    }

    const actionSubmitForm = (formData: DadosBarraBusca): void => {
        setMonitoredComponentData({
            activePage: 0,
            dadosBarraBusca: formData

        });
    }


    /*
    function getProdutos(numeroPagina: number) {
        const parametros: AxiosRequestConfig = {
            //const parametros: ParametrosAxios = {

            url: `${BASE_URL}/produtos`,
            method: 'GET',
            params: {
                page: numeroPagina,
                size: 12,
            },
        };
        setPaginaCarregando(true);
        axios(parametros).then(resposta => {
            setPagina(resposta.data);
            console.log(pagina);
        })
            .finally(() => {
                setPaginaCarregando(false);
            });
    };
    */


    useEffect(() => {
        getProdutos() // montar o componente na página zero

    }, [getProdutos]);


    return (
        <>
            <div className="container w-100 h-100 my-4 my-lg-5 produtos-container">
                <div className="row titulo-container">
                    <h2>Conheça nos produtos</h2>
                </div>
                <div className="row produtos-barra-busca cadastro-produto-inserir-barra-pesquisa-container">
                    <BarraBuscaProdutos onSubmitFormularioBusca={actionSubmitForm}></BarraBuscaProdutos>
                </div>
                <div className="row">
                    {paginaCarregando === true ?
                        <>
                            <CatalogoLoader className="catalogo-loader"></CatalogoLoader>
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
                        elementosPorPagina={12}
                        onAtualizarPagina={actionChangePage}
                        forcarPagina={pagina?.number} />
                </div>
            </div>
        </>
    )
}


export default Produtos;