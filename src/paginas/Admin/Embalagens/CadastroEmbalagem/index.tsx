import { useParams } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import historico from "../../../../util/historico";

import './styles.css';
import { requisicaoPadraoBackend } from "../../../../util/requisicao";
import { AxiosRequestConfig } from "axios";
import { useEffect } from "react";
import Swal from "sweetalert2";
import { Embalagem } from "../../../../tipos/Embalgem";

export type ParamentrosUrl = {
    embalagemId: string;
};

const CadastroEmbalagens = () => {

    const { embalagemId } = useParams<ParamentrosUrl>();

    let editandoEmbalagem: boolean = embalagemId !=='inserir' ? true : false;

    const rotaListagemEmbalagens: string = '/admin/embalagens';


    const { register, handleSubmit, setValue, formState: { errors } } = useForm<Embalagem>();

    useEffect(() => {
        if (editandoEmbalagem) {
            requisicaoPadraoBackend({
                url: `/embalagens/${embalagemId}`,
            })
                .then((response) => {
                    var embalagem = response.data as Embalagem;

                    setValue('descricao', (embalagem.descricao).toLowerCase());
                })
        }
    }, [editandoEmbalagem, setValue, embalagemId]);



    function salvarEmbalagem(dadosFormularioEmbalagem: Embalagem) {

        const configInsertEmbalagem: AxiosRequestConfig = {
            method: 'POST',
            url: '/embalagens',
            data: dadosFormularioEmbalagem,
            withCredentials: true,
        };

        const configUpdateEmbalagem: AxiosRequestConfig = {
            method: 'PUT',
            url: `/embalagens/${embalagemId}`,
            data: dadosFormularioEmbalagem,
            withCredentials: true,
        };

        let config: AxiosRequestConfig = editandoEmbalagem === true ? configUpdateEmbalagem : configInsertEmbalagem;

        requisicaoPadraoBackend(config)
            .then((response) => {
                toast.success("Embalagem Cadastrada/Editada com sucesso", {
                    hideProgressBar: false,
                    theme: "colored",
                    draggable: true
                });
                historico.push(rotaListagemEmbalagens);
            }).catch((response) => {

                Swal.fire({
                    title: '<h1 id="titulo-sweetAlert">Erro cadastrar/editar embalagem!</h1>',
                    icon: 'error',
                    html: '<h5>Não é possível ter embalagens com o mesmo nome.</h5>',
                });

                toast.error("Erro ao tentar cadastrar/editar Embalagem!\nNão é possível inserir embalagens duplicadas.", {
                    theme: "colored",
                });
            });
    };




    function botaoCancelar() {
        toast.info('Cancelada a inserção/edição de EMBALAGEM', {
            theme: "colored",
        });
        historico.push(rotaListagemEmbalagens);
    };

    return (
        <div className="cadastro-produto-form-container">
            <div className="cadastro-produto-form-card">
                <div className="cadastro-produto-form-titulo">
                    Dados da Embalagem
                </div>
                <form onSubmit={handleSubmit(salvarEmbalagem)}>
                    <div className="row">
                        <div className="col-lg-6">
                            <label className="cadastro-embalagem-form-card">Nome da Embalagem:
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
                                    placeholder='Nome da Embalagem'
                                    name='descricao' />
                                <div className="invalid-feedback alert-danger text-center d-block">
                                    {errors.descricao?.message}
                                </div>
                            </label>
                        </div>
                    </div>
                    <div className="cadatro-produto-form-botoes-container">
                        <button className="btn btn-outline-danger botao-cancelar"
                            onClick={botaoCancelar}>
                            CANCELAR
                        </button>
                        <button className="btn btn-outline-primary botao-salvar">SALVAR
                        </button>
                    </div>
                </form>
            </div>
        </div >
    );
}

export default CadastroEmbalagens;