import React from "react";
import { Route, Switch } from "react-router-dom";
import ListagemEmbalagens from "./ListagemEmbalagens";
import CadastroEmbalagens from "./CadastroEmbalagem";

function EmbalagensCadastro() {

    return (
        <Switch>
            <Route path="/admin/embalagens" exact>
                <ListagemEmbalagens></ListagemEmbalagens>
            </Route>
            <Route path="/admin/embalagens/:embalagemId">
                <CadastroEmbalagens></CadastroEmbalagens>
            </Route>
        </Switch>
    );

}

export default EmbalagensCadastro;