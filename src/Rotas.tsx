import { Router, Redirect, Route, Switch } from "react-router-dom";
import Header from "./componentes/Header";
import Rodape from "./componentes/Rodape";
import Home from "./paginas/Home";
import Produtos from "./paginas/Produtos";
import Admin from "./paginas/Admin";
import Contatos from "./paginas/Contatos";
import Empresa from "./paginas/Empresa";
import ProdutoDetalhado from "./paginas/ProdutoDetalhado";
import Autenticacao from "./paginas/Admin/MenuAdmin/Autenticar";
import history from "./util/historico";
import NotFound from "./componentes/NotFound";

function Rotas() {

  return (

    <>
      <Router history={history}>
        <Header></Header>
        <Switch>
          <Route path="/" exact>
            <Home></Home>
          </Route>         
          <Route path="/produtos" exact>
            <Produtos></Produtos>
          </Route>
          <Route path="/produtos/:produtoId">
            <ProdutoDetalhado></ProdutoDetalhado>
          </Route>
          <Route path="/contatos">
            <Contatos></Contatos>
          </Route>
          <Route path="/empresa">
            <Empresa></Empresa>
          </Route>
          <Redirect from="/admin/autenticar" to="/admin/autenticar/login" exact></Redirect>
          <Route path="/admin/autenticar">
            <Autenticacao></Autenticacao>
          </Route>
          <Redirect from="/admin" to="/admin/sms" exact></Redirect>
          <Route path="/admin">
            <Admin></Admin>
          </Route>
          <Route path="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Rodape></Rodape>
      </Router>
    </>

  );

}

export default Rotas;