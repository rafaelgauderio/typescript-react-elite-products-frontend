import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import Header from "./componentes/Header";
import Rodape from "./componentes/Rodape";
import Home from "./paginas/Home";
import Produtos from "./paginas/Produtos";
import Admin from "./paginas/Admin";
import Contatos from "./paginas/Contatos";
import Empresa from "./paginas/Empresa";
import ProdutoDetalhado from "./paginas/ProdutoDetalhado";
import Autenticacao from "./paginas/Admin/MenuAdmin/Autenticar";

function Rotas() {

  return (

    <>
      <BrowserRouter>
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
          <Route path="/admin/autenticar">
            <Autenticacao></Autenticacao>
          </Route>
          <Route path="/admin">
            <Redirect from="/admin" to="/admin/sms" exact></Redirect>
            <Admin></Admin>
          </Route>
        </Switch>
        <Rodape></Rodape>
      </BrowserRouter>
    </>

  );

}

export default Rotas;