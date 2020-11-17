import React from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'


import './styles.css'
import imgLogo from '../../assets/img_logo.svg'

export default function NewReceita() {
  return (
    <div className="new-receita-container">
      <div className="content">
        <section>
          <img src={imgLogo} alt="Logo Book-Recipe" />
          <h1>Cadastro nova receita</h1>
          <p>Cadastre sua nova receita favorita</p>

          <Link className="back-link" to="/perfil">
            <FiArrowLeft size={16} color="#e02041" />
         Volta para home
        </Link>
        </section>

        <form>
          <input placeholder="Nome Receita" />
          <textarea placeholder="Ingredientes" />
          <textarea placeholder="Modo de fazer" />

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}