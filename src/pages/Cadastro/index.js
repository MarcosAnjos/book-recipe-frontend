import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiArrowLeft } from 'react-icons/fi'

import api from '../../services/api'
import './styles.css'
import imgLogo from '../../assets/img_logo.svg'


export default function Cadastro() {
  // Meus estados
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [whatsapp, setWhatsapp] = useState('')
  const [city, setCity] = useState('')
  const [uf, setUf] = useState('')


  async function handleCadastro(e) {
    e.preventDefault()

    const data = ({
      name,
      email,
      whatsapp,
      city,
      uf
    })

    // teste
    // console.log(data) // test OK todos os dados

    // Enviar os dados
    try {
      const result = await api.post('users', data)
      alert(`Seu ID de Acesso: ${result.data.id}`)
    } catch (e) {
      alert('Erro no cadastro, tente novamente')
      console.log(e)
    }
  }

  return (
    <div className="cadastro-container">
      <div className="content">
        <section>
          <img src={imgLogo} alt="Logo Book-Recipe" />
          <h1>Cadastro</h1>
          <p>Faça seu cadastro, na plataforma e tenha seu book de receitas personalizado.</p>

          <Link className="back-link" to="/">
            <FiArrowLeft size={16} color="#e02041" />
           Volta para home
          </Link>
        </section>

        <form onSubmit={handleCadastro}>
          <input
            placeholder="Nome"
            value={name}
            onChange={e => setName(e.target.value)}
          />
          <input
            type="email"
            placeholder="E-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
          />
          <input
            placeholder="Whatsapp"
            value={whatsapp}
            onChange={e => setWhatsapp(e.target.value)}
          />

          <div className="input-group">
            <input
              placeholder="Cidade"
              value={city}
              onChange={e => setCity(e.target.value)}
            />
            <input
              placeholder="UF"
              style={{ width: 80 }}
              value={uf}
              onChange={e => setUf(e.target.value)}
            />
          </div>

          <button className="button" type="submit">Cadastrar</button>
        </form>
      </div>
    </div>

  )
}