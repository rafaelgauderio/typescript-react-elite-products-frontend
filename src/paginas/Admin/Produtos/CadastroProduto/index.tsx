import { useForm } from 'react-hook-form';
import { Produto } from '../../../../tipos/Produto';
import './styles.css';
import { AxiosRequestConfig } from 'axios';
import { requisicaoPadraoBackend } from '../../../../util/requisicao';
import historico from '../../../../util/historico';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';
import Select from 'react-select';

export type ParametrosUrl = {
    produtoId: string;
}

function CadastroProdutos() {

    const embalagens = [
        { value: 'Fardo com 8 rolos', label: 'Fardo com 8 rolos' },
        { value: 'Fardo com 4 rolos', label: 'Fardo com 4 rolos' },
        { value: 'Galão de 2 litros', label: 'Galão de 2 litros' },
    ];

    const categorias = [
        { value: 'Papel Toalha', label: 'Papel Toalha' },
        { value: 'Papel Higiênico', label: 'Papel Higiênico' },
        { value: 'Intefolhado', label: 'Interfolhado' },
    ];


    const { produtoId } = useParams<ParametrosUrl>();

    // se está inserindo produto novo a sub rota é /produtos/inserir
    // Se for a sub rotao /produtos/:produtoId é uma edição de produto
    // ambas são requisição GET para buscar os dados
    // ao clicar em salvar para editar vai ser um requisição PUT e para salvar uma requisição POST
    let editandoProduto: boolean = produtoId !== 'inserir' ? true : false;

    const { register, handleSubmit, setValue, formState: { errors } } = useForm<Produto>();

    const rotaListagemProdutos: string = '/admin/produtos';

    useEffect(() => {
        if (editandoProduto) {
            requisicaoPadraoBackend({
                url: `/produtos/${produtoId}`,
            }).then((resposta) => {
                let produto = resposta.data as Produto;

                setValue('descricao', produto.descricao);
                setValue('descricaoCompleta', produto.descricaoCompleta);
                setValue('fragrancia', produto.fragrancia);
                setValue('peso', produto.preco);
                setValue('preco', produto.preco);
                setValue('largura', produto.largura);
                setValue('metragem', produto.metragem);
                setValue('imgUrl', produto.imgUrl);
                setValue('categorias', produto.categorias);
                setValue('embalagens', produto.embalagens);

            })
        }
    }, [editandoProduto, setValue, produtoId]);

    function salvarProduto(dadosProduto: Produto) {

        const dadosMocados = {
            ...dadosProduto,
            categorias: editandoProduto === true ? dadosProduto.categorias : [{ id: 1, descricao: 'Categoria Mocada' }],
            embalagens: editandoProduto === true ? dadosProduto.embalagens : [{ id: 1, descricao: 'Embalagem Mocada' }],
            imgUrl: editandoProduto === true ? dadosProduto.imgUrl : "https://melhoramentoshigieners.com.br/imagens/7127.jpg",
        };

        const configuracaoInsert: AxiosRequestConfig = {
            method: 'POST',
            url: '/produtos',
            data: dadosMocados,
            // tem que estar autenticado para cadastrar ou editar produto
            withCredentials: true,
        };

        const configuracaoUpdate: AxiosRequestConfig = {
            method: 'PUT',
            url: `/produtos/${produtoId}`,
            data: dadosMocados,
            withCredentials: true,
        };

        // ser se está editando ou inserindo para ver qual requisição fazer ao backend
        let configuracao: AxiosRequestConfig = editandoProduto === true ? configuracaoUpdate : configuracaoInsert;

        requisicaoPadraoBackend(configuracao).then((resposta) => {
            //console.log(resposta.data)
            historico.push(rotaListagemProdutos);

        });
    };

    // volta para página de listagem de produtos
    function botaoCancelar() {
        historico.push(rotaListagemProdutos);
    };

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
                                <div className="invalid-feedback alert-danger text-center d-block">
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
                                <div className="invalid-feedback alert-danger text-center d-block">
                                    {errors.imgUrl?.message}
                                </div>
                            </label>
                        </div>
                        <div className="col-lg-6">
                            <label>Categorias:
                                <Select
                                    options={categorias}
                                    isMulti={true}
                                    classNamePrefix={'cadastro-produto-select'}
                                    placeholder='Categorias do Produto'
                                    name='categorias' />
                            </label>
                            <label>Embalagens:
                                <Select
                                    options={embalagens}
                                    isMulti={true}
                                    classNamePrefix={'cadastro-produto-select'}
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
                            <div className="invalid-feedback alert-danger text-center d-block">
                                {errors.descricao?.message}
                            </div>
                        </div>
                    </div>
                    <div className="cadatro-produto-form-botoes-container">
                        <button className="btn btn-outline-danger botao-cancelar"
                            onClick={botaoCancelar}
                        >CANCELAR</button>
                        <button className="btn btn-outline-primary botao-salvar">SALVAR</button>
                    </div>
                </form >
            </div >
        </div >
    )
};

export default CadastroProdutos;