import jwtDecode from "jwt-decode";

export type Regra = 'ROLE_ADMIN_SISTEMA' |
    'ROLE_GERENTE_LOJA' |
    'ROLE_CLIENTE';

export type DadosTokenJwt = {
    exp: number;
    user_name: string;
    authorities: Regra[];
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

export const getDadosTokenJwt = function (): DadosTokenJwt | undefined {

    // Pode disparar um exceção ao tentar decodificar o token, pois o token jwt pode estar
    // vazio ou inválido
    try {
        return jwtDecode(getDadosAutenticacao().access_token) as DadosTokenJwt;
    } catch (erro) {
        return undefined;
    }

}

export const removerDadosAutenticacao = function () {
    // removendo os dados de token de login quando o cliente clicar em sair
    localStorage.removeItem('authData');
}

// o tempo de expiração do token está em formato unixtimestamp
// então tem que fazer um lógica apenas para verificar se o tempo de expiração 
// não é maior que a data atual
export const isUsuarioAutenticado = function (): boolean {

    const dadosTokenJwt = getDadosTokenJwt();
    const momentoAtual = Date.now() / 1000; // converter de milisegundos para segundos
    // validar se o token é valido e se ele ainda não experou a validade
    if (dadosTokenJwt && dadosTokenJwt.exp > momentoAtual) {
        return true; //usuário autenticado
    } else {
        return false; //usuário não autenticado
    }
}

export function endpointTemRestricao(regras: Regra[]) {

    // senão tiver nenhum restrição, o endpoint pode ser acesso por todos
    if (regras.length === 0) {
        return true;
    }
    const dadosTokenJtw = getDadosTokenJwt();
    // se o perfil tiver a authorização de acessar esse endpoint, ele acessa 
    if (dadosTokenJtw !== undefined) {
        for (var i = 0; i < regras.length; i++) {
            if (dadosTokenJtw.authorities.includes(regras[i])) {
                return true;
            }
        }
    }
    //se o endpoint tiver restrição de acesso e o usuário não 
    // tiver essa permissão. Então a rota fica bloqueada
    return false;
}

