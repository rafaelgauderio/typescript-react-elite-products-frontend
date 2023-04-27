
// arquivo para deixar os dados de autenticação disponiveis para todo os componentes 
// e páginas da aplicação

import { createContext } from "react";
import { DadosTokenJwt } from "./util/requisicao";

export type DadosAutenticacaoGlobais = {
    usuarioAutenticado: boolean;
    dadosTokenJwt?: DadosTokenJwt;
}

export type DadosAutenticacaoTipo = {
    dadosAutenticacaoGlobais: DadosAutenticacaoGlobais;
    setDadosAutenticacaoGlobais: (dadosAutenticacaoGlobais: DadosAutenticacaoGlobais) =>
        void;
}

// criar o contexto global com os valores que devem ficar
// disponíveis para toda a aplicação
export const DadosContextoGlobal = createContext<DadosAutenticacaoTipo>({
    // valor inicial
    dadosAutenticacaoGlobais : {
        usuarioAutenticado : false,
    },
    setDadosAutenticacaoGlobais :  function setarDadosGlobais ()  {
        return null;
    }
});
