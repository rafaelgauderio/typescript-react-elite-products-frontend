import { Link, useParams } from 'react-router-dom';
import './styles.css';
import { useEffect, useState } from 'react';
import { BASE_URL } from '../../util/requisicao';
import { Produto } from '../../tipos/Produto';
import axios from 'axios';

type ParametrosUrl = {
    produtoId: string;
};

function ProdutoDetalhado() {

    const { produtoId } = useParams<ParametrosUrl>();

    const [produto, setProduto] = useState<Produto>();

    // useEffect receve 2 argumentos : (função e uma lista de dependências).
    // Toda vez lista de dependências for modificada, a função vai ser chamada para atualizar o componente

    useEffect(() => {
        axios.get(`${BASE_URL}/produtos/${produtoId}`)
            .then((resposta) => {
                console.log(resposta.data)
                setProduto(resposta.data);
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
                        <div className="imagem-container">
                            <img src={produto?.imgUrl} alt={produto?.descricao}></img>
                            <div className="descricao-container">
                                <h2>{produto?.descricao}</h2>
                            </div>
                        </div>

                    </div>
                    <div className="col-xl-7">
                        <div className="descricao-embalagem-categoria-container">
                            <div className="categorias-container">
                                <h3>Categorias do produto</h3>
                                <p>Folha Dupla</p>
                                <p>Papel higiênico</p>
                            </div>
                            <div className="embalagens-container">
                                <h3>Descrição da embalagem</h3>
                                <p>2.400 metros</p>
                                <p>Fardo com 8 rolos</p>
                            </div>
                            <h3>Descrição completa</h3>
                            <p>{produto?.descricaoCompleta}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProdutoDetalhado;
