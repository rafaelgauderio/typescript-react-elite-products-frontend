import { ReactComponent as DirecionalProximo } from "../../assets/imagens/direcional-proximo.svg";
import { ReactComponent as DirecionalAnterior } from "../../assets/imagens/direcional-anterior.svg";
import './styles.css';

function Paginacao() {

    return (
        <div className="paginacao-container">
            <DirecionalAnterior className="direcional-anterior icone-ativado"/>
            <div className="paginacao-icone">1</div>
            <div className="paginacao-icone">2</div>
            <div className="paginacao-icone">3</div>
            <div className="paginacao-icone">4</div>
            <div className="paginacao-icone">5</div>
            <div className="paginacao-icone">...</div>
            <div className="paginacao-icone ativado">10</div>
            <DirecionalProximo className="direcional-proximo icone-desativado"/>
        </div>

    )

}

export default Paginacao;