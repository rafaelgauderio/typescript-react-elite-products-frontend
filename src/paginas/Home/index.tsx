import { Link } from "react-router-dom";
import { ReactComponent as LogoColorido } from "../../assets/imagens/logo-colorido.svg";
import BotaoBusca from "../../componentes/BotaoBusca";
import BotaoWhats from "../../componentes/BotaoWhats";
import './styles.css';
import { LINK_WHATSUP } from "../../util/requisicao";

function Home() {

    return (
        <>
            <div className="home-container">
                <div className="home-caixa">
                    <div className="home-container-conteudo">
                        <h1>Soluções Avançadas em Higiene e Limpeza</h1>
                        <div className="home-container-botao">
                            <Link to="produtos" target="_blank">
                                <BotaoBusca mensagem={"Catálogo de Produtos"} />
                            </Link>
                            <a href={LINK_WHATSUP} target="_blank" rel="noreferrer">
                                <BotaoWhats mensagem={"Estamos no WhatsApp"} />
                            </a>
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