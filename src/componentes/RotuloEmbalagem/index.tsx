import './styles.css';

type PropsEmbalagem = {
    descricao: string;
}


function RotuloEmbalagem({ descricao }: PropsEmbalagem) {
    return (
        <div className="rotulo-embalagem-container">
            {descricao}
        </div>
    )
};

export default RotuloEmbalagem;