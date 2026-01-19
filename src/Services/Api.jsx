import axios from "axios";
//importa a biblioteca axios que é uma biblioteca para fazer requisições HTTP (GET, POST, PUT, DELETE)

//cria uma instância do axios com a URL base da API
const api = axios.create({
    // baseURL:"http://localhost:5000" //URL para desenvolvimento local
    baseURL:"https://laxin-api.onrender.com" //URL para produção
})
export default api;