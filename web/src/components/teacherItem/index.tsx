import React from 'react'

import whatsappIcon from '../../assets/images/icons/whatsapp.svg'

import './style.css'
import api from '../../services/api'

export interface Teacher {
  id: number
  name: string
  avatar: string
  whatsapp: string
  bio: string
  subject: string
  cost: number
}
interface TeacherItemProps {
  teacher: Teacher
}

const TeacherItem: React.FC<TeacherItemProps> = ({ teacher }) => {
  function createNewConnection () {
    debugger
    api.post('connections', {
      user_id: teacher.id
    })
  }

  return (
    <article className="teacher-item">
      <header>
        <img src={teacher.avatar} alt="Pedro"/>
        <div>
          <strong>{teacher.name}</strong>
          <span>{teacher.subject}</span>
        </div>
      </header>

      <p>
        {teacher.bio} 
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ {teacher.cost}</strong>
        </p>
        <a onClick={ createNewConnection } target="_blank" href={`https://wa.me/${teacher.whatsapp}`}>
          <img src={whatsappIcon} alt="Whatsapp"/>
          Entrar em contato
        </a>
      </footer>
    </article>
  )
}

export default TeacherItem