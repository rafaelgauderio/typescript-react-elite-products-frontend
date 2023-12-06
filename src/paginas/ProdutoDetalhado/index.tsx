import { Link, useParams } from 'react-router-dom';
import './styles.css';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../../util/requisicao';
import { Produto } from '../../tipos/Produto';
import axios from 'axios';
import ProdutoImageLoader from '../Produtos/CardLoader';
import ProdutoDescricaoLoader from './ProdutoDescricaoLoader';
import { formatarLargura, formatarMetragem } from '../../util/formatador';

type ParametrosUrl = {
    produtoId: string;
};

function ProdutoDetalhado() {

    const { produtoId } = useParams<ParametrosUrl>();

    const [paginaCarregando, setPaginaCarregando] = useState(false);
    const [produto, setProduto] = useState<Produto>();

    // useEffect receve 2 argumentos : (função e uma lista de dependências).
    // Toda vez lista de dependências for modificada, a função vai ser chamada para atualizar o componente

    useEffect(() => {
        axios.get(`${BASE_URL}/produtos/${produtoId}`)
            .then((resposta) => {
                //console.log(resposta.data)
                setProduto(resposta.data);
            })
            .finally(() => {
                setPaginaCarregando(false);
            });
    }, [produtoId]);

    return (
        <div className="produto-detalhado-container">
            <div className="produto-detalhado-card">
                <div className="pagina-anterior-container">
                    <Link to="/produtos">
                        <button className="btn btn-primary botao-voltar">Voltar ao catálogo</button>
                    </Link>
                </div>
                <div className="row">
                    <div className="col-xl-5">
                        {paginaCarregando ? (
                            <ProdutoImageLoader></ProdutoImageLoader>
                        ) : (
                            <div className="imagem-container">
                                <img src={produto?.imgUrl} alt={produto?.descricao}></img>
                                <div className="descricao-container">
                                    <h2>{produto?.descricao}</h2>
                                </div>
                            </div>
                        )}

                    </div>
                    <div className="col-xl-7">
                        {paginaCarregando ? (
                            <ProdutoDescricaoLoader></ProdutoDescricaoLoader>
                        ) : (
                            <div className="descricao-embalagem-categoria-container">
                                <div className="categorias-container">
                                    <h3>Categorias do produto</h3>
                                    {produto?.categorias.map(categoria => (
                                        <p>{categoria.descricao}</p>
                                    ))}

                                </div>
                                <div className="embalagens-container">
                                    <h3>Descrição da embalagem</h3>
                                    {produto?.embalagens.map(embalagem => (
                                        <p>{embalagem.descricao}</p>
                                    ))}
                                </div>
                                <h3>Descrição completa</h3>
                                <p>{produto?.descricaoCompleta}</p>
                                <p><strong>Largura da folha ou do rolo (cm): </strong> {produto?.largura == null ? 'não se aplica' : formatarLargura(produto?.largura)}</p>
                                <p><strong>Total de folhas/Metragem total rolos: </strong> {produto?.metragem == null ? 'não se aplica' :
                                    (produto.descricao.includes('Interfolhado') || produto.descricao.includes('Guardanapo')) ? formatarMetragem(produto?.metragem) + " folhas" : formatarMetragem(produto?.metragem) + " metros"}</p>
                                <p><strong>Fragrância:</strong> {produto?.fragrancia == null ? 'sem fragrância' : produto?.fragrancia}</p>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProdutoDetalhado;
