import qs from "qs";
import axios, { AxiosRequestConfig } from 'axios';

type DadosLogin = {
    username: string;
    password: string;
}

type RespostaLogin = {
    access_token: string;
    token_type: string;
    expires_in: number;
    scope: string;
    id_usuario: number;
    nome_usuario: string;
    sobrenome_usuario: string;
}


export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';

const ID_CLIENTE = process.env.REACT_APP_CLIENT_ID ?? 'melhoramentosId';

const SENHA_CLIENTE = process.env.REACT_APP_CLIENTE_SECRET ?? 'melhoramentosSecret';

/*
const cabecalhoDeAutorizacaoBasica = () => 
    
        'Basic ' + window.btoa(ID_CLIENTE + ':' + SENHA_CLIENTE);
*/

export const requisicaoDeLogin = (dadosLogin: DadosLogin) => {

    let cabecalhos = {
        'Content-Type': 'application/x-www-form-urlencoded',
        Authorization: 'Basic ' + window.btoa(ID_CLIENTE + ':' + SENHA_CLIENTE)
    };

    // função stringify gera o urlencoded equivalente ao objeto com dados de login 
    // que foram requisitados ao backend
    const dadosUsernamePassword = qs.stringify({
        ...dadosLogin,
        grant_type: "password"
    });

    const endpointAutenticacao = '/oauth/token';

    return axios({
        method: 'POST',
        baseURL: BASE_URL,
        url: endpointAutenticacao,
        data: dadosUsernamePassword,
        headers: cabecalhos
    });

}


// função stringify para converter de objeto para string (JSON na forma de texto puro)
// função parse para converter de string para objeto
// localstorage só trabalha com string 

export const setDadosAutenticacao = (objeto: RespostaLogin) => {
    localStorage.setItem('authData', JSON.stringify(objeto));
};

export const getDadosAutenticacao = () => {
    const dadosComoString = localStorage.getItem('authData') ?? "{}";
    const dadosComoObjeto = JSON.parse(dadosComoString);
    return dadosComoObjeto as RespostaLogin;
}

export const requisicaoPadraoBackend = (configuracao: AxiosRequestConfig) => {


    const cabecalhos = configuracao.withCredentials ?
        {
            Authorization: 'Bearer ' + getDadosAutenticacao().access_token,
        } :
        configuracao.headers;

    return axios({
        ...configuracao,
        baseURL: BASE_URL,
        headers: cabecalhos
    });

}