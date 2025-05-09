import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from "./components/login/Login.jsx";
import Dashboard from "./components/dashboard/Dashboard.jsx";
import Cadastrar from "./components/cadastrar/Cadastrar.jsx";
import RecuperarSenha from './components/recuperar_senha/RecuperarSenha.jsx';

import "./global.scss";


function App() {
	return (
		// <h1>Ola mundo!</h1>
		<BrowserRouter>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/cadastrar" element={<Cadastrar />} />
                <Route path="/dashboard" element={<Dashboard />} />
                <Route path="/recuperar-senha" element={<RecuperarSenha />} />
            </Routes>
        </BrowserRouter>
	);
}

export default App;