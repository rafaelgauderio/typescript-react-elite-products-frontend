import './styles.css';


type Props = { mensagem: string };

function BotaoPadrao ({mensagem} : Props) {

    return (

        <button className="btn botao-padrao">
            <h5>{mensagem}</h5>
        </button>
    )
    
}

export default BotaoPadrao;