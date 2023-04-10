
import CardProduto from '../../componentes/CardProduto/intex';
import Header from '../../componentes/Header';
import Rodape from '../../componentes/Rodape/intex';
import './styles.css';

function Produtos() {
    return (
        <>
            <div className="container w-100 h-100 my-5 produtos-container">
                <h2>Listagem de Produtos</h2>
                <div className="row">
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <CardProduto />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <CardProduto />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <CardProduto />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <CardProduto />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <CardProduto />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <CardProduto />
                    </div> <div className="col-xl-3 col-lg-4 col-sm-6">
                        <CardProduto />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <CardProduto />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm6">
                        <CardProduto />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <CardProduto />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <CardProduto />
                    </div>
                    <div className="col-xl-3 col-lg-4 col-sm-6">
                        <CardProduto />
                    </div>
                </div>
            </div>
        </>
    )

}

export default Produtos;