import { useForm, Controller } from 'react-hook-form';
import { Produto } from '../../../../tipos/Produto';
import './styles.css';
import { AxiosRequestConfig } from 'axios';
import { requisicaoPadraoBackend } from '../../../../util/requisicao';
import historico from '../../../../util/historico';
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import Select from 'react-select';
import { Embalagem } from '../../../../tipos/Embalgem';
import { Categoria } from '../../../../tipos/Categoria';
import { toast } from 'react-toastify';


export type ParametrosUrl = {
    produtoId: string;
}

let editandoProduto : boolean = false;


function CadastroProdutos() {

    /*
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
    */

    const { produtoId } = useParams<ParametrosUrl>();

    // se está inserindo produto novo a sub rota é /produtos/inserir
    // Se for a sub rotao /produtos/:produtoId é uma edição de produto
    // ambas são requisição GET para buscar os dados
    // ao clicar em salvar para editar vai ser um requisição PUT e para salvar uma requisição POST
    editandoProduto = produtoId !== 'inserir' ? true : false;

    const { register, handleSubmit, setValue, control, formState: { errors } } = useForm<Produto>();

    const rotaListagemProdutos: string = '/admin/produtos';

    const [selectEmbalagens, setSelectEmbalagens] = useState<Embalagem[]>([]);

    const [selectCategorias, setSelectCategorias] = useState<Categoria[]>([]);


    useEffect(() => {
        requisicaoPadraoBackend({
            url: '/embalagens', params: {
                size: 50
            }
        })
            .then(resposta => {
                setSelectEmbalagens(resposta.data.content);
            })
    }, []);

    useEffect(() => {
        requisicaoPadraoBackend({
            url: '/categorias', params: {
                size: 50
            }
        })
            .then(resposta => {
                setSelectCategorias(resposta.data.content);
            })
    }, []);

    useEffect(() => {
        if (editandoProduto) {
            requisicaoPadraoBackend({
                url: `/produtos/${produtoId}`,
            }).then((resposta) => {
                let produto = resposta.data as Produto;

                setValue('descricao', produto.descricao);
                setValue('descricaoCompleta', produto.descricaoCompleta);
                setValue('fragrancia', produto.fragrancia);
                setValue('peso', produto.peso);
                setValue('preco', produto.preco);
                setValue('largura', produto.largura);
                setValue('metragem', produto.metragem);
                setValue('imgUrl', produto.imgUrl);
                setValue('categorias', produto.categorias);
                setValue('embalagens', produto.embalagens);
            })
        }
    }, [editandoProduto, setValue, produtoId]);

    function salvarProduto(dadosFormularioProduto: Produto) {

        /*
        const dadosMocados = {
            ...dadosFormularioProduto,
            categorias: editandoProduto === true ? dadosFormularioProduto.categorias : [{ id: 1, descricao: 'Categoria Mocada' }],
            embalagens: editandoProduto === true ? dadosFormularioProduto.embalagens : [{ id: 1, descricao: 'Embalagem Mocada' }],
            imgUrl: editandoProduto === true ? dadosFormularioProduto.imgUrl : "https://melhoramentoshigieners.com.br/imagens/7127.jpg",
        };
        */

        const dadosFormatados = {
            ...dadosFormularioProduto, peso: String(dadosFormularioProduto.peso).replace(",", ".")
        }

        const configuracaoInsert: AxiosRequestConfig = {
            method: 'POST',
            url: '/produtos',
            data: dadosFormatados,
            // tem que estar autenticado para cadastrar ou editar produto
            withCredentials: true,
        };

        const configuracaoUpdate: AxiosRequestConfig = {
            method: 'PUT',
            url: `/produtos/${produtoId}`,
            data: dadosFormatados,
            withCredentials: true,

        };

        // ser se está editando ou inserindo para ver qual requisição fazer ao backend
        let configuracao: AxiosRequestConfig = editandoProduto === true ? configuracaoUpdate : configuracaoInsert;

        requisicaoPadraoBackend(configuracao).then((resposta) => {
            //console.log(resposta.data)
            toast.success('Produto Cadastrado/Editado com Sucesso.', {
                hideProgressBar: false,
                pauseOnHover: true,
                theme: "colored",
                draggable: true
            });
            historico.push(rotaListagemProdutos);
        })
            .catch(() => {
                toast.error("Erro ao tentar cadastrar Produto!")
            });
    };

    // volta para página de listagem de produtos
    function botaoCancelar() {
        toast.info('Cancelada a inserção/edição de Produto', {
            theme: "colored",
        });
        historico.push(rotaListagemProdutos);
    };

    const regexUrl = /[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_+.~#?&//=]*)?/gi;
    var regexUrlValidada = new RegExp(regexUrl);

    return (
        <div className="cadastro-produto-form-container">
            <div className="cadastro-produto-form-card">
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
                            <label>Peso (kg):
                                <input {
                                    ...register('peso')}
                                    type='number'
                                    maxLength={10}
                                    step=".1"
                                    min="0"
                                    max="100"
                                    className={`form-control input-padrao 
                                    ${errors.peso ? 'is-invalid' : ''} `}
                                    placeholder='Peso em Kg'
                                    name='peso' />
                                <div className="invalid-feedback alert-danger text-center d-block">
                                    {errors.peso?.message}
                                </div>
                            </label>
                            <label>Largura (cm):
                                <input {
                                    ...register('largura')}
                                    type='number'
                                    step=".1"
                                    min="0"
                                    max="100"
                                    className={`form-control input-padrao`}
                                    placeholder='Largura do folha/rolo em centímetros'
                                    name='largura' />
                            </label>
                            <label>Metragem:
                                <input {
                                    ...register('metragem')}
                                    type='number'
                                    min="0"
                                    max="100000"
                                    className={`form-control input-padrao`}
                                    placeholder='Metragem total da embalagem em metros'
                                    name='metragem' />
                            </label>
                            <label>Fragrância:
                                <input {
                                    ...register('fragrancia', {
                                        maxLength: {
                                            value: 20,
                                            message: 'Máximo de 20 caracteres',
                                        },
                                    })}

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
                                        pattern: {
                                            value: regexUrlValidada,
                                            message: "Informe um Url válida!",
                                        }
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
                                <Controller
                                    name="categorias"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <Select {...field}
                                            name="categorias"
                                            options={selectCategorias}
                                            isMulti={true}
                                            classNamePrefix={'cadastro-produto-select'}
                                            placeholder='Categorias do Produto'
                                            getOptionLabel={(categoria: Categoria) => categoria.descricao}
                                            getOptionValue={(categoria: Categoria) => String(categoria.id)} />
                                    )}
                                />
                                {errors.categorias && (
                                    <div className="invalid-feedback alert-danger text-center d-block">
                                        Produto deve pertencer a pelo menos uma Categoria
                                    </div>)}
                            </label>
                            <label>Embalagens:
                                <Controller
                                    name="embalagens"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <Select {...field}
                                            name="categorias"
                                            options={selectEmbalagens}
                                            isMulti={true}
                                            classNamePrefix={'cadastro-produto-select'}
                                            placeholder='Embalagens disponíveis'
                                            getOptionLabel={(embalagem: Embalagem) => embalagem.descricao}
                                            getOptionValue={(embalagem: Embalagem) => String(embalagem.id)} />
                                    )}
                                />
                                {errors.embalagens && (
                                    <div className="invalid-feedback alert-danger text-center d-block">
                                        Produto deve estar disponível em pelo menos uma embalagem
                                    </div>)}
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
                                            value: 500,
                                            message: 'Máximo de 500 caracteres',
                                        },
                                    })}
                                    className={`form-control input-padrao h-auto
                                ${errors.descricaoCompleta ? 'is-invalid' : ''} `}
                                    placeholder='Descrição detalhada do produto'
                                    name='descricaoCompleta' >
                                </textarea>
                            </label>
                            <div className="invalid-feedback alert-danger text-center fw-bolder d-block ">
                                {errors.descricaoCompleta?.message}
                            </div>
                        </div>
                    </div>
                    <div className="cadatro-produto-form-botoes-container">
                        <button className="btn btn-outline-danger botao-cancelar"
                            onClick={botaoCancelar}
                        >CANCELAR</button>
                        {
                            editandoProduto===false ?
                                (<button className="btn btn-outline-primary botao-salvar">SALVAR</button>)
                                :
                                (<button className="btn btn-outline-primary botao-salvar">ATUALIZAR</button>)
                        }
                        
                    </div>
                </form >
            </div >
        </div >
    )
};

export default CadastroProdutos;
