import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './style.css'

function TeacherItem () {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars1.githubusercontent.com/u/11137476?s=460&u=b3d6acd17fb8b52bf90756b929b86b72d3436ded&v=4" alt="Pedro"/>
        <div>
          <strong>Pedro Bonfim</strong>
          <span>Games</span>
        </div>
      </header>

      <p>
        BLABLABLABLABLABLA
        <br /><br />
        BLABLABLABLABLA BLABLABAL 
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 50,00</strong>
        </p>
        <button type='button'>
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}

export default TeacherItem