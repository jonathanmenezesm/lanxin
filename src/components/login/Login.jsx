import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/Login.module.scss';
import Logo from '../../assets/logo.png';

function Login() {
    const navigate = useNavigate(); // Hook para navegação

    const IrParaDashboard = () => {
        navigate('/dashboard'); // Redireciona para o Dashboard
    };

    const IrParaCadastrar = () => {
        navigate('/cadastrar'); // Redireciona para a página de cadastro
    }

    return (
        <main className={styles.mainLogin}>
            <div className={styles.caixaLogo}>
                <img src={Logo} alt="Imagem da logo, sendo um croissant." />
                <h1>Lanxin!</h1>
            </div>

            <section className={styles.caixaLogin}>
                <form>
                    <input
                        type="text"
                        name="email"
                        id="email"
                        placeholder="Preencha com seu email"
                    />

                    <input
                        type="password"
                        name="senha"
                        id="senha"
                        placeholder="Preencha com sua senha"
                    />

                    <button type="button" onClick={IrParaDashboard}>
                        Entrar
                    </button>

                    <div className="links">
                        <a href="#" onClick={() => navigate('/recuperar-senha')}> Esqueceu a senha? </a>
                        <a href="#" onClick={IrParaCadastrar}> Criar uma conta. </a>
                    </div>
                </form>
            </section>

            <footer className={styles.footer}>
                <p>&copy; 2024 Lanxin. Desenvolvido para fins de estudantil.</p>
            </footer>
        </main>
    );
}

export default Login;