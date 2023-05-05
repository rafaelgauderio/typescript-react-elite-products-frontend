import { useForm } from 'react-hook-form';
import { Produto } from '../../../../tipos/Produto';
import './styles.css';
import { AxiosRequestConfig } from 'axios';
import { requisicaoPadraoBackend } from '../../../../util/requisicao';

function CadastroProdutos() {

    const { register, handleSubmit, formState: { errors } } = useForm<Produto>();

    function salvarProduto(dadosProduto: Produto) {

        const configuracao: AxiosRequestConfig = {
            method: 'POST',
            url: '/produtos',
            data: dadosProduto,
            // tem que estar autenticado para cadastrar produto
            withCredentials: true,
        };

        requisicaoPadraoBackend(configuracao).then((resposta) => {
            console.log(resposta.data)
        })
    }

    return (
        <div className="cadastro-produto-form-container">
            <div className="cadasto-produto-form-card">
                <div className="cadastro-produto-form-titulo">
                    Dados do Produto
                </div>
                <form onSubmit={handleSubmit(salvarProduto)}>
                    <div className="row">
                        <div className="col-lg-6">
                            <label>Nome:
                                <input {
                                    ...register('descricao', {
                                        required: 'Campo obrigatório ',
                                        minLength: {
                                            value: 5,
                                            message: 'Mínimo de 5 caracteres',
                                        },
                                        maxLength: {
                                            value: 50,
                                            message: 'Máximo de 50 caracteres',
                                        },

                                    })}
                                    type='text'
                                    className={`form-control input-padrao 
                                    ${errors.descricao ? 'is-invalid' : ''} `}
                                    placeholder='Nome do Produto'
                                    name='descricao' />
                                <div className="invalid-feedback d-block">
                                    {errors.descricao?.message}
                                </div>
                            </label>
                            <label>Peso:
                                <input type="text" className="form-control input-padrao" />
                            </label>
                            <label>Largura:
                                <input type="text" className="form-control input-padrao" />
                            </label>
                            <label>Metragem:
                                <input type="text" className="form-control input-padrao" />
                            </label>
                            <label>Fragrância:
                                <input type="text" className="form-control input-padrao" />
                            </label>
                            <label>Imagem:
                                <input type="text" className="form-control input-padrao" />
                            </label>
                        </div>
                        <div className="col-lg-6">
                            <label>Categorias:
                                <input type="text" className="form-control input-padrao" />
                            </label>
                            <label>Embalagens:
                                <input type="text" className="form-control input-padrao" />
                            </label>
                            <label>Descrição Detalhada:
                                <textarea className="form-control input-padrao h-auto" rows={12}></textarea>
                            </label>
                        </div>
                    </div>
                    <div className="cadatro-produto-form-botoes-container">
                        <button className="btn btn-outline-danger botao-cancelar">CANCELAR</button>
                        <button className="btn btn-outline-primary botao-salvar">SALVAR</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CadastroProdutos;