// importa os react hooks: (useState, useEffect e useRef)
import { useState, useEffect, useRef } from 'react'
// o useState funciona para criar estados dentro do componente 
// o useEffect funciona para executar algo quando o componente for renderizado
// o useRef funciona para criar referências para elementos do DOM

// importa o css
import "./style.css";

// importa as imagens
import Trash from "../../assets/delete.png";
import Edit from "../../assets/edit.png";

// importa o arquivo de conexão com a api
import api from '../../services/api'

// componente Home
function Home() { 
  // estado para armazenar os usuários da api usando o useState
  // inicia como um array vazio e depois vai ser preenchido com os usuários da api
  const [users, setUsers] = useState([], )

  // referências para os inputs usando o useRef
  const inputName = useRef()
  const inputAge = useRef()
  const inputEmail = useRef() 

  // função para buscar e listar os usuários na api
  async function getUsers(){
    const usersFromApi = await api.get('/usuarios') // faz a requisição para a rota de listar usuários
    setUsers(usersFromApi.data) // atualiza o estado do array vazio com os usuários retornados da api
  }

  // função para criar um novo usuário na api
  async function createUsers(){
    await api.post('/usuarios', { // faz a requisição para a rota de criar usuário
      // pega os valores dos inputs usando as referências (useRef)
      name: inputName.current.value,
      age: inputAge.current.value, 
      email: inputEmail.current.value
    })

    getUsers() // chama a função para buscar os usuários novamente e atualizar a lista
  }

  // função para editar um usuário na api
  async function editUsers(id){
    const newName = prompt("Digite o novo nome:") // pede para o usuário digitar o novo nome
    const newAge = prompt("Digite a nova idade:") // pede para o usuário digitar a nova idade
    const newEmail = prompt("Digite o novo e-mail:") // pede para o usuário digitar o novo e-mail

    // verifica se algum dos valores é vazio
    if (!newName || !newAge || !newEmail){ 
      alert("Todos os campos são obrigatórios!") // alerta que todos os campos são obrigatórios
      return // sai da função
    }

    //veriifica se o campo de idade é um número
    if (isNaN(newAge)){
      alert("A idade deve ser um número!") // alerta que a idade deve ser um número
      return // sai da função
    }

    await api.put(`/usuarios/${id}`, { // faz a requisição para a rota de editar usuário, passando o id pelo route params
      name: newName, // passa o novo nome
      age: newAge, // passa a nova idade
      email: newEmail // passa o novo e-mail
    })

    getUsers() // chama a função para buscar os usuários novamente e atualizar a lista
  }

  // função para deletar um usuário na api
  async function deleteUsers(id){ 
    await api.delete(`/usuarios/${id}`) // faz a requisição para a rota de deletar usuário, passando o id pelo route params
    getUsers() // chama a função para buscar os usuários novamente e atualizar a lista
  }

  // no React, uma função não pode ser chamada diretamente, pois pode causar um loop infinito de requisições
  // usando o useEffect, conseguimos controlar quando a função deve ser executada, apenas quando a página for carregada.
  useEffect(() => { 
    getUsers()
  }, [])

  return (
    <div className="container">
      <form>
        <h1>Cadastro de Usuários</h1>
        <input placeholder="Nome" name="name" type="text" ref={inputName}/> {/* referência para o input do nome */} 
        <input placeholder="Idade" name="age" type="number" ref={inputAge}/> {/* referência para o input de idade */}
        <input placeholder="E-mail" name="email" type="email" ref={inputEmail}/> {/* referência para o input de e-mail */}
        <button type="button" onClick={createUsers}>Cadastrar</button> {/* chama a função de criar usuário ao clicar no botão */}
      </form>

      {users.map((user) => (
        <div key={user.id} className="card">
          <div>
            <p>Nome: <span>{user.name}</span></p> {/* exibe o nome do usuário */}
            <p>Idade: <span>{user.age}</span></p> {/* exibe a idade do usuário */}
            <p>E-mail: <span>{user.email}</span></p> {/* exibe o e-mail do usuário */}
          </div>

          <div className="buttons">
            <button onClick={() => editUsers(user.id)}> {/* chama a função de editar usuário ao clicar no botão, passando o id do usuário */}
              <img src={Edit}/>
            </button>

            <button onClick={() => deleteUsers(user.id)}> {/* chama a função de deletar usuário ao clicar no botão, passando o id do usuário */}
              <img src={Trash}/>
            </button>

          </div>
        </div>
      ))}
    </div>
  );
}

export default Home; // exporta o componente Home