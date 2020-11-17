import React from 'react';
import { Link } from 'react-router-dom';
import { FiPower, FiTrash2 } from 'react-icons/fi'

import './styles.css'
import imgLogo from '../../assets/img_logo.svg'



export default function Profile() {
  return (
    <div className="perfil-container">
      <header>
        <img src={imgLogo} alt="Logo Book Recipe" />

        <span>Bem vindo, Marcos Alexandre</span>

        <Link className="button" to="/receitas/new">
          Cadastrar nova receita
        </Link>
        <button type="button" >
          <FiPower size={18} color="#e02041" />
        </button>
      </header>

      <h1>Receitas Cadastradas</h1>

      <ul>
        <li>
          <strong>Receita:</strong>
          <p>Receita 01</p>

          <strong>Ingretientes</strong>
          <p>1kg maça,240gr Trigo,3 ovos, 200ml Leite, ...</p>

          <strong>Modo de Fazer</strong>
          <p>Misrure todos os insgrediente ...</p>

          <button >
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>

        <li>
          <strong>Receita:</strong>
          <p>Receita 01</p>

          <strong>Ingretientes</strong>
          <p>1kg maça,240gr Trigo,3 ovos, 200ml Leite, ...</p>

          <strong>Modo de Fazer</strong>
          <p>Misrure todos os insgrediente ...</p>

          <button >
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>

        <li>
          <strong>Receita:</strong>
          <p>Receita 01</p>

          <strong>Ingretientes</strong>
          <p>1kg maça,240gr Trigo,3 ovos, 200ml Leite, ...</p>

          <strong>Modo de Fazer</strong>
          <p>Misrure todos os insgrediente ...</p>

          <button >
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>

        <li>
          <strong>Receita:</strong>
          <p>Receita 01</p>

          <strong>Ingretientes</strong>
          <p>1kg maça,240gr Trigo,3 ovos, 200ml Leite, ...</p>

          <strong>Modo de Fazer</strong>
          <p>Misrure todos os insgrediente ...</p>

          <button >
            <FiTrash2 size={20} color="#a8a8b3" />
          </button>
        </li>
      </ul>

    </div>

  )
}