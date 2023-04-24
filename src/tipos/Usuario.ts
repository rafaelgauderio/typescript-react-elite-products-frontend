import { Regra } from "./Regra";

export type Usuario = {
    id: number;
    nome: string;
    sobrenome: string;
    email: string;
    regras: Regra[];
}
