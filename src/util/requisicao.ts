import qs from "qs";
import axios from 'axios';

type DadosLogin = {
    username: string;
    password: string;
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
    const dadosUsernamePassword = qs.stringify({ ...dadosLogin,
         grant_type: "password"});

    const endpointAutenticacao = '/oauth/token';

    return axios({
        method: 'POST',
        baseURL: BASE_URL,
        url: endpointAutenticacao,
        data: dadosUsernamePassword,
        headers: cabecalhos
    });

}