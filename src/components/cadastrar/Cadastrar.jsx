import React from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.png'; // Certifique-se de ajustar o caminho da logo
import styles from '../../styles/Cadastrar.module.scss'; // Certifique-se de criar um arquivo de estilos correspondente
import Seta from '../../assets/vector.png'; // Certifique-se de ajustar o caminho da seta

function Cadastrar() {
    const navigate = useNavigate();

    const VoltarParaLogin = () => {
        navigate('/');
    };

    return (
        <main className={styles.mainCadastrar}>
            <div className={styles.caixaLogo}>
                <img src={Logo} alt="Imagem da logo, sendo um croissant." />
                <h1>Lanxin!</h1>
            </div>

            <section className={styles.formulario}>
                <h2>Preencha os campos abaixo:</h2>
                <form>
                    <input id="nome" type="text" placeholder="Digite seu nome" />
                    <input id="sobrenome" type="text" placeholder="Digite seu sobrenome" />
                    <input id="data_nascimento" type="date" placeholder="Digite sua data de nascimento (DD/MM/AAAA)" />
                    <input id="cpf" type="text" placeholder="Digite seu CPF (somente números)" />
                    <input id="celular" type="text" placeholder="Digite seu celular com DDD Ex.: 21911223344" />
                    <input id="email" type="email" placeholder="Digite seu email" />
                    <input id="senha" type="password" placeholder="Digite sua senha" />
                    <input id="confirmar-senha" type="password" placeholder="Confirme a senha digitada" /> {/*validação somente no frontend*/}
                    <button type="submit" className={styles.botaoCadastrar}>Cadastrar</button>
                </form>
                <button className={styles.botaoVoltar} onClick={VoltarParaLogin}>
                    <span><img src={Seta} alt="Seta para esquerda indicando voltar a página" /></span> Voltar
                </button>
            </section>
        </main>
    );
}

export default Cadastrar;