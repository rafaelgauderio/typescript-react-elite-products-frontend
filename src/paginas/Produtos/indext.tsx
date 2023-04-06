
import Header from '../../componentes/Header';
import Rodape from '../../componentes/Rodape/intex';
import './styles.css';

function Produtos () {
    return (
        <>        
        <Header />
            <div className="container w-100 h-100 my-5 produtos-container">
                <h2>Listagem de Produtos</h2>
            </div>
        <Rodape />
        </>
    )

}

export default Produtos;