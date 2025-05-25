// src/pages/Login.jsx
import React, { useState } from 'react';
import { loginUser } from '../Api';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [form, setForm] = useState({ username: '', password: '' });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(form);
      localStorage.setItem('token', res.data.token);
      navigate('/products');
    } catch (err) {
      alert('Login failed');
    }
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 p-4 max-w-md mx-auto">
      <input name="username" placeholder="Username" onChange={handleChange} className="border p-2" />
      <input name="password" type="password" placeholder="Password" onChange={handleChange} className="border p-2" />
      <button type="submit" className="bg-blue-600 text-white py-2">Login</button>
    </form>
  );
};

export default Login;
