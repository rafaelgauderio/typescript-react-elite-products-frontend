import { ReactComponent as LogoColorido } from "../../assets/imagens/logo-colorido.svg";
import BotaoBusca from "../../componentes/BotaoBusca/intex";
import Header from "../../componentes/Header";
import './styles.css';

function Home() {

    return (
        <>
            <Header />
            <div className="home-container">
                <div className="home-caixa">
                    <div className="home-container-conteudo">
                        <h1>Soluções Avançadas em Higiene e Limpeza</h1>
                        <BotaoBusca />
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