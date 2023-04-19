import { Route, Switch } from 'react-router-dom';
import './styles.css';
import Login from './Login';

function Autenticacao() {

    return (
        <div className="container my-4 autenticacao-container">
            <Switch>
                <Route path="/admin/autenticar/login" exact>
                    <div className="autenticacao-container-login">
                        <Login></Login>                        
                    </div>
                </Route>
                <Route path="/admin/autenticar/recuperar">
                    <div className="autenticacao-container-recuperar">
                        <h1>Tela temporária de recuperar senha</h1>
                    </div>
                </Route>
            </Switch>
        </div>
    );

};

export default Autenticacao;