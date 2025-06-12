import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/RecuperarSenha.module.scss'; 
import Logo from '../../assets/logo.png'; 
function RecuperarSenha() {
    const navigate = useNavigate();

    const VoltarParaLogin = () => {
        navigate('/'); // Redireciona para a página de login
    };

    return (
        <main className={styles.mainRecuperarSenha}>
            <div className={styles.caixaLogo}>
                <img src={Logo} alt="Imagem da logo, sendo um croissant." />
                <h1>Lanxin!</h1>
            </div>

            <section className={styles.formulario}>
                <h2>Recuperar Senha</h2>
                <p>Digite seu email para receber as instruções de recuperação de senha.</p>
                <form>
                    <input
                        type="email"
                        placeholder="Digite seu email"
                        required
                    />
                    <button type="submit" className={styles.botaoEnviar}>
                        Enviar
                    </button>
                </form>
                <button className={styles.botaoVoltar} onClick={VoltarParaLogin}>
                    Voltar
                </button>
            </section>
        </main>
    );
}

export default RecuperarSenha;