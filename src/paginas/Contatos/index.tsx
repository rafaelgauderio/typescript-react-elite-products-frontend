import CardContato from '../../componentes/CardContato';
import './styles.css';

function Contatos () {

    return (
        <div className="container my-4">
            <div className="contato-card">
            <CardContato></CardContato>
            <CardContato></CardContato>
            <CardContato></CardContato>
            <CardContato></CardContato>
            <CardContato></CardContato>
            </div>
        </div>
    );
}

export default Contatos;