//import { useForm, Controller } from 'react-hook-form';

import { useParams } from "react-router-dom";
import { Categoria } from "../../../../tipos/Categoria";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import historico from "../../../../util/historico";

import './styles.css';

export type ParamentrosUrl = {
    categoriaId: string;
};

const CadastroCategorias = () => {

    const { categoriaId } = useParams<ParamentrosUrl>();

    const rotaListagemCategorias: string = '/admin/categorias';

    const { register, handleSubmit, formState: { errors } } = useForm<Categoria>();

    function salvarCategoria(dadosFormularioCategoria: Categoria) {

    }

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
                        <button className="btn btn-outline-primary botao-salvar">SALVAR</button>
                    </div>
                </form>
            </div>
        </div >
    );
}

export default CadastroCategorias;