import { Route, Switch } from "react-router-dom";
import CadastroProdutos from "./CadastroProduto";
import ListagemProdutos from "./ListagemProdutos";

function ProdutosCadastro () {

    return (
        <Switch>
            <Route path="/admin/produtos" exact>
                <ListagemProdutos></ListagemProdutos>
            </Route>
            <Route path="/admin/produtos/:produtoId">
                <CadastroProdutos></CadastroProdutos>
            </Route>
        </Switch>
    )

}

export default ProdutosCadastro;