export const formatarLargura = (largura : number) => {

   const parametros = { minimumFractionDigits: 1, maximumFractionDigits:1};
   const larguraFormatada = new Intl.NumberFormat('pt-BR',parametros).format(largura);

   return larguraFormatada;

}