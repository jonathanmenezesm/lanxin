import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/Dashboard.module.scss';

function Dashboard() {
    const navigate = useNavigate();
    const [nomeUsuario, setNomeUsuario] = useState('');

    useEffect(() => {
        // Recupera o nome do usuário salvo no localStorage após o login
        const nome = localStorage.getItem('nomeUsuario');
        setNomeUsuario(nome || '');
    }, []);

    const IrParaPerfil = () => {
        navigate('/perfil');
    };

    const IrParaFinanceiro = () => {
        navigate('/financeiro');
    };

    const IrParaHistorico = () => {
        navigate('/historico');
    };

    const Sair = () => {
        // Limpa o nome do usuário ao sair (opcional)
        localStorage.removeItem('nomeUsuario');
        navigate('/');
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
                <p>Olá, <strong>{nomeUsuario}</strong>.</p>
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