import CardCadastroCategoria from "../../../../componentes/CardCadastroCategoria";
import './styles.css';

export default function ListagemCategorias() {
    return (<>
        <div className="cadastro-categoria-container">
            <CardCadastroCategoria categoria={{
                id: 0,
                descricao: "Categoria Teste"
            }}></CardCadastroCategoria>
        </div>
    </>
    );
}


