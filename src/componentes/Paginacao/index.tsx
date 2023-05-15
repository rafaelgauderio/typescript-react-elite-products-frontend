import { ReactComponent as DirecionalProximo } from "../../assets/imagens/direcional-proximo.svg";
import { ReactComponent as DirecionalAnterior } from "../../assets/imagens/direcional-anterior.svg";
import './styles.css';
import ReactPaginate from "react-paginate";

type Props = {
    totalPaginas: number;
    elementosPorPagina: number; // range
    onAtualizarPagina: (numeroPagina: number) => void;
    forcarPagina?: number; // interrogação para deixar o parâmetro como optional
};

function Paginacao({ totalPaginas, elementosPorPagina, onAtualizarPagina, forcarPagina }: Props) {


    return (
        <>
            <ReactPaginate
                forcePage={forcarPagina}
                pageCount={totalPaginas} // total de paginas
                pageRangeDisplayed={elementosPorPagina} // quantos componentes ficam no meio da paginação
                marginPagesDisplayed={1} // quantos componentes aparecem no final
                breakClassName="paginacao-icone-reticencias"
                containerClassName="paginacao-container"
                pageLinkClassName="paginacao-icone"
                activeLinkClassName="icone-link-ativado"
                nextClassName="direcional-proximo"
                previousClassName="direcional-anterior"
                disabledClassName="icone-desativado"                
                onPageChange={(itensPaginacao) => (onAtualizarPagina)
                    ? onAtualizarPagina(itensPaginacao.selected) // vai selecionar o número da pagina que atualizou no ReactPaginate
                    : {}
                }


                previousLabel={
                    <div className="rotulo-direcionais">
                        <DirecionalAnterior className="direcional-anterior"></DirecionalAnterior>
                        <text className="direcional-anterior">Anterior</text>
                    </div>
                }
                nextLabel={
                    <div className="rotulo-direcionais">
                        <text className="direcional-posterior">Próximo</text>
                        <DirecionalProximo className="direcional-proximo"></DirecionalProximo>
                    </div>}
            />
        </>

    )

}

export default Paginacao;

