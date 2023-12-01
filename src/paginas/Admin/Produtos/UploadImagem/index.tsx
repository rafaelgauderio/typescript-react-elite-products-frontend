import React from 'react';

function UploadImagem() {
    return (
        <div className="row">
            <div className="col-6">
                <div className="botao-upload-container">
                    <input
                        type="file"
                        hidden
                        id="envioImagem"
                        >
                    </input>
                    <label htmlFor="envioImagem">Upload Imagem</label>
                </div>
            </div>
            <div className="col-6">
                Figura
            </div>
        </div >
    );
}

export default UploadImagem;