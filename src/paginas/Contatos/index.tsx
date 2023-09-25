import { useCallback, useEffect, useState } from 'react';
import CardContato from '../../componentes/CardContato';
import './styles.css';
import { AxiosRequestConfig } from 'axios';
import { requisicaoPadraoBackend } from '../../util/requisicao';
import { Contato } from '../../tipos/Contato';

function Contatos() {

    const [pagina, setPagina] = useState<Contato[]>();

    const getColaborador = useCallback(requisicaoColaboradores, []);

    useEffect(() => {
        getColaborador();
    }, [getColaborador]);

    function requisicaoColaboradores() {
        const configuracao: AxiosRequestConfig = {
            method: 'GET',
            url: '/colaboradores',
            withCredentials: false,
            params: {
                size: 24,
            }
        };
        requisicaoPadraoBackend(configuracao)
            .then((resposta) => {
                setPagina(resposta.data)
            });
    }


    /*
    const contatoMocado: Contato = {
        id: 1,
        nome: "Rafael de luca",
        setor: "Tecnologia da Informação",
        email: "rafael@melhoramentoshigieners.com.br",
        telefone: "51-3373800"
    }
    */

    return (
        <div className="container my-4 my-lg-5 contato-container">
            <div className="row titulo-container">
                <h2>Entre em contato</h2>
            </div>
            <div className="row">

                {
                    pagina?.map((colaborador) => (
                        <div className="col-lg-4 col-sm-12">
                            <div key={colaborador.id}>
                                <CardContato contato={colaborador}></CardContato>
                            </div>
                        </div>
                    ))
                }
            </div>

        </div>


    );
}

export default Contatos;