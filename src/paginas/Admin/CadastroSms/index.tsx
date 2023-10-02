import { useForm } from "react-hook-form";
import { requisicaoPadraoBackend } from "../../../util/requisicao";
//import { useEffect } from "react";
import { AxiosRequestConfig } from "axios";
import { toast } from "react-toastify";
import historico from "../../../util/historico";
import Swal from "sweetalert2";
import { Sms } from "../../../tipos/Sms";
import { useState } from "react";


const CadastroSms = () => {

    const [telefone, setTelefone] = useState();
    const [mensagem, setMensagem] = useState();

    const { register, handleSubmit, formState: { errors } } = useForm<Sms>();

    const rotaEnvioSms: string = '/admin/sms';


    function enviaSms(dadosFormularioSms: Sms) {

        const config: AxiosRequestConfig = {
            method: 'POST',
            url: '/sms/enviar',
            data: dadosFormularioSms,
            withCredentials: true,
        };

        console.log(telefone);
        console.log(mensagem);

        requisicaoPadraoBackend(config)
            .then((response) => {
                toast.success("SMS enviado com sucesso", {
                    hideProgressBar: false,
                    theme: "colored",
                    draggable: true
                });
                historico.push(rotaEnvioSms);
            }).catch((response) => {

                Swal.fire({
                    title: '<h1 id="titulo-sweetAlert">Erro ao tentar enviar SMS.</h1>',
                    icon: 'error',
                    html: '<h5>Verifique os dados informados e tente novamente.</h5>',
                });

                toast.error("Erro ao tentar enviar SMS.", {
                    theme: "colored",
                });
            });
    };



    function botaoCancelar(event: { preventDefault: () => void; }) {
        toast.info('Cancelada o envio de SMS', {
            theme: "colored",
        });
        event.preventDefault();
        historico.push(rotaEnvioSms);
    };

    function handleTelefone(event: { target: { value: any; }; }) {
        setTelefone(event.target.value);        
    }

    function handleMensagem(event: { target: { value: any; }; }) {
        setMensagem(event.target.value);        
    }

    return (
        <div className="cadastro-produto-form-container">
            <div className="cadastro-produto-form-card">
                <div className="cadastro-produto-form-titulo">
                    Envio de SMS
                </div>
                <p>Informar o número de telefone sem espaços ou traços</p>
                <form onSubmit={handleSubmit(enviaSms)}>
                    <div className="row">
                        <div className="col-lg-6">
                            <label className="cadastro-categoria-form-card">Número de telefone:
                                <input {
                                    ...register('telefone', {
                                        required: 'Campo obrigatório',
                                        minLength: {
                                            value: 6,
                                            message: 'Mínimo de 6 caracteres'
                                        },
                                        maxLength: {
                                            value: 15,
                                            message: 'Maximo de 15 caracteres'
                                        },
                                    })}
                                    onChange={handleTelefone}
                                    value={telefone}
                                    type='text'
                                    className={`form-control input-padrao
                                   ${errors.telefone ? 'is-invalid' : ''} `}
                                    placeholder='Telefone'
                                    name='telefone' />
                                <div className="invalid-feedback alert-danger text-center d-block">
                                    {errors.telefone?.message}
                                </div>
                            </label>
                            <label className="cadastro-categoria-form-card">Mensagem Personalizada:

                                <textarea rows={12}
                                    {...register('mensagem', {
                                        minLength: {
                                            value: 10,
                                            message: 'Mínimo de 10 caracteres',
                                        },
                                        maxLength: {
                                            value: 100,
                                            message: 'Máximo de 100 caracteres',
                                        },
                                    })}
                                    value={mensagem}
                                    onChange={handleMensagem}
                                    className={`form-control input-padrao h-auto
                                ${errors.mensagem ? 'is-invalid' : ''} `}
                                    placeholder='mensagem personalizada'
                                    wrap="soft"
                                    name='mensagem' >
                                    Visite o nosso catálogo virtual em https://melhoramentoshigieners.com.br/catalogo
                                </textarea>
                            </label>
                        </div>
                    </div>
                    <div className="cadatro-produto-form-botoes-container">
                        <button className="btn btn-outline-danger botao-cancelar"
                            onClick={botaoCancelar}
                        >CANCELAR</button>
                        <button className="btn btn-outline-primary botao-salvar">
                            ENVIAR SMS</button>
                    </div>
                </form>
            </div >
        </div >
    );
}

export default CadastroSms;