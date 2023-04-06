import './styles.css';
import '@popperjs/core';
import 'bootstrap/js/src/collapse';
import './styles.css';
import React, { useState, useEffect } from 'react';


function Rodape() {

    const [dataAtual, setDataAtual] = useState('');

    useEffect(() => {
        setInterval(
            () => {
                let ano = new Date().getFullYear();
                setDataAtual(
                    `${ano}`
                );
            },
            1000
        );
    }, []);


    return (
        <>
            <footer className="container-fluid container-rodape">
                <h2><i>&copy; {dataAtual}</i> Grupo Melhoramentos Higiene. Todos os direitos reservados</h2>
                <p>Desenvolvido por <i>Rafael de luca</i></p>
            </footer>
        </>
    );
}

export default Rodape;


