import './styles.css';
import { ReactComponent as IconeBusca } from '../../assets/imagens/icone-busca.svg';

function BarraBuscaProdutos() {

    return (
        <div className="barra-pesquisa-produto">
            <form action="formulario-barra-pesquisa">
                <div className="descricao-produto-barra-pesquisa">
                    <input
                        type="text"
                        className="form-control"
                        placeholder='Busque aqui seu produto...'>
                    </input>
                    <IconeBusca></IconeBusca>
                </div>
                <div className="embalagem-categoria-limpar-container">
                    <select>
                        <option>Embalagem</option>
                    </select>
                    <select>
                        <option>Categoria</option>
                    </select>
                    <button className="btn btn-warning botao-limpar">Limpar</button>
                </div>
            </form>
        </div>
    );

};

export default BarraBuscaProdutos;