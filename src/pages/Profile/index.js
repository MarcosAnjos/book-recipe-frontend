import React, { useState, useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi'

import api from '../../services/api'
import './styles.css'
import imgLogo from '../../assets/img_logo.svg'


export default function Profile() {
  const [recipes, setRecipes] = useState([])
  const userName = localStorage.getItem('userName')
  const userId = localStorage.getItem('userId')
  const history = useHistory()

  useEffect(() => {
    api.get('profile', {
      headers: {
        Authorization: userId,
      }
    }).then(response => {
      setRecipes(response.data)
    })
  }, [userId])

  async function handleDeleteIncident(id) {
    try {
      await api.delete(`recipes/${id}`, {
        headers: {
          Authorization: userId,
        }
      })

      setRecipes(recipes.filter(recipes => recipes.id !== id))
    } catch (err) {
      alert('Erro ao deletar receita, tente novamente.')
    }
  }

  function handleLogout() {
    localStorage.clear()
    history.push('/')
  }

  return (
    <div className="perfil-container">
      <header>
        <img src={imgLogo} alt="Logo Book Recipe" />

        <span>Bem vindo, {userName}</span>

        <Link className="button" to="/receitas/new">
          Cadastrar nova receita
        </Link>
        <button onClick={handleLogout} type="button" >
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <h1>Receitas Cadastradas</h1>

      <ul>
        {recipes.map(recipe => (
          <li key={recipe.id}>
            <strong>Receita:</strong>
            <p>{recipe.title}</p>

            <strong>Ingretientes</strong>
            <p>{recipe.ingredients}</p>

            <strong>Modo de Fazer</strong>
            <p>{recipe.make}</p>

            <button onClick={() => handleDeleteIncident(recipe.id)} type="button">
              <FiTrash2 size={20} color="#a8a8b3" />
            </button>
          </li>

        ))}

      </ul>

    </div>

  )
}