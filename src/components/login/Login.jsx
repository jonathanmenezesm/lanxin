import { useNavigate } from 'react-router-dom';
import styles from '../../styles/Login.module.scss';
import Logo from '../../assets/logo.png';
import { useState } from "react";
import Api from '../../Services/Api.jsx'

function Login() {
    const navigate = useNavigate(); // Hook para navegação

    const IrParaDashboard = () => {
        navigate('/dashboard'); // Redireciona para o Dashboard
    };

    const IrParaCadastrar = () => {
        navigate('/cadastrar'); // Redireciona para a página de cadastro
    }

    //iniciando os estados para email e senha
    const [email, setEmail] = useState("");
    const [senha, setSenha] = useState("");

    //Função assincrona para fazer login

    const fazerLogin = async (e) => {
        e.preventDefault();

        try {
            const resposta = await Api.post("/usuarios/login", {
                "email": email,
                "senha": senha
            });

            // Salva o nome retornado pela API
            localStorage.setItem('nomeUsuario', resposta.data.nome);

            alert("Login realizado com sucesso!");
            IrParaDashboard();

        } catch (error) {
            console.error("Erro ao fazer login:", error)
            alert("Erro ao fazer login. Verifique suas credenciais e tente novamente.")
        }
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
                        value={email}
                        onChange={(e) => setEmail(e.target.value)} />

                    <input
                        type="password"
                        name="senha"
                        id="senha"
                        placeholder="Preencha com sua senha"
                        value={senha}
                        onChange={(e) => setSenha(e.target.value)}
                    />

                    <button type="button" onClick={fazerLogin}>
                        Entrar
                    </button>

                    <div className="links">
                        <a href="#" onClick={() => navigate('/recuperar-senha')}> Esqueceu a senha? </a>
                        <a href="#" onClick={IrParaCadastrar}> Criar uma conta. </a>
                    </div>
                </form>
            </section>

            <footer className={styles.footer}>
                <p>&copy; 2024 Lanxin. Desenvolvido para fins estudantil.</p>
            </footer>
        </main>
    );
}

export default Login;