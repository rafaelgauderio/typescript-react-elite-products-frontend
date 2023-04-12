import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./componentes/Header";
import Rodape from "./componentes/Rodape/intex";
import Home from "./paginas/Home";
import Produtos from "./paginas/Produtos";
import Admin from "./paginas/Admin";
import Contatos from "./paginas/Contatos";
import Empresa from "./paginas/Empresa";
import ProdutoDetalhado from "./paginas/ProdutoDetalhado";

function Rotas() {

  return (
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
      </Switch>
      <Route path="/admin">
        <Admin></Admin>
      </Route>
      <Rodape></Rodape>
    </BrowserRouter>
  );

}

export default Rotas;