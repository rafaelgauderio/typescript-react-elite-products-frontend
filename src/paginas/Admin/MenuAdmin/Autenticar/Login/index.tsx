import { Link } from 'react-router-dom';
import BotaoPadrao from '../../../../../componentes/BotaoPadrao';
import './styles.css';

function Login() {

    return (
        <>
            <div className="login-container mt-4">
                <div className="login-titulo">
                    <h1>Login</h1>
                </div>
                <form>
                    <div className="mb-3">
                        <input type="text" placeholder='Email' name="usuario"></input>
                    </div>
                    <div className="mb-5">
                        <input type="password" placeholder='Senha' name="password"></input>
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
            </div>

        </>


    );
}

export default Login;