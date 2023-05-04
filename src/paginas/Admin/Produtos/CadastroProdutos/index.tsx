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
                        <div className="col-lg-6">
                            <label>Nome:
                                <input type="text" className="form-control input-padrao" />
                            </label>
                            <label>Peso:
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
                        <div className="col-lg-6">
                            <label>Categorias:
                                <input type="text" className="form-control input-padrao" />
                            </label>
                            <label>Embalagens:
                                <input type="text" className="form-control input-padrao" />
                            </label>
                            <label>Descrição Detalhada:
                                <textarea className="form-control input-padrao h-auto" rows={12}></textarea>
                            </label>
                        </div>
                    </div>
                    <div className="cadatro-produto-form-botoes-container">
                        <button className="btn btn-outline-danger botao-cancelar">CANCELAR</button>
                        <button className="btn btn-outline-primary botao-salvar">SALVAR</button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default CadastroProdutos;