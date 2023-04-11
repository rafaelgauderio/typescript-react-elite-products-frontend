import { Categoria } from "./Categoria";
import { Embalagem } from "./Embalgem";


export type Produto = {


    id: number;
    descricao: string,
    descricaoCompleta: "Papel higiênico em rolo 100% fibras virgens, Folha Dupla, Super Macio, Folhas Brancas",
    preco: null,
    largura: 10.0,
    metragem: 300,
    peso: null,
    fragrancia: null,
    imgUrl: "https://melhoramentoshigienrs.com.br/imagens/7127.jpg",
    dataCadastro: "2023-03-01T16:00:00.123450Z",
    embalagens: Embalagem[];
    categorias: Categoria[];
}