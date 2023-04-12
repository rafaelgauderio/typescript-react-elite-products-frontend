import { Categoria } from "./Categoria";
import { Embalagem } from "./Embalgem";


export type Produto = {

    id: number;
    descricao: string;
    descricaoCompleta: string;
    preco: number | null;
    largura: number | null;
    metragem: number | null;
    peso: number | null;
    fragrancia: string | null;
    imgUrl: string;
    dataCadastro: string;
    embalagens: Embalagem[];
    categorias: Categoria[];
}