import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/Dashboard.module.scss';

function Dashboard() {
    const navigate = useNavigate();
    const [nomeUsuario, setNomeUsuario] = useState('');
    const [showModal, setShowModal] = useState(false); // Estado para controlar o modal

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
                {/* Ao clicar, abre o modal de confirmação */}
                <button onClick={() => setShowModal(true)} className={styles.botaoSair}>
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

            {/* Modal de confirmação de saída */}
            {showModal && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <b>Tem certeza que deseja sair?</b>
                        <div className={styles.ModalButtons}>
                            <button className={styles.botaoSim} onClick={Sair}>Sim</button>
                            <button className={styles.botaoCancelar} onClick={() => setShowModal(false)}>Cancelar</button>
                        </div>
                    </div>
                </div>
            )}
        </main>
    );
}

export default Dashboard;