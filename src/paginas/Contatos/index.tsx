import CardContato from '../../componentes/CardContato';
import './styles.css';

function Contatos() {

    return (
        <div className="container my-4 my-lg-5 contato-container">
            <div className="row titulo-container">
                <h2>Entre em contato</h2>
            </div>
            <div className="row">
                <div className="col-lg-4 col-sm-12">
                    <CardContato></CardContato>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <CardContato></CardContato>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <CardContato></CardContato>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <CardContato></CardContato>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <CardContato></CardContato>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <CardContato></CardContato>
                </div>
                <div className="col-lg-4 col-md-12">
                    <CardContato></CardContato>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <CardContato></CardContato>
                </div>
            </div>
        </div>

    );
}

export default Contatos;