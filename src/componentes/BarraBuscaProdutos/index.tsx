import './styles.css';
import { ReactComponent as IconeBusca } from '../../assets/imagens/icone-busca.svg';
import { Controller, useForm } from 'react-hook-form';
import { Embalagem } from '../../tipos/Embalgem';
import { Categoria } from '../../tipos/Categoria';
import Select from 'react-select';
import { useEffect, useState } from 'react';
import { requisicaoPadraoBackend } from '../../util/requisicao';

export type DadosBarraBusca = {
    descricao: string;
    embalagem?: Embalagem | null;
    categoria?: Categoria | null;
}

type PropsBarraBusca = {
    onSubmitFormularioBusca : (dadosFormulario : DadosBarraBusca) => void;
}

function BarraBuscaProdutos({onSubmitFormularioBusca} : PropsBarraBusca) {


    const {
        register,
        handleSubmit,
        control,
        setValue,
        // getValues permite acessar os dados do formulário
        getValues
    } = useForm<DadosBarraBusca>();

    const [selectEmbalagens, setSelectEmbalagens] = useState<Embalagem[]>([]);

    const [selectCategorias, setSelectCategorias] = useState<Categoria[]>([]);

    // a barra de busca é um formulario que faz um select no database com os filtros desejados
    function buscarProdutoAoEnviar(dadosFormularioBusca: DadosBarraBusca) {
        //console.log("Enviado dados formulario!", dadosFormularioBusca);
        onSubmitFormularioBusca(dadosFormularioBusca);

    }

    function limparFormularioPesquisa() {
        setValue("descricao", "");
        setValue("embalagem", null);
        setValue("categoria", null);
    }

    function selectEmbalagemOnChange(embalagem: Embalagem) {
        setValue("embalagem", embalagem );        

        let dadosFormulario: DadosBarraBusca = {
            descricao: getValues("descricao"),
            embalagem: getValues("embalagem"),
            categoria: getValues("categoria")

        }

        //console.log("Embalagens selecionadas: ", dadosFormulario);
        onSubmitFormularioBusca(dadosFormulario);
    }

    function selectCategoriaOnChange(categoria: Categoria) {
        setValue("categoria", categoria);        

        let dadosFormulario: DadosBarraBusca = {
            descricao: getValues("descricao"),
            categoria: getValues("categoria"),
            embalagem: getValues("embalagem")

        }

        //console.log("Categorias selecionadas: ", dadosFormulario);
        onSubmitFormularioBusca(dadosFormulario);
    }

    useEffect(() => {
        requisicaoPadraoBackend({ url: '/embalagens', params: {
            size:50
        } })
            .then((resposta) => {
                setSelectEmbalagens(resposta.data.content);
            });
    }, []);

    useEffect(() => {
        requisicaoPadraoBackend({ url: '/categorias', params: {
            size:50
        } })
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
                                    pageSize={30}
                                    //isMulti={true}
                                    onChange={embalagem => selectEmbalagemOnChange(embalagem as Embalagem)}
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
                                    //isMulti={true}
                                    onChange={categoria => selectCategoriaOnChange(categoria as Categoria)}
                                    getOptionLabel={(categoria: Categoria) => categoria.descricao}
                                    getOptionValue={(categoria: Categoria) => String(categoria.id)}
                                />
                            )}
                        />
                    </div>
                    <div>
                        <button onClick={limparFormularioPesquisa} className="btn btn-primary botao-limpar">Limpar</button>
                    </div>
                </div>
            </form>
        </div>
    );

};

export default BarraBuscaProdutos;