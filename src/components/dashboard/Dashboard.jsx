import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/Dashboard.module.scss'; // Certifique-se de criar este arquivo de estilos

function Dashboard() {
    const navigate = useNavigate();

    const IrParaPerfil = () => {
        navigate('/perfil'); // Ajuste a rota conforme necessário
    };

    const IrParaFinanceiro = () => {
        navigate('/financeiro'); // Ajuste a rota conforme necessário
    };

    const IrParaHistorico = () => {
        navigate('/historico'); // Ajuste a rota conforme necessário
    };

    const Sair = () => {
        navigate('/'); // Redireciona para a página inicial (login)
    };

    return (
        <main className={styles.mainDashboard}>
            <header className={styles.header}>
                <button onClick={Sair} className={styles.botaoSair}>
                    sair
                </button>
                <h1>Lanxin</h1>
            </header>

            <section className={styles.boasVindas}>
                <p>Olá, <strong>{'{usuário}'}</strong>.</p>
                <p>Seja bem-vindo!</p>
            </section>

            <section className={styles.opcoes}>
                <button className={styles.card} onClick={IrParaPerfil}>
                    Perfil
                </button>
                <button className={styles.card} onClick={IrParaFinanceiro}>
                    Financeiro
                </button>
                <button className={styles.card} onClick={IrParaHistorico}>
                    Histórico
                </button>
            </section>
        </main>
    );
}

export default Dashboard;