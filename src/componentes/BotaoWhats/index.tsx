import './styles.css';

type Props = {mensagem : string};

function BotaoWhats ({mensagem} : Props) {

    return (

        <button className="btn btn-primary botao-whats">
            <h5>{mensagem}</h5>
        </button>
    )
    
}

export default BotaoWhats;