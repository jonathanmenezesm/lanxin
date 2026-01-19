import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./components/login/Login.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import Cadastrar from "./components/cadastrar/Cadastrar.jsx";
import CadastrarVendas from "./components/cadastrar/CadastrarVendas.jsx";
import RecuperarSenha from './components/recuperar_senha/RecuperarSenha.jsx';
import "./global.scss";
import Perfil from './components/perfil/Perfil.jsx';
import Financeiro from './components/financeiro/financeiro.jsx';
import Historico from './components/historico/historico.jsx';
import Construction from './components/construction/Construction.jsx';



function App() {
	return (
		// <h1>Ola mundo!</h1>
		<BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastrar" element={<Cadastrar />} />
                <Route path="/cadastrar-vendas" element={<CadastrarVendas />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/recuperar-senha" element={<RecuperarSenha />} />
                <Route path="/perfil" element={<Perfil />} />
                <Route path="/financeiro" element={<Financeiro />} />
                <Route path="/historico" element={<Historico />} />
                <Route path="/construction" element={<Construction />} />
            </Routes>
        </BrowserRouter>
	);
}

export default App;