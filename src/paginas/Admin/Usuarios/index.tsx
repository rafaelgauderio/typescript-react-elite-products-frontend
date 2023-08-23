import { Switch, Route } from "react-router-dom";
import ListagemUsuarios from "./ListagemUsuarios";
import CadastroUsuario from "./CadastroUsuario";

const UsuariosCadastro = () => {

    return (
        <Switch>
            <Route path="/admin/usuarios" exact>
                <ListagemUsuarios></ListagemUsuarios>
            </Route>
            <Route path="/admin/usuarios/:usuarios">
                <CadastroUsuario></CadastroUsuario>
            </Route>
        </Switch>
    );

}

export default UsuariosCadastro;