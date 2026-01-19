import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from '../../styles/Historico.module.scss';
import Api from '../../Services/Api.jsx';

const Historico = () => {
    const navigate = useNavigate();
    const [vendas, setVendas] = useState([]);
    const [clientes, setClientes] = useState([]);
    const [clienteSelecionado, setClienteSelecionado] = useState('');
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const roleUsuario = localStorage.getItem('roleUsuario');
    const idUsuario = localStorage.getItem('idUsuario');

    useEffect(() => {
        const fetchClientes = async () => {
            if (roleUsuario === 'admin') {
                try {
                    const resposta = await Api.get('/usuarios/');
                    setClientes(resposta.data);
                } catch (err) {
                    console.error('Erro ao buscar clientes:', err);
                }
            }
        };
        fetchClientes();
    }, [roleUsuario]);

    useEffect(() => {
        const fetchHistorico = async () => {
            setLoading(true);
            try {
                const resposta = await Api.get('/vendas/');
                let vendasFiltradas = [];
                if (roleUsuario === 'admin') {
                    if (clienteSelecionado) {
                        vendasFiltradas = resposta.data.filter(venda => venda.cliente_id === parseInt(clienteSelecionado));
                    } else {
                        vendasFiltradas = resposta.data; // Admin vê todas se nenhum selecionado
                    }
                } else {
                    vendasFiltradas = resposta.data.filter(venda => venda.cliente_id === parseInt(idUsuario));
                }
                setVendas(vendasFiltradas);
            } catch (err) {
                console.error('Erro ao buscar histórico:', err);
                setError('Erro ao carregar histórico de compras.');
            } finally {
                setLoading(false);
            }
        };

        fetchHistorico();
    }, [roleUsuario, idUsuario, clienteSelecionado]);

    // Calcular valor total
    const valorTotal = vendas.reduce((total, venda) => total + parseFloat(venda.valor_total), 0);

    const handleClienteChange = (e) => {
        setClienteSelecionado(e.target.value);
    };

    const VoltarParaDashboard = () => {
        navigate('/dashboard');
    };

    if (loading) return <div className={styles.loading}>Carregando histórico...</div>;
    if (error) return <div className={styles.error}>{error}</div>;

    return (
        <main className={styles.mainHistorico}>
            <h1>{roleUsuario === 'admin' ? 'Histórico de Vendas' : 'Histórico de Compras'}</h1>
            {roleUsuario === 'admin' && (
                <div className={styles.filtro}>
                    <label htmlFor="cliente">Selecionar Cliente:</label>
                    <select id="cliente" value={clienteSelecionado} onChange={handleClienteChange}>
                        <option value="">Todos os Clientes</option>
                        {clientes.map(cliente => (
                            <option key={cliente.id} value={cliente.id}>
                                {cliente.nome} {cliente.sobrenome} - {cliente.email}
                            </option>
                        ))}
                    </select>
                </div>
            )}
            {vendas.length === 0 ? (
                <p>{clienteSelecionado ? 'Este cliente não possui compras registradas.' : 'Nenhuma compra registrada.'}</p>
            ) : (
                <>
                    <table className={styles.tabela}>
                        <thead>
                            <tr>
                                <th>Produto</th>
                                <th>Quantidade</th>
                                <th>Data</th>
                                <th>Valor</th>
                                {roleUsuario === 'admin' && <th>Cliente</th>}
                            </tr>
                        </thead>
                        <tbody>
                            {vendas.map(venda => (
                                <tr key={venda.id}>
                                    <td>{venda.produto}</td>
                                    <td>{venda.quantidade}</td>
                                    <td>{new Date(venda.data_venda).toLocaleDateString('pt-BR')}</td>
                                    <td>R$ {parseFloat(venda.valor_total).toFixed(2)}</td>
                                    {roleUsuario === 'admin' && <td>{venda.cliente_nome}</td>}
                                </tr>
                            ))}
                        </tbody>
                    </table>
                    <div className={styles.total}>
                        <strong>Valor Total: R$ {valorTotal.toFixed(2)}</strong>
                    </div>
                </>
            )}
            <button className={styles.botaoVoltar} onClick={VoltarParaDashboard}>Voltar ao Dashboard</button>
        </main>
    );
};

export default Historico;
