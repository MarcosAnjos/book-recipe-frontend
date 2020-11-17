import React from 'react';
import { Link } from 'react-router-dom';
import { FiLogIn } from 'react-icons/fi';

import './styles.css'

import imgLogo from '../../assets/img_logo.svg'

export default function Login() {
  return (
    <div className="login-container">
      <section className="form">
        <img className="logo" src={imgLogo} alt="Logo Book Recipes" />

        <form>
          <h1>Faça seu Login</h1>

          <input placeholder="Seu ID" />
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