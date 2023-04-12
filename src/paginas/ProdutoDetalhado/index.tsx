import './styles.css';

function ProdutoDetalhado() {

    return (
        <div className="produto-detalhado-container">
            <div className="produto-detalhado-card">
                <div className="pagina-anterior-container">
                    <button className="btn btn-primary botao-voltar">Voltar ao catálogo</button>
                </div>
                <div className="row">
                    <div className="col-xl-5">
                        <div className="imagem-container">
                            <img src={require("../../assets/imagens/7127.png")} alt="imagem do produto"></img>
                        </div>
                        <div className="descricao-container">
                            <h2>Papel Higiênico Rolo 7127</h2>
                        </div>
                    </div>
                    <div className="col-xl-7">
                        <div className="descricao-embalagem-categoria-container">
                            <div className="categorias-container">
                                <h3>Categorias do produto</h3> 
                                <p>Folha Dupla</p>
                                <p>Papel higiênico</p> 
                            </div>                            
                            <div className="embalagens-container">  
                                <h3>Descrição da embalagem</h3> 
                                <p>2.400 metros</p>
                                <p>Fardo com 8 rolos</p>                             
                            </div>
                            <h3>Descrição completa</h3>
                            <p>Papel higiênico em rolo 100% fibras virgens, Folha Dupla, Super Macio, Folhas Brancas</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProdutoDetalhado;
