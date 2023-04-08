import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./componentes/Header";
import Rodape from "./componentes/Rodape/intex";
import Home from "./paginas/Home";
import Produtos from "./paginas/Produtos";

function Rotas() {

  return (
    <BrowserRouter>
      <Header></Header>
      <Switch>
        <Route path="/" exact>
          <Home></Home>
        </Route>
        <Route path="/produtos">
          <Produtos></Produtos>
        </Route>
      </Switch>
      <Rodape></Rodape>
    </BrowserRouter>
  );

}

export default Rotas;