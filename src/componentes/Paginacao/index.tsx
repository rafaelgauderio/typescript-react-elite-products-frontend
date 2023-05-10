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
            />

            <div className="paginacao-container">
                <DirecionalAnterior className="direcional-anterior icone-ativado" />
                <div className="paginacao-icone">1</div>
                <div className="paginacao-icone">2</div>
                <div className="paginacao-icone">3</div>
                <div className="paginacao-icone">4</div>
                <div className="paginacao-icone">5</div>
                <div className="paginacao-icone">...</div>
                <div className="paginacao-icone ativado">10</div>
                <DirecionalProximo className="direcional-proximo icone-desativado" />
            </div>
        </>

    )

}

export default Paginacao;