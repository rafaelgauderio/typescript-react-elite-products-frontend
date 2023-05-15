import './styles.css';
import { ReactComponent as IconeBusca } from '../../assets/imagens/icone-busca.svg';
import { Controller, useForm } from 'react-hook-form';
import { Embalagem } from '../../tipos/Embalgem';
import { Categoria } from '../../tipos/Categoria';
import Select from 'react-select';
import { useEffect, useState } from 'react';
import { requisicaoPadraoBackend } from '../../util/requisicao';

function BarraBuscaProdutos() {

    type DadosBarraBusca = {
        descricao: string;
        embalagem: Embalagem;
        categoria: Categoria;
    }

    const {
        register,
        handleSubmit,
        control,
    } = useForm<DadosBarraBusca>();

    const [selectEmbalagens, setSelectEmbalagens] = useState<Embalagem[]>([]);

    const [selectCategorias, setSelectCategorias] = useState<Categoria[]>([]);

    // a barra de busca é um formulario que faz um select no database com os filtros desejados
    function buscarProdutoAoEnviar(dadosFormularioBusca: DadosBarraBusca) {
        console.log("Enviado dados formulario!", dadosFormularioBusca);

    }

    useEffect(() => {
        requisicaoPadraoBackend({ url: '/embalagens' })
            .then((resposta) => {
                setSelectEmbalagens(resposta.data.content);
            });
    }, []);

    useEffect(() => {
        requisicaoPadraoBackend({ url: '/categorias' })
            .then((resposta) => {
                setSelectCategorias(resposta.data.content);
            });
    }, []);



    return (
        <div className="barra-pesquisa-produto">
            <form onSubmit={handleSubmit(buscarProdutoAoEnviar)} className="formulario-barra-pesquisa">
                <div className="descricao-produto-barra-pesquisa">
                    <input
                        {...register('descricao')}
                        name='descricao'
                        type="text"
                        className="form-control"
                        placeholder='Busque aqui seu produto...'>
                    </input>
                    <button className="icone-botao-busca-barra-pesquisa">
                        <IconeBusca></IconeBusca>
                    </button>
                </div>
                <div className="embalagem-categoria-limpar-container">
                    <div className="embalagem-container">
                        <Controller
                            name="embalagem"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    options={selectEmbalagens}
                                    classNamePrefix={'barra-pesquisa-select'}
                                    placeholder='Embalagens'
                                    isClearable={true}
                                    isMulti={true}
                                    getOptionLabel={(embalagem: Embalagem) => embalagem.descricao}
                                    getOptionValue={(embalagem: Embalagem) => String(embalagem.id)}
                                />
                            )}
                        />
                    </div>
                    <div className="categoria-container">
                        <Controller
                            name="categoria"
                            control={control}
                            render={({ field }) => (
                                <Select
                                    {...field}
                                    options={selectCategorias}
                                    classNamePrefix={'barra-pesquisa-select'}
                                    placeholder='Categorias'
                                    isClearable={true}
                                    isMulti={true}
                                    getOptionLabel={(categoria: Categoria) => categoria.descricao}
                                    getOptionValue={(categoria: Categoria) => String(categoria.id)}
                                />
                            )}
                        />
                    </div>
                    <div>
                        <button className="btn btn-primary botao-limpar">Limpar Busca</button>
                    </div>
                </div>
            </form>
        </div>
    );

};

export default BarraBuscaProdutos;