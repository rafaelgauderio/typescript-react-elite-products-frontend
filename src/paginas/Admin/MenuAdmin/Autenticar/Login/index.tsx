import { Link } from 'react-router-dom';
import BotaoPadrao from '../../../../../componentes/BotaoPadrao';
import './styles.css';
import { useForm } from 'react-hook-form';
import { requisicaoDeLogin } from '../../../../../util/requisicao';


type DadosLogin = {
    username: string;
    password: string;
}

function enviarFormulario(dadosLogin: DadosLogin) {
    return (
        console.log(dadosLogin),
        requisicaoDeLogin(dadosLogin)
            .then(resposta => {
                console.log('Login efetuado com sucesso', resposta);
                console.log(dadosLogin); 
            })
            .catch(erro => {
                console.log("Erro, falha ao tentar realizar login", erro);
                console.log(dadosLogin);
            })
            .finally(() => {
                console.log("Finalizado o login");
            })
    )
};


function Login() {

    const { register, handleSubmit } = useForm<DadosLogin>();

    return (
        <>
            <div className="login-container mt-4">
                <div className="login-titulo">
                    <h1>Login</h1>
                </div>
                <form onSubmit={handleSubmit(enviarFormulario)}>
                    <div className="mb-3">
                        <input
                            {...register("username")}
                            type="text"
                            placeholder='Email'
                            name="username"
                            className='form-control input-padrao'
                        >
                        </input>
                    </div>
                    <div className="mb-5">
                        <input
                            {...register("password")}
                            type="password"
                            placeholder='Senha'
                            name="password"
                            className='form-control input-padrao' >
                        </input>
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