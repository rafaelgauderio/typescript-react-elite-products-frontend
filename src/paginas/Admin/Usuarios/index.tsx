import { Switch, Route } from "react-router-dom";
import ListagemUsuarios from "./ListagemUsuarios";

const UsuariosCadastro = () => {

    return (
        <Switch>
            <Route path="/admin/usuarios" exact>
                <ListagemUsuarios></ListagemUsuarios>
            </Route>
            <Route path="/admin/usuarios/:usuarios">
            </Route>
        </Switch>
    );

}

export default UsuariosCadastro;