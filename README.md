# Lanxin

**Lanxin** é um projeto front-end que inicialmente foi desenvolvido somente com **HTML**, **CSS** e **JavaScript**. Conforme fui aprendendo coisas novas, estou atualizando o projeto, que atualmente está sendo desenvolvido com **React** e **Vite**, oferecendo uma configuração mínima para iniciar rapidamente aplicações React.

Futuramente, conforme me aprofundo em meus estudos, pretendo implementar um back-end para que o projeto se torne **full-stack**.

## 🚀 Tecnologias Utilizadas

- [React](https://reactjs.org/)
- [Vite](https://vitejs.dev/)
- [SASS](https://sass-lang.com/) – pré-processador de CSS com recursos avançados
- [React Router DOM](https://reactrouter.com/) – sistema de roteamento para SPAs
- [ESLint](https://eslint.org/) – análise de código para manter qualidade e padrões

## 📁 Estrutura do Projeto

- `src/` – Componentes, estilos e páginas React
- `public/` – Arquivos estáticos
- `index.html` – Arquivo HTML principal
- `vite.config.js` – Configuração do Vite
- `eslint.config.js` – Regras de linting
- `package.json` – Dependências e scripts

## 💅 Estilização com SASS

O projeto utiliza **SASS/SCSS** para organização dos estilos:

- Instalação:
  ```bash
  npm install -D sass
  ```

- Importação:
  ```js
  import './styles/global.scss';
  ```

- Suporte a módulos (`Component.module.scss`) para escopo local nos estilos

## 🧭 Rotas com React Router DOM

Este projeto está preparado para trabalhar com múltiplas rotas usando o **React Router DOM**.

- Instalação:
  ```bash
  npm install react-router-dom
  ```

- Exemplo de uso:
  ```jsx
  import { BrowserRouter, Routes, Route } from 'react-router-dom';

  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/sobre" element={<Sobre />} />
    </Routes>
  </BrowserRouter>
  ```

## ⚙️ Instalação e Execução

```bash
git clone https://github.com/jonathanmenezesm/lanxin.git
cd lanxin
npm install
npm run dev
```

Acesse em: `http://localhost:5173`

## 🧪 Scripts Disponíveis

- `npm run dev` – Inicia o servidor de desenvolvimento
- `npm run build` – Compila o projeto para produção
- `npm run lint` – Executa o ESLint

## 📄 Licença

Este projeto está licenciado sob a [MIT License](LICENSE).
