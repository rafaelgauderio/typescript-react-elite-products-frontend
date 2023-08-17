import React from "react";
import { Route, Switch } from "react-router-dom";
import ListagemCategorias from "./ListagemCategorias";
import CadastroCategoria from "./CadastroCategoria";


function CategoriasCadastro () {

    return (
        <Switch>
            <Route path="/admin/categorias" exact>
                <ListagemCategorias></ListagemCategorias>
            </Route>  
            <Route path="/admin/categorias/:categoriaId">
                <CadastroCategoria></CadastroCategoria>
            </Route>          
        </Switch>
    );

}

export default CategoriasCadastro;