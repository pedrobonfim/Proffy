import React from 'react';
import PageHeader from '../../components/pageHeader';

import warningIcon from '../../assets/images/icons/warning.svg'

import './style.css'
import Input from '../../components/input';
import Textarea from '../../components/textArea';
import Select from '../../components/select';

function TeacherForm () {
  return (
    <div id="page-teacher-form" className="container">
      <PageHeader title="Que incrível que você quer dar aulas." description="O primeiro passo é preencher esse formulário de inscrição">
      </PageHeader>

      <main>
        <fieldset>
          <legend>Seus dados</legend>

          <Input name="name" label="Nome Completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="Whatsapp" />
          <Textarea name="bio" label="Biografia" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <Select 
            name="subject" 
            label="Matéria" 
            options={[
              { value: 'Artes', label: 'Artes'},
              { value: 'Biologia', label: 'Biologia'},
              { value: 'Ciência', label: 'Ciência'},
              { value: 'Matemática', label: 'Matemática'},
              { value: 'Português', label: 'Português'},
              { value: 'Química', label: 'Química'},
              { value: 'Física', label: 'Física'}
            ]} />
          <Input name="cost" label="Custa da hora por aula" />
        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <Input name="subject" label="Matéria" />
          <Input name="cost" label="Custa da hora por aula" />
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante"/>
            Importante! <br />
            Preencha todos os dados
          </p>

          <button>Criar Cadastro</button>

        </footer>
      </main>
    </div>
  );
}

export default TeacherForm;
