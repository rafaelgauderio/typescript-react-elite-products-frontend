import { ReactComponent as LogoColorido } from "../../assets/imagens/logo-colorido.svg";
import BotaoBusca from "../../componentes/BotaoBusca/intex";
import BotaoWhats from "../../componentes/BotaoWhats";
import './styles.css';

function Home() {

    return (
        <>
            <div className="home-container">
                <div className="home-caixa">
                    <div className="home-container-conteudo">
                        <h1>Soluções Avançadas em Higiene e Limpeza</h1>
                        <div className="home-container-botao">
                            <BotaoBusca />
                            <BotaoWhats />
                        </div>
                    </div>
                    <div className="home-container-logo">
                        <LogoColorido />
                    </div>
                </div>
            </div>
        </>
    );
}

export default Home;