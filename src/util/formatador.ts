export const formatarLargura = (largura: number) => {

   const parametros = { minimumFractionDigits: 1, maximumFractionDigits: 1 };
   const larguraFormatada = new Intl.NumberFormat('pt-BR', parametros).format(largura);

   return larguraFormatada;

}

export const formatarMetragem = (metragem: number) => {

   const parametros = { minimumFractionDigits: 0, maximumFractionDigits: 0 };
   return new Intl.NumberFormat('pt-BR', parametros).format(metragem);

}