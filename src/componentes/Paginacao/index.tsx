import { ReactComponent as DirecionalProximo } from "../../assets/imagens/direcional-proximo.svg";
import { ReactComponent as DirecionalAnterior } from "../../assets/imagens/direcional-anterior.svg";
import './styles.css';
import ReactPaginate from "react-paginate";

function Paginacao() {



    return (
        <>
            <ReactPaginate
                pageCount={12} // toral de paginas
                pageRangeDisplayed={4} // quantos componentes ficam no meio da paginação
                marginPagesDisplayed={1} // quantos componentes aparecem no final
                breakClassName="paginacao-icone-reticencias"
                containerClassName="paginacao-container"
                pageLinkClassName="paginacao-icone"
                activeLinkClassName="icone-link-ativado"
                nextClassName="direcional-proximo"
                previousClassName="direcional-anterior"
                disabledClassName="icone-desativado "

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

