import './styles.css';

function CadastroProdutos() {

    return (
        <div className="cadastro-produto-form-container">
            <div className="cadasto-produto-form-card">
                <div className="cadastro-produto-form-titulo">
                    Dados do Produto
                </div>
                <form>
                    <div className="row">
                        <div className="col-lg-7">
                            <label>Nome:
                                <input type="text" className="form-control input-padrao" />
                            </label>
                            <label>Preço:
                                <input type="text" className="form-control input-padrao" />
                            </label>
                            <label>Largura:
                                <input type="text" className="form-control input-padrao" />
                            </label>
                            <label>Metragem:
                                <input type="text" className="form-control input-padrao" />
                            </label>
                            <label>Fragrância:
                                <input type="text" className="form-control input-padrao" />
                            </label>
                            <label>Imagem:
                                <input type="text" className="form-control input-padrao" />
                            </label>
                        </div>
                        <div className="col-lg-5">
                            <label>Descrição Detalhada:
                            <textarea className="form-control input-padrao" rows={20}></textarea>
                            </label>
                        </div>
                    </div>
                    <div>
                        <button className="btn btn-outline-danger">CANCELAR</button>
                        <button className="btn btn-outline-info">SALVAR</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CadastroProdutos;