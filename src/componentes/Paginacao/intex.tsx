import { ReactComponent as DirecionalProximo } from "../../assets/imagens/direciona-proximo.svg";
import './styles.css';

function Paginacao() {

    return (
        <div className="paginacao-container">
            <DirecionalProximo/>
            <div>1</div>
            <div>2</div>
            <div>3</div>
            <div>4</div>
            <div>5</div>
            <div>...</div>
            <div>10</div>
            <DirecionalProximo/>
        </div>

    )

}

export default Paginacao;