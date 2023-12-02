import React, { useState } from 'react';
import './styles.css';
import { ReactComponent as ImagemPlaceholder } from '../../../../assets/imagens/image-placeholder.svg';
import { requisicaoPadraoBackend } from '../../../../util/requisicao';
import { toast } from 'react-toastify';

function UploadImagem() {

    // inicio em zero o pgresso de envio
    const[progessoEnvio, setProgressoEnvio] = useState(0);

    // ProgressEvent é um tipo nativo do javaScript
    function onProgressoEnvio  (eventoProgresso : ProgressEvent) {
        const tamanhoArquivo = eventoProgresso.total;
        const porgentagemEnvio = Math.round(eventoProgresso.loaded * 100 / tamanhoArquivo);
        //console.log(porgentagemEnvio);
        setProgressoEnvio(porgentagemEnvio);
    }

    function enviarImagem(listaImagensSelecionadas: File) {
        const dados = new FormData();
        dados.append('arquivo', listaImagensSelecionadas);

        requisicaoPadraoBackend({
            url: '/produtos/imagem',
            method: 'POST',
            data: dados,            
            onUploadProgress: onProgressoEnvio,           
            withCredentials: true,
        })
            .then(() => {
                console.log("Imagem enviada com sucesso");
            })
            .catch(() => {
                //console.log("Erro ao tentar enviar imagem");
                toast.error("Erro ao tentar enviar imagem", {
                    theme: "colored",
                });
            })
            .finally (() => {
                setProgressoEnvio(0);
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
                    <div className="progresso-envio" style={{
                        width: `${progessoEnvio}%`
                    }}>

                    </div>
                </div>
            </div>

        </div >
    );
}

export default UploadImagem;