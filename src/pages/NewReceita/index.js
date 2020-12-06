import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'

import './styles.css'
import imgLogo from '../../assets/img_logo.svg'

export default function NewReceita() {
  const [title, setTitle] = useState('')
  const [ingredients, setIngredients] = useState('')
  const [make, setMake] = useState('')
  const userId = localStorage.getItem('userId')
  const history = useHistory()

  async function handleNewRecipe(e) {
    e.preventDefault()

    const data = {
      title,
      ingredients,
      make,
    }

    try {
      await api.post('recipes', data, {
        headers: {
          Authorization: userId
        }
      })

      history.push('/perfil')
    } catch (err) {
      alert('Erro cadastrar seu receita...')
    }
  }

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

        <form onSubmit={handleNewRecipe}>
          <input
            placeholder="Nome Receita"
            value={title}
            onChange={e => setTitle(e.target.value)}
          />
          <textarea
            placeholder="Ingredientes"
            value={ingredients}
            onChange={e => setIngredients(e.target.value)}
          />
          <textarea
            placeholder="Modo de fazer"
            value={make}
            onChange={e => setMake(e.target.value)}
          />

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>
  )
}