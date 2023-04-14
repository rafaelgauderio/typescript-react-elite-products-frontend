import CardContato from '../../componentes/CardContato';
import { Contato } from '../../tipos/Contatos';
import './styles.css';

function Contatos() {

    const contatoMocado: Contato = {
        id: 1,
        nome: "Rafael de luca",
        setor: "Tecnologia da Informação",
        email: "rafael@melhoramentoshigieners.com.br",
        telefone: "51-3373800"
    }


    return (
        <div className="container my-4 my-lg-5 contato-container">
            <div className="row titulo-container">
                <h2>Entre em contato</h2>
            </div>
            <div className="row">
                <div className="col-lg-4 col-sm-12">
                    <CardContato contato={contatoMocado}></CardContato>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <CardContato contato={contatoMocado}></CardContato>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <CardContato contato={contatoMocado}></CardContato>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <CardContato contato={contatoMocado}></CardContato>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <CardContato contato={contatoMocado}></CardContato>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <CardContato contato={contatoMocado}></CardContato>
                </div>
                <div className="col-lg-4 col-md-12">
                    <CardContato contato={contatoMocado}></CardContato>
                </div>
                <div className="col-lg-4 col-sm-12">
                    <CardContato contato={contatoMocado}></CardContato>
                </div>
            </div>
        </div>

    );
}

export default Contatos;