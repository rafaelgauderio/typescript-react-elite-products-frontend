import {Method} from 'axios';

export type ParametrosAxios = {
    url: string,
    metodo?: Method;
    dados?: object;
    parametros?: object;
    cabecalho?: any;
}