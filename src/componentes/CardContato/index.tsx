import { Contato } from '../../tipos/Contato';
import './styles.css';

type Props = {
    contato: Contato;
}

function CardContato( {contato} : Props) {

    return (
        <div className="contato-card">
            <div className="contato-conteudo">
                <h4>{contato.departamentoNome}</h4>
                <p>{contato.nome}</p>
                <p>{contato.email}</p>
                <p>{contato.telefone}</p>
            </div>

        </div>

    );

}

export default CardContato;
