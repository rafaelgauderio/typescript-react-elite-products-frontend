import './styles.css';

type PropsCategoria = {
    descricao: string;
}


function RotuloCategoria({ descricao }: PropsCategoria) {
    return (
        <div className="rotulo-categoria-container">
            {descricao}
        </div>
    )
}

export default RotuloCategoria;