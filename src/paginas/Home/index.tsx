import { ReactComponent as LogoColorido } from "../../assets/imagens/logo-colorido.svg";
import Header from "../../componentes/Header";

function Home ()  {

    return (
        <>
            <Header />
            <div className="home-container">
                <div className="home-cartao">
                    <div className="home-container-conteudo">
                        <h1>Soluções Avançadas em Higiene e Limpeza</h1>
                    </div>
                    <div className="home-container-logo"></div>
                    <LogoColorido />
                </div>
            </div>
        </>
    );
}

export default Home;