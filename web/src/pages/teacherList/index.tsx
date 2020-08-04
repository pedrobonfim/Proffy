import React from 'react';
import { Link } from 'react-router-dom';

import backIcon from '../../assets/images/icons/back.svg'
import logoImg from '../../assets/images/logo.svg'

function TeacherList () {
  return (
    <div id="page-teacher-list" className="container">
      <header className="page-header">
        <div className="top-bar-container">
          <Link to="/">
            <img src={backIcon} alt="Voltar"/>
          </Link>
          <img src={logoImg} alt="Voltar"/>
        </div>
      </header>
      
      <div id="header-content">
        <strong>Esses são os Proffys disponiveis.</strong>
      </div>
    </div>
  );
}

export default TeacherList;
