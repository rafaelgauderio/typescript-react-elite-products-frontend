import qs from "qs";
import axios, { AxiosRequestConfig } from 'axios';
import historico from "./historico";
import { getDadosAutenticacao } from "./autenticacao";

type DadosLogin = {
    username: string;
    password: string;
}

export const BASE_URL = process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';

export const LINK_WHATSUP = "https://wa.me/5551992847442?text=Bem-vindo+ao+catálogo+de+produtos+da+Melhoramentos+Higiene.+Como+podemos+ajudá-lo?"

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

// fazendo interceptação de de requições com axios interceptors
// permite fazer uma ação antes de depois da requisição
axios.interceptors.request.use(function (configuracao) {

    return configuracao;
}, function (erro) {

    return Promise.reject(erro);
});

axios.interceptors.response.use(function (resposta) {

    return resposta;
}, function (erro) {
    // codigo http 403 = Forbidden
    // codigo http 401 = Unauthorized
    // direcionar para a página de login caso usuário tentar acessar rota protegida ou 
    // sem autorização par ao usuário
    if (erro.response.status === 401) {
        historico.push('/admin/autenticar');
    }

    return Promise.reject(erro);
});