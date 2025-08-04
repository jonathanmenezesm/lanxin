import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import styles from '../../styles/Cadastrar.module.scss';
import Seta from '../../assets/vector.png';
import Api from '../../Services/Api.jsx'; // Importa a instância da API

function Cadastrar() {
    const navigate = useNavigate();

    // Estados para os campos do formulário
    const [form, setForm] = useState({
        nome: '',
        sobrenome: '',
        data_nascimento: '',
        cpf: '',
        celular: '',
        email: '',
        senha: '',
        confirmarSenha: ''
    });

    // Atualiza os campos do formulário
    const handleChange = (e) => {
        setForm({ ...form, [e.target.id]: e.target.value });
    };

    // Função para enviar o cadastro
    const handleSubmit = async (e) => {
        e.preventDefault();

        if (form.senha !== form.confirmarSenha) {
            alert('As senhas não coincidem!');
            return;
        }

        try {
            await Api.post('/usuarios/cadastrar', {
                nome: form.nome,
                sobrenome: form.sobrenome,
                data_nascimento: form.data_nascimento,
                cpf: form.cpf,
                celular: form.celular,
                email: form.email,
                senha: form.senha
            });
            alert('Cadastro realizado com sucesso!');
            navigate('/');
        } catch (error) {
            alert('Erro ao cadastrar. Verifique os dados e tente novamente.');
        }
    };

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
                <form onSubmit={handleSubmit}>
                    <input id="nome" type="text" placeholder="Digite seu nome" value={form.nome} onChange={handleChange} />
                    <input id="sobrenome" type="text" placeholder="Digite seu sobrenome" value={form.sobrenome} onChange={handleChange} />
                    <input id="data_nascimento" type="date" placeholder="Digite sua data de nascimento (DD/MM/AAAA)" value={form.data_nascimento} onChange={handleChange} />
                    <input id="cpf" type="text" placeholder="Digite seu CPF (somente números)" value={form.cpf} onChange={handleChange} />
                    <input id="celular" type="text" placeholder="Digite seu celular com DDD Ex.: 21911223344" value={form.celular} onChange={handleChange} />
                    <input id="email" type="email" placeholder="Digite seu email" value={form.email} onChange={handleChange} />
                    <input id="senha" type="password" placeholder="Digite sua senha" value={form.senha} onChange={handleChange} />
                    <input id="confirmarSenha" type="password" placeholder="Confirme a senha digitada" value={form.confirmarSenha} onChange={handleChange} />
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