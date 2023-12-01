import React from 'react';
import './styles.css';
import { ReactComponent as ImagemPlaceholder } from '../../../../assets/imagens/image-placeholder.svg';

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
                <small className='aviso-upload'>
                    <p>Imagens devem ter até <strong>15 mb</strong> e formato PNG ou JPG.</p>
                </small>
            </div>
            <div className="col-6">
                <ImagemPlaceholder />
            </div>
        </div >
    );
}

export default UploadImagem;