import React, { useState } from "react";

export const Register = (props) => {
    const [email, setEmail] = useState('');
    const [pass, setPass] = useState('');
    const [name, setName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }

    return (
        <div className="auth-form-container">
            <h2>Faça seu cadastro</h2>
        <form className="register-form" onSubmit={handleSubmit}>
            <label htmlFor="name">Nome Completo</label>
            <input value={name} name="name" onChange={(e) => setName(e.target.value)} id="name" placeholder="Insira seu Nome" />
            <label htmlFor="email">E-mail</label>
            <input value={email} onChange={(e) => setEmail(e.target.value)}type="email" placeholder="Insira seu E-mail" id="email" name="email" />
            <label htmlFor="password">Senha</label>
            <input value={pass} onChange={(e) => setPass(e.target.value)} type="password" placeholder="Insira sua Senha" id="password" name="password" />
            <button type="submit">Login</button>
        </form>
        <button className="link-btn" onClick={() => props.onFormSwitch('login')}>Voçe ja possui uma conta? Faça login aqui.</button>
    </div>
    )
}