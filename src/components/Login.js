// components/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import './Login.css';

const Login = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    axios.post('http://localhost:3000/api/v1/login', formData)
      .then(response => {
        const token = response.headers['access-token'];
        console.log(response.data);
        console.log(token);
        // Aqui, você pode adicionar um redirecionamento ou uma mensagem de sucesso.
      })
      .catch(error => {
        console.error('Erro ao registrar:', error);
      });
  };
    return (
      <div className="container">
      <form className="form" onSubmit={handleSubmit}>
        <h2 className="form-title">Login</h2>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="password"
          name="password"
          placeholder="Senha"
          value={formData.password}
          onChange={handleChange}
        />
        <button type="submit">Login</button>
      </form>
    </div>
    );
};

export default Login;