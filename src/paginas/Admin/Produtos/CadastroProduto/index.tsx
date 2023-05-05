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
                                    placeholder='Nome do produto'
                                    name='descricao' />
                                <div className="invalid-feedback d-block">
                                    {errors.descricao?.message}
                                </div>
                            </label>
                            <label>Peso:
                                <input {
                                    ...register('peso')}
                                    type='text'
                                    className={`form-control input-padrao`}
                                    placeholder='Peso em Kg'
                                    name='peso' />
                            </label>
                            <label>Largura:
                                <input {
                                    ...register('largura')}
                                    type='text'
                                    className={`form-control input-padrao`}
                                    placeholder='Largura do folha/rolo em centímetros'
                                    name='largura' />
                            </label>
                            <label>Metragem:
                                <input {
                                    ...register('metragem')}
                                    type='text'
                                    className={`form-control input-padrao`}
                                    placeholder='Metragem total da embalagem em metros'
                                    name='metragem' />
                            </label>
                            <label>Fragrância:
                                <input {
                                    ...register('fragrancia')}
                                    type='text'
                                    className={`form-control input-padrao`}
                                    placeholder='Fragrância do produto'
                                    name='fragrancia' />
                            </label>
                            <label>Imagem:
                                <input {
                                    ...register('imgUrl', {
                                        required: 'Campo obrigatório',
                                        minLength: {
                                            value: 5,
                                            message: 'Mínimo de 5 caracteres',
                                        },
                                        maxLength: {
                                            value: 100,
                                            message: 'Máximo de 100 caracteres',
                                        },
                                    })}
                                    type='text'
                                    className={`form-control input-padrao 
                                    ${errors.descricao ? 'is-invalid' : ''} `}
                                    placeholder='Link da imagem do produto'
                                    name='imgUrl' />
                                <div className="invalid-feedback d-block">
                                    {errors.imgUrl?.message}
                                </div>
                            </label>
                        </div>
                        <div className="col-lg-6">
                            <label>Categorias:
                                <input {
                                    ...register('categorias')}
                                    type='text'
                                    className={`form-control input-padrao`}
                                    placeholder='Categorias do produto'
                                    name='categorias' />
                            </label>
                            <label>Embalagens:
                                <input {
                                    ...register('embalagens')}
                                    type='text'
                                    className={`form-control input-padrao`}
                                    placeholder='Embalagens disponíveis'
                                    name='embalagens' />
                            </label>
                            <label>Descrição Detalhada:
                                <textarea rows={12}
                                    {...register('descricaoCompleta', {
                                        required: 'Campo obrigatório ',
                                        minLength: {
                                            value: 5,
                                            message: 'Mínimo de 5 caracteres',
                                        },
                                        maxLength: {
                                            value: 100,
                                            message: 'Máximo de 100 caracteres',
                                        },
                                    })}
                                    className={`form-control input-padrao h-auto
                                ${errors.descricaoCompleta ? 'is-invalid' : ''} `}
                                    placeholder='Descrição detalhada do produto'
                                    name='descricaoCompleta' >
                                </textarea>
                            </label>
                            <div className="invalid-feedback d-block">
                                {errors.descricao?.message}
                            </div>
                        </div>
                    </div>
                    <div className="cadatro-produto-form-botoes-container">
                        <button className="btn btn-outline-danger botao-cancelar">CANCELAR</button>
                        <button className="btn btn-outline-primary botao-salvar">SALVAR</button>
                    </div>
                </form >
            </div >
        </div >
    )
}

export default CadastroProdutos;