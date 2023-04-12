import './styles.css';

function ProdutoDetalhado() {

    return (
        <div className="produto-detalhado-container">
            <div className="produto-detalhado-card">
                <div className="pagina-anterior-container">
                    <button className="btn btn-primary botao-voltar">Voltar ao catálogo</button>
                </div>
                <div className="row">
                    <div className="col-xl-7">
                        <div className="imagem-container">
                            <img src={require("../../assets/imagens/7127.png")} alt="imagem do produto"></img>
                        </div>
                        <div className="descricao-container">
                            <h3>Papel Higiênico Rolo 7127</h3>
                        </div>
                    </div>
                    <div className="col-xl-5">
                        <div className="descricao-embalagem-categoria-container">
                            <div className="categorias-cotainer">
                                <h3>Categorias do Produto</h3> 
                                <p>Folha Dupla</p>
                                <p>Papel higiênico</p> 
                            </div>                            
                            <div className="embalagens-cotainer">  
                                <h3>Embalagens disponíveis</h3> 
                                <p>2.400 metros</p>
                                <p>Fardo com 8 rolos</p>                             
                            </div>
                            <h3>Descrição completa  do produto</h3>
                            <p>Papel higiênico em rolo 100% fibras virgens, Folha Dupla, Super Macio, Folhas Brancas</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProdutoDetalhado;
