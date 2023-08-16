import React from "react";
import { Route, Switch } from "react-router-dom";
import ListagemCategorias from "./ListagemCategorias";


function CategoriasCadastro () {

    return (
        <Switch>
            <Route path="/admin/categorias" exact>
                <ListagemCategorias></ListagemCategorias>
            </Route>            
        </Switch>
    );

}

export default CategoriasCadastro;