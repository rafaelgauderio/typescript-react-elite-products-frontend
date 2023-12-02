import React from 'react';
import './styles.css';
import { ReactComponent as ImagemPlaceholder } from '../../../../assets/imagens/image-placeholder.svg';
import { requisicaoPadraoBackend } from '../../../../util/requisicao';

function UploadImagem() {

    function enviarImagem(listaImagensSelecionadas: File) {
        const dados = new FormData();
        dados.append('arquivo', listaImagensSelecionadas);

        requisicaoPadraoBackend({
            url: '/produtos/imagem',
            method: 'POST',
            data: dados,
            withCredentials: true
        })
            .then(() => {
                console.log("Imagem enviada com sucesso");
            })
            .catch(() => {
                console.log("Erro ao tentar enviar imagem");
            })
    }


    function handleOnChangeImage(evento: React.ChangeEvent<HTMLInputElement>) {
        const listaImagensSelecionadas = evento.target.files?.[0];

        //só subir imagem caso o usuário selecionou alguma imagem válida
        if (listaImagensSelecionadas !== undefined) {
            //console.log(listaImagensSelecionadas);
            enviarImagem(listaImagensSelecionadas);

        }

    }

    return (
        <div className="row">
            <div className="col-6">
                <div className="botao-upload-container">
                    <input
                        type="file"
                        id="envioImagem"
                        accept="image/jpg, image/jpeg, image/png"
                        hidden
                        onChange={handleOnChangeImage}
                    >
                    </input>
                    <label htmlFor="envioImagem">Upload Imagem</label>
                </div>
                <small className='aviso-upload'>
                    <p>Imagens devem ter até <strong>15 mb</strong> e formato PNG ou JPG.</p>
                </small>
            </div>
            <div className="col-6 upload-imagem">
                <ImagemPlaceholder />
                <div className="progresso-envio-container">
                    <div className="progresso-envio">

                    </div>
                </div>
            </div>

        </div >
    );
}

export default UploadImagem;