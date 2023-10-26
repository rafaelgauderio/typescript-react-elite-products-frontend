//import { useForm, Controller } from 'react-hook-form';

import { useParams } from "react-router-dom";
import { Categoria } from "../../../../tipos/Categoria";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import historico from "../../../../util/historico";

import './styles.css';
import { requisicaoPadraoBackend } from "../../../../util/requisicao";
import { AxiosRequestConfig } from "axios";
import { useEffect } from "react";
import Swal from "sweetalert2";

export type ParamentrosUrl = {
    categoriaId: string;
};

const CadastroCategorias = () => {

    const { categoriaId } = useParams<ParamentrosUrl>();


    let editandoCategoria: boolean = categoriaId !== 'inserir' ? true : false;

    const rotaListagemCategorias: string = '/admin/categorias';



    const { register, handleSubmit, setValue, formState: { errors } } = useForm<Categoria>();

    useEffect(() => {
        if (editandoCategoria) {
            requisicaoPadraoBackend({
                url: `/categorias/${categoriaId}`,
            })
                .then((response) => {
                    var categoria = response.data as Categoria;

                    setValue('descricao', (categoria.descricao).toLowerCase());
                })
        }
    }, [editandoCategoria, setValue, categoriaId]);



    function salvarCategoria(dadosFormularioCategoria: Categoria) {

        const configInsertCategoria: AxiosRequestConfig = {
            method: 'POST',
            url: '/categorias',
            data: dadosFormularioCategoria,
            withCredentials: true,
        };

        const configUpdateCategoria: AxiosRequestConfig = {
            method: 'PUT',
            url: `/categorias/${categoriaId}`,
            data: dadosFormularioCategoria,
            withCredentials: true,
        };

        let config: AxiosRequestConfig = editandoCategoria === true ? configUpdateCategoria : configInsertCategoria;

        requisicaoPadraoBackend(config)
            .then((response) => {
                toast.success("Categoria Cadastrada/Editada com sucesso", {
                    hideProgressBar: false,
                    theme: "colored",
                    draggable: true
                });
                historico.push(rotaListagemCategorias);
            }).catch((response) => {

                Swal.fire({
                    title: '<h1 id="titulo-sweetAlert">Erro cadastrar/editar categoria!</h1>',
                    icon: 'error',
                    html: '<h5>Não é possível ter categorias com o mesmo nome.</h5>',
                });

                toast.error("Erro ao tentar cadastrar/editar Categoria!\nNão é possível inserir categorias duplicadas.", {
                    theme: "colored",
                });
            });
    };




    function botaoCancelar() {
        toast.info('Cancelada a inserção/edição de CATEGORIA', {
            theme: "colored",
        });
        historico.push(rotaListagemCategorias);
    };

    return (
        <div className="cadastro-produto-form-container">
            <div className="cadastro-produto-form-card">
                <div className="cadastro-produto-form-titulo">
                    Dados da Categoria
                </div>
                <form onSubmit={handleSubmit(salvarCategoria)}>
                    <div className="row">
                        <div className="col-lg-6">
                            <label className="cadastro-categoria-form-card">Nome da Categoria:
                                <input {
                                    ...register('descricao', {
                                        required: 'Campo obrigatório',
                                        minLength: {
                                            value: 3,
                                            message: 'Mínimo de 3 caracteres'
                                        },
                                        maxLength: {
                                            value: 30,
                                            message: 'Maximo de 30 caracteres'
                                        },
                                    })}

                                    type='text'
                                    className={`form-control input-padrao
                                   ${errors.descricao ? 'is-invalid' : ''} `}
                                    placeholder='Nome do Categoria'
                                    name='descricao' />
                                <div className="invalid-feedback alert-danger text-center d-block">
                                    {errors.descricao?.message}
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="cadatro-produto-form-botoes-container">
                        <button className="btn btn-outline-danger botao-cancelar"
                            onClick={botaoCancelar}
                        >CANCELAR</button>
                        {
                            editandoCategoria === false ? (<button className="btn btn-outline-primary botao-salvar">SALVAR</button>

                            ) : (
                                <button className="btn btn-outline-primary botao-salvar">ATUALIZAR</button>
                            )
                        }

                    </div>
                </form>
            </div>
        </div >
    );
}

export default CadastroCategorias;