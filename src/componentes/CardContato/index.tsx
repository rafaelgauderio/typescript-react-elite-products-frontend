import { Contato } from '../../tipos/Contatos';
import './styles.css';

type Props = {
    contato: Contato;
}

function CardContato() {

    return (
        <div className="contato-card">
            <div className="contato-conteudo">
                <h4>Tecnologia da Informação</h4>
                <p>Rafael de Luca</p>
                <p>rafael@melhoramentoshigieners.com.br</p>
                <p>51-3373800</p>
            </div>

        </div>

    );

}

export default CardContato;
