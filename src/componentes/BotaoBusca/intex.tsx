import './styles.css';

// props são argumentos dos componentes react, visto que componentes
// são funções javascript

type Props = { mensagem: string };

function BotaoBusca ({mensagem} : Props) {

    return (

        <button className="btn botao-busca">
            <h5>{mensagem}</h5>
        </button>
    )
    
}

export default BotaoBusca;