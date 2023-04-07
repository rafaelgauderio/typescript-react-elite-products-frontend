import { BrowserRouter, Route, Switch } from "react-router-dom";
import Header from "./componentes/Header";
import Rodape from "./componentes/Rodape/intex";
import Home from "./paginas/Home";

function Rotas ()  {

    return (
        <BrowserRouter>
        <Header></Header>
        <Switch>
          <Route path="/" exact>
            <Home></Home>
          </Route>         
        </Switch>
        <Rodape></Rodape> 
      </BrowserRouter>
    );

}

export default Rotas;