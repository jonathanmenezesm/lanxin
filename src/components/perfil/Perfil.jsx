import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Api from '../../Services/Api.jsx';
import styles from '../../styles/Perfil.module.scss';

const Perfil = () => {
    const navigate = useNavigate();
    const [loading, setLoading] = useState(true);
    const [isEditing, setIsEditing] = useState(false);
    const [usuario, setUsuario] = useState({
        nome: '',
        sobrenome: '',
        data_nascimento: '',
        cpf: '',
        celular: '',
        email: '',
        senha: '',
        confirmarSenha: ''
    });

    useEffect(() => {
        const idUsuario = localStorage.getItem('idUsuario');
        console.log('idUsuario:', idUsuario);
        if (idUsuario) {
            Api.get(`/usuarios/${idUsuario}`)
                .then(response => {
                    console.log('Dados do usuário:', response.data);
                    if (response.data) {
                        setUsuario({
                            nome: response.data.nome || '',
                            sobrenome: response.data.sobrenome || '',
                            data_nascimento: response.data.data_nascimento || '',
                            cpf: response.data.cpf || '',
                            celular: response.data.celular || '',
                            email: response.data.email || '',
                            senha: '',
                            confirmarSenha: ''
                        });
                    }
                    setLoading(false);
                })
                .catch(error => {
                    console.error('Erro ao buscar dados do usuário:', error);
                    alert('Erro ao carregar dados do perfil.');
                    setLoading(false);
                });
        } else {
            alert('Usuário não logado. Faça login primeiro.');
            navigate('/');
        }
    }, [navigate]);

    const handleVoltar = () => {
        navigate('/dashboard');
    };

    const handleEditar = () => {
        setIsEditing(true);
    };

    const handleCancelar = () => {
        setIsEditing(false);
        // Recarregar dados originais
        const idUsuario = localStorage.getItem('idUsuario');
        if (idUsuario) {
            Api.get(`/usuarios/${idUsuario}`)
                .then(response => {
                    setUsuario({
                        nome: response.data.nome || '',
                        sobrenome: response.data.sobrenome || '',
                        data_nascimento: response.data.data_nascimento || '',
                        cpf: response.data.cpf || '',
                        celular: response.data.celular || '',
                        email: response.data.email || '',
                        senha: '',
                        confirmarSenha: ''
                    });
                })
                .catch(error => {
                    console.error('Erro ao recarregar dados:', error);
                });
        }
    };

    const handleSalvar = async (e) => {
        e.preventDefault();
        if (usuario.senha !== usuario.confirmarSenha) {
            alert('As senhas não coincidem!');
            return;
        }
        const idUsuario = localStorage.getItem('idUsuario');
        try {
            await Api.put(`/usuarios/atualizar/${idUsuario}`, {
                nome: usuario.nome,
                sobrenome: usuario.sobrenome,
                senha: usuario.senha
            });
            alert('Dados atualizados com sucesso!');
            setIsEditing(false);
            setUsuario(prev => ({ ...prev, confirmarSenha: '' }));
        } catch (error) {
            console.error('Erro ao atualizar dados:', error);
            alert('Erro ao atualizar dados.');
        }
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setUsuario(prev => ({ ...prev, [name]: value }));
    };

    if (loading) {
        return (
            <main>
                <h1>Lanxin</h1>
                <p>Carregando dados do perfil...</p>
            </main>
        );
    }

    if (loading) {
        return (
            <main className={styles.mainPerfil}>
                <h1>Lanxin</h1>
                <p>Carregando dados do perfil...</p>
            </main>
        );
    }

    return (
        <main className={styles.mainPerfil}>
            <header className={styles.header}>
                <button onClick={handleVoltar} className={styles.botaoVoltar}>
                    Voltar
                </button>
                <h1>Lanxin</h1>
            </header>

            <section className={styles.titulo}>
                <h2>Seus dados cadastrados:</h2>
            </section>

            <form onSubmit={handleSalvar} className={styles.formulario}>
                <div className={styles.campo}>
                    <label>Nome</label>
                    <input 
                        type="text" 
                        name="nome"
                        value={usuario.nome} 
                        readOnly={!isEditing} 
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.campo}>
                    <label>Sobrenome</label>
                    <input 
                        type="text" 
                        name="sobrenome"
                        value={usuario.sobrenome} 
                        readOnly={!isEditing} 
                        onChange={handleChange}
                    />
                </div>
                <div className={styles.campo}>
                    <label>Data de Nascimento</label>
                    <input 
                        type="text" 
                        value={usuario.data_nascimento} 
                        readOnly 
                    />
                </div>
                <div className={styles.campo}>
                    <label>CPF</label>
                    <input 
                        type="text" 
                        value={usuario.cpf} 
                        readOnly 
                    />
                </div>
                <div className={styles.campo}>
                    <label>Celular</label>
                    <input 
                        type="text" 
                        value={usuario.celular} 
                        readOnly 
                    />
                </div>
                <div className={styles.campo}>
                    <label>Email</label>
                    <input 
                        type="text" 
                        value={usuario.email} 
                        readOnly 
                    />
                </div>
                <div className={styles.campo}>
                    <label>Senha</label>
                    <input 
                        type="password" 
                        name="senha"
                        value={usuario.senha} 
                        readOnly={!isEditing} 
                        onChange={handleChange}
                    />
                </div>
                {isEditing && (
                    <div className={styles.campo}>
                        <label>Confirmar Senha</label>
                        <input 
                            type="password" 
                            name="confirmarSenha"
                            value={usuario.confirmarSenha} 
                            onChange={handleChange}
                        />
                    </div>
                )}
            </form>

            <div className={styles.botoes}>
                {!isEditing ? (
                    <button type="button" onClick={handleEditar}>EDITAR</button>
                ) : (
                    <>
                        <button type="button" onClick={handleSalvar} className={styles.botaoSalvar}>SALVAR</button>
                        <button type="button" onClick={handleCancelar}>CANCELAR</button>
                    </>
                )}
            </div>
        </main>
    );
};

export default Perfil;