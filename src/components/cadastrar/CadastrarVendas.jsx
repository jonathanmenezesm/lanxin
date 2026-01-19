import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Logo from '../../assets/logo.png';
import styles from '../../styles/Cadastrar.module.scss'; // Reutilizar estilos similares
import Seta from '../../assets/vector.png';
import Api from '../../Services/Api.jsx';

function CadastrarVendas() {
    const navigate = useNavigate();

    // Estados para os campos do formulário
    const [form, setForm] = useState({
        cliente_id: '',
        produto: '',
        quantidade: '',
        valor_total: '',
        data_venda: ''
    });

    const [clientes, setClientes] = useState([]);

    // Buscar lista de clientes (usuários)
    useEffect(() => {
        const fetchClientes = async () => {
            try {
                const resposta = await Api.get('/usuarios/');
                setClientes(resposta.data);
            } catch (error) {
                console.error('Erro ao buscar clientes:', error);
                alert('Erro ao carregar lista de clientes.');
            }
        };
        fetchClientes();
    }, []);

    // Atualiza os campos do formulário
    const handleChange = (e) => {
        setForm({ ...form, [e.target.name]: e.target.value });
    };

    // Função para enviar o cadastro da venda
    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            await Api.post('/vendas/cadastrar', {
                cliente_id: parseInt(form.cliente_id),
                produto: form.produto,
                quantidade: parseInt(form.quantidade),
                valor_total: parseFloat(form.valor_total),
                data_venda: form.data_venda
            });
            alert('Venda cadastrada com sucesso!');
            navigate('/dashboard'); // Ou para uma página de vendas
        } catch (error) {
            console.error('Erro no cadastro da venda:', error);
            const errorMessage = error.response?.data?.Erro || 'Erro desconhecido ao cadastrar venda.';
            alert(`Erro ao cadastrar venda: ${errorMessage}`);
        }
    };

    const VoltarParaDashboard = () => {
        navigate('/dashboard');
    };

    return (
        <main className={styles.mainCadastrar}>
            <div className={styles.caixaLogo}>
                <img src={Logo} alt="Imagem da logo, sendo um croissant." />
                <h1>Lanxin!</h1>
            </div>

            <section className={styles.formulario}>
                <h2>Cadastrar Venda</h2>
                <form onSubmit={handleSubmit}>
                    <select name="cliente_id" value={form.cliente_id} onChange={handleChange} required>
                        <option value="">Selecione um cliente</option>
                        {clientes.map(cliente => (
                            <option key={cliente.id} value={cliente.id}>
                                {cliente.nome} {cliente.sobrenome} - {cliente.email}
                            </option>
                        ))}
                    </select>
                    <input name="produto" type="text" placeholder="Nome do produto" value={form.produto} onChange={handleChange} required />
                    <input name="quantidade" type="number" placeholder="Quantidade" value={form.quantidade} onChange={handleChange} min="1" required />
                    <input name="valor_total" type="number" step="0.01" placeholder="Valor total" value={form.valor_total} onChange={handleChange} min="0.01" required />
                    <input name="data_venda" type="date" value={form.data_venda} onChange={handleChange} required />
                    <button type="submit" className={styles.botaoCadastrar}>Cadastrar Venda</button>
                </form>
                <button className={styles.botaoVoltar} onClick={VoltarParaDashboard}>
                    <span><img src={Seta} alt="Seta para esquerda indicando voltar a página" /></span> Voltar
                </button>
            </section>
        </main>
    );
}

export default CadastrarVendas;