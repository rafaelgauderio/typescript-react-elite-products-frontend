import { Link } from 'react-router-dom';
import BotaoPadrao from '../../../../../componentes/BotaoPadrao';
import './styles.css';
import { useForm } from 'react-hook-form';
import { requisicaoDeLogin } from '../../../../../util/requisicao';
import { useState } from 'react';


type DadosLogin = {
    username: string;
    password: string;
}



function Login() {

    const [erroLogin, setErroLogin] = useState(false);

    const { register, handleSubmit, formState: { errors } } = useForm<DadosLogin>();

    function enviarFormulario(dadosLogin: DadosLogin) {
        return (
            console.log(dadosLogin),
            requisicaoDeLogin(dadosLogin)
                .then(resposta => {
                    console.log('Login efetuado com sucesso', resposta);
                    setErroLogin(false);
                    //console.log(dadosLogin); 
                })
                .catch(erro => {
                    setErroLogin(true);
                    console.log("Erro, falha ao tentar realizar login", erro);
                    //console.log(dadosLogin);
                })
                .finally(() => {
                    //console.log("Finalizado o login");
                })
        )
    };


    return (
        <>
            <div className="login-container mt-4">
                <div className="login-titulo">
                    <h1>Login</h1> {
                        erroLogin == true &&
                        (<div className="alert alert-danger text-center">
                            Erro ao tentar realizar login. <br />
                            Preencher os campos email e senha corretamente. <br />

                        </div>)
                    }
                </div>
                <form onSubmit={handleSubmit(enviarFormulario)}>
                    <div className="mb-3">
                        <input
                            {...register("username", {
                                required: 'email é um campo obrigatório',
                                minLength: {
                                    value: 5,
                                    message: "Mínimo de 5 caracteres"
                                },
                                maxLength: {
                                    value: 50,
                                    message: "Máximo de 50 caracters",
                                },
                                pattern: {
                                    value: /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/i,
                                    message: "Informe um email válido"
                                } 
                            })}
                            type="text"
                            placeholder='Email'
                            name="username"
                            className='form-control input-padrao'
                        >
                        </input>
                        <div className="invalid-feedback alert-danger d-block">{errors.username?.message}</div>
                        <div className="valid-feedback">
                            Email preenchido corretamente
                        </div>
                    </div>
                    <div className="mb-5">
                        <input
                            {...register("password", {
                                required: 'password é um campo obrigatório',
                                minLength: {
                                    value: 6,
                                    message: "Mínimo de 6 caracteres"
                                },
                                maxLength: {
                                    value: 18,
                                    message: "Máximo de 18 caracters"
                                }
                            })}
                            type="password"
                            placeholder='Senha'
                            name="password"
                            className='form-control input-padrao' >
                        </input>
                        <div className="valid-feedback">
                            Password preenchido corretamente
                        </div>
                        <div className="invalid-feedback alert-danger d-block ">{errors.password?.message}</div>
                    </div>
                    <div className='login-enviar'>
                        <BotaoPadrao mensagem="Fazer Login"></BotaoPadrao>
                    </div>
                    <div className="login-recuperar-senha btn-danger">
                        <Link to="/admin/autenticar/recuperar">
                            <BotaoPadrao mensagem="Esqueci minha senha"></BotaoPadrao>
                        </Link>
                    </div>
                </form>
            </div >
        </>


    );
}

export default Login;