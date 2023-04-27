import React, { useState } from 'react';
import './assets/styles/custom.scss';
import './App.css';
import Rotas from './Rotas';
import { DadosAutenticacaoGlobais, ContextoGlobalAutenticado } from './ContextoGlobal';


function App() {

  // useState que vai prover o contexto global corar em ContextoGlobal.ts para toda a aplicação
  const [ dadosAutenticacaoGlobais, setDadosAutenticacaoGlobais] = useState<DadosAutenticacaoGlobais>({
    // presupoem-se que o usuário não está autenticado antes dele fazer login
    usuarioAutenticado: true,
  })

    // agora a aplicação pode monitorar se o usuário está autenticado em todas as rotas da API
  return (

    <><ContextoGlobalAutenticado.Provider
      value={{ dadosAutenticacaoGlobais, setDadosAutenticacaoGlobais }}>
      <Rotas></Rotas>
    </ContextoGlobalAutenticado.Provider>

    </>

  );
}

export default App;
