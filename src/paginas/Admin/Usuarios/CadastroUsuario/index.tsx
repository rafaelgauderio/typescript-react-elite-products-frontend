import { Controller, useForm } from 'react-hook-form';
import { Usuario } from '../../../../tipos/Usuario';
import './styles.css';
import { AxiosRequestConfig } from 'axios';
import { useEffect, useState } from 'react';
import { requisicaoPadraoBackend } from '../../../../util/requisicao';
import { toast } from 'react-toastify';
import historico from '../../../../util/historico';
import Swal from 'sweetalert2';
import Select from 'react-select';
import { useParams } from 'react-router-dom';
import { Regra } from '../../../../tipos/Regra';


export type ParametrosUrl = {
    usuarioId: string;
};

export default function CadastroUsuario() {

    const { usuarioId } = useParams<ParametrosUrl>();

    let editingUser: boolean = (usuarioId !== 'inserir') ? true : false;

    const rotaListagemUsuarios: string = '/admin/usuarios';

    const { register, handleSubmit, setValue, control, formState: { errors } } = useForm<Usuario>();

    const [selectRegras, setSelectRegras] = useState<Regra[]>([]);

    useEffect(() => {
        requisicaoPadraoBackend({ url: '/regras' })
            .then(resposta => {
                setSelectRegras(resposta.data);
            })
    }, []);


    useEffect(() => {
        if (editingUser) {
            requisicaoPadraoBackend({
                method: 'GET',
                url: `/usuarios/${usuarioId}`,
                withCredentials: true,
            })
                .then((response) => {
                    let user = response.data as Usuario;
                    setValue('nome', user.nome);
                    setValue('sobrenome', user.sobrenome);
                    setValue('email', user.email);
                    setValue('regras', user.regras);
                })
        }

    }, [editingUser, setValue, usuarioId]);


    function saveUser(dadosFormularioUsuario: Usuario) {

        const configInsertUser: AxiosRequestConfig = {
            method: 'POST',
            url: '/usuarios',
            data: dadosFormularioUsuario,
            withCredentials: true,
        };

        const configUpdateUser: AxiosRequestConfig = {
            method: 'PUT',
            url: `/usuarios/${usuarioId}`,
            data: dadosFormularioUsuario,
            withCredentials: true,
        };

        let config: AxiosRequestConfig = editingUser === false ? configInsertUser : configUpdateUser;

        requisicaoPadraoBackend(config)
            .then((response) => {
                toast.success("Usuário Cadastrado/Editado com sucesso", {
                    hideProgressBar: false,
                    theme: "colored",
                    draggable: true
                });
                historico.push(rotaListagemUsuarios);
            })
            .catch((response) => {
                Swal.fire({
                    title: '<h1 id="titulo-sweetAlert">Erro cadastrar/editar Usuário!</h1>',
                    icon: 'error',
                    html: '<h5>Não é possível ter usuarios  com o mesmo EMAIL.</h5>',
                });

                toast.error("Erro ao tentar cadastrar/editar Usuário!\nEste EMAIL já está cadastrado no nosso banco de dados.", {
                    theme: "colored",
                });
            });

    };

    function cancelButton() {
        toast.info("Cancelada inserção/edição de USUÁRIO", {
            theme: "colored"
        });
        historico.push(rotaListagemUsuarios);
    }

    return (
        <div className="cadastro-produto-form-container">
            <div className="cadastro-produto-form-card">
                <div className="cadastro-produto-form-titulo">
                    Dados do usuário
                </div>
                <form onSubmit={handleSubmit(saveUser)}>
                    <div className="row">
                        <div className="col-lg-6">
                            <label className="cadastro-usuario-form-card">
                                Nome do usuário:
                                <input {
                                    ...register('nome', {
                                        required: 'Campo obrigatório',
                                        minLength: {
                                            value: 3,
                                            message: "Mínimo de 3 caracteres"
                                        },
                                        maxLength: {
                                            value: 20,
                                            message: "Máximo de 20 caracteres"
                                        },
                                    })
                                }
                                    type='text'
                                    className={`form-control input-padrao
                                ${errors.nome ? 'is-valid' : ''}`}
                                    placeholder="Nome do usuário"
                                    name='nome' />
                                <div className="invalid-feedback alert-danger text-center d-block">
                                    {errors.nome?.message}
                                </div>
                            </label>
                            <label className="cadastro-usuario-form-card">
                                Nome do usuário:
                                <input {
                                    ...register('sobrenome', {
                                        required: 'Campo obrigatório',
                                        minLength: {
                                            value: 3,
                                            message: "Mínimo de 3 caracteres"
                                        },
                                        maxLength: {
                                            value: 20,
                                            message: "Máximo de 20 caracteres"
                                        },
                                    })
                                }
                                    type='text'
                                    className={`form-control input-padrao
                                ${errors.sobrenome ? 'is-valid' : ''}`}
                                    placeholder="Sobrenome do usuário"
                                    name='sobrenome' />
                                <div className="invalid-feedback alert-danger text-center d-block">
                                    {errors.sobrenome?.message}
                                </div>
                            </label>
                            <label className="cadastro-usuario-form-card">
                                Email do usuário:
                                <input {
                                    ...register('email', {
                                        required: 'Campo obrigatório',
                                        minLength: {
                                            value: 3,
                                            message: "Mínimo de 3 caracteres"
                                        },
                                        maxLength: {
                                            value: 50,
                                            message: "Máximo de 50 caracteres"
                                        },
                                    })
                                }
                                    type='text'
                                    className={`form-control input-padrao
                                ${errors.email ? 'is-valid' : ''}`}
                                    placeholder="Email do usuário"
                                    name='email' />
                                <div className="invalid-feedback alert-danger text-center d-block">
                                    {errors.email?.message}
                                </div>
                            </label>
                            <label className="cadastro-usuario-form-card">
                                Senha:
                                <input {
                                    ...register('password', {
                                        required: 'Campo obrigatório',
                                        minLength: {
                                            value: 6,
                                            message: "Mínimo de 6 caracteres"
                                        },
                                        maxLength: {
                                            value: 18,
                                            message: "Máximo de 18 caracteres"
                                        },                                       
                                        pattern: {
                                            value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,30}$/i,
                                            message: "Pelo menos um caracter maíusculo, um numério e um alfa numérico."
                                        }
                                    })
                                }
                                    type='password'
                                    className={`form-control input-padrao
                                ${errors.password ? 'is-valid' : ''}`}
                                    placeholder="Senha"
                                    name='password' />
                                <div className="invalid-feedback alert-danger text-center d-block">
                                    {errors.password?.message}
                                </div>
                            </label>
                        </div>
                        <div className="col-lg-6">
                            <label>Regras acesso:
                                <Controller
                                    name="regras"
                                    control={control}
                                    rules={{ required: true }}
                                    render={({ field }) => (
                                        <Select {...field}
                                            name="regras"
                                            options={selectRegras}
                                            isMulti={true}
                                            classNamePrefix={`cadastro-produto-select`}
                                            placeholder="Regras de acesso"
                                            getOptionLabel={(regra: Regra) => regra.permissao}
                                            getOptionValue={(regra: Regra) => String(regra.id)}
                                        />
                                    )}
                                />
                                {errors.regras && (
                                    <div className="invalid-feedback alert-danger text-center d-block">
                                        Usuário deve ter pelo menos uma regra de acesso
                                    </div>)}
                            </label>
                        </div>
                    </div>
                    <div className="cadastro-produto-form-botoes-container">
                        <button className="btn btn-outline-danger botao-cancelar"
                            onClick={cancelButton}>
                            CANCELAR
                        </button>
                        {
                            editingUser === false ? (
                                <button className="btn btn-outline-primary botao-salvar">SALVAR
                                </button>
                            ) : (
                                <button className="btn btn-outline-primary botao-salvar">ATUALIZAR
                                </button>
                            )
                        }
                    </div>
                </form>
            </div>
        </div>
    );

} 
