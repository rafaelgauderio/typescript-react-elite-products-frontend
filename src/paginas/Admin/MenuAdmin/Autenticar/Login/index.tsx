import { Link } from 'react-router-dom';
import BotaoPadrao from '../../../../../componentes/BotaoPadrao';
import './styles.css';
import { useForm } from 'react-hook-form';


type DadosLogin = {
    usuario: string;
    password: string;
}

function enviarFormulario(dadosLogin: DadosLogin) {
    return console.log(dadosLogin); // apenas imprimindo os dados de login no console
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
                            {...register("usuario")}
                            type="text"
                            placeholder='Email'
                            name="usuario"
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