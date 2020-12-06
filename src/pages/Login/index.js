import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import api from '../../services/api'

import './styles.css'

import imgLogo from '../../assets/img_logo.svg'

export default function Login() {
  const [id, setId] = useState('')
  const history = useHistory()

  async function handleLogin(e) {
    e.preventDefault()
    try {
      const response = await api.post('sessions', { id })

      localStorage.setItem('userId', id)
      localStorage.setItem('userName', response.data.name)

      history.push('/perfil')

    } catch (err) {
      alert('Falha no login, tente novamente.')
    }
  }

  return (
    <div className="login-container">
      <section className="form">
        <img className="logo" src={imgLogo} alt="Logo Book Recipes" />

        <form onSubmit={handleLogin}>
          <h1>Faça seu Login</h1>

          <input
            placeholder="Seu ID"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <button className="button" type="submit">Entrar</button>

          <Link className='back-link' to="/cadastro">
            <FiLogIn size={16} color="#e02041" />
            Não tenho cadastro
          </Link>

        </form>

      </section>

      <img className="recipe" src='https://source.unsplash.com/collection/330689' alt="Recipe" />

    </div>
  )
}