import { Regra } from "./Regra";

export type Usuario = {
    id: number;
    nome: string;
    sobrenome: string;
    email: string;
    password: string;
    regras: Regra[];
}
