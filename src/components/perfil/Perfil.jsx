import React from 'react';

const Perfil = () => {
    return (
        <main>
            <h1>Lanxin</h1>
            <form action="#" method="post">
                <h2>Preencha os campos abaixo:</h2>
                <input type="text" placeholder="Digite seu nome"/>
                <input type="text" placeholder="Digite seu sobrenome"/>
                <input type="text" placeholder="Digite sua data de nascimento"/>
                <input type="text" placeholder="Digite seu CPF"/>
                <input type="text" placeholder="Digite seu celular com DDD"/>
                <input type="text" placeholder="Digite seu email"/>
                <input type="text" placeholder="Digite sua senha"/>
                <input type="text" placeholder="Confirme sua senha digitada"/>

                <button>CADASTRAR</button>

            </form>

                <button>Voltar</button>

        </main>
    );
};

export default Perfil;