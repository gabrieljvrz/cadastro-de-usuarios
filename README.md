# 📝 Sistema de Cadastro de Usuários

<div align="center">
  
![Node.js](https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white)
![Express](https://img.shields.io/badge/Express-000000?style=for-the-badge&logo=express&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![MongoDB](https://img.shields.io/badge/MongoDB-47A248?style=for-the-badge&logo=mongodb&logoColor=white)
![Prisma](https://img.shields.io/badge/Prisma-2D3748?style=for-the-badge&logo=prisma&logoColor=white)

</div>

## 📖 Sobre o Projeto

Sistema full-stack completo para gerenciamento de usuários, desenvolvido como projeto de estudos para praticar conceitos de desenvolvimento web moderno. A aplicação permite realizar operações CRUD (Create, Read, Update, Delete) de usuários através de uma interface intuitiva e responsiva.

O projeto foi construído seguindo boas práticas de desenvolvimento, separando completamente o backend (API REST) do frontend (interface do usuário), demonstrando a arquitetura cliente-servidor.

## ✨ Funcionalidades

- ✅ **Cadastro de Usuários**: Adicione novos usuários com nome, idade e e-mail
- 📋 **Listagem de Usuários**: Visualize todos os usuários cadastrados em cards organizados
- ✏️ **Edição de Usuários**: Atualize informações de usuários existentes
- 🗑️ **Exclusão de Usuários**: Remova usuários do sistema
- 🔍 **Filtros de Busca**: Pesquise usuários por nome, idade ou e-mail (via query params)
- 🎨 **Interface Moderna**: Design clean com gradientes e animações suaves

## 🛠️ Tecnologias Utilizadas

### Backend
- **Node.js** - Ambiente de execução JavaScript
- **Express.js** - Framework web para Node.js
- **Prisma ORM** - Object-Relational Mapping para Node.js e TypeScript
- **MongoDB** - Banco de dados NoSQL
- **CORS** - Habilitação de requisições cross-origin

### Frontend
- **React** - Biblioteca JavaScript para construção de interfaces
- **Vite** - Build tool e dev server de próxima geração
- **Axios** - Cliente HTTP para requisições à API
- **CSS3** - Estilização com gradientes e animações

## 📁 Estrutura do Projeto
```
├── backend/
│   ├── prisma/
│   │   └── schema.prisma      # Schema do banco de dados
│   ├── server.js              # Servidor Express e rotas da API
│   ├── package.json
│   └── .gitignore
│
└── frontend/
    ├── src/
    │   ├── assets/            # Imagens e ícones
    │   ├── pages/
    │   │   └── Home/          # Página principal
    │   ├── services/
    │   │   └── api.js         # Configuração do Axios
    │   ├── index.css          # Estilos globais
    │   └── main.jsx           # Ponto de entrada do React
    ├── package.json
    └── vite.config.js
```

## 🚀 Como Rodar o Projeto

### Pré-requisitos

Antes de começar, você precisa ter instalado em sua máquina:
- [Node.js](https://nodejs.org/) (versão 18 ou superior)
- [MongoDB](https://www.mongodb.com/) (local ou Atlas - cloud)
- [Git](https://git-scm.com/)

### 📥 Clonando o Repositório
```bash
# Clone o repositório
git clone https://github.com/gabrieljvrz/cadastro-de-usuarios.git

# Entre na pasta do projeto
cd cadastro-de-usuarios
```

### ⚙️ Configurando o Backend
```bash
# Entre na pasta do backend
cd backend

# Instale as dependências
npm install

# Crie um arquivo .env na raiz da pasta backend
# Adicione a URL de conexão do MongoDB:
# DATABASE_URL="mongodb+srv://usuario:senha@cluster.mongodb.net/nomedobanco"

# Gere o Prisma Client
npx prisma generate

# Inicie o servidor
node server.js
```

O servidor estará rodando em `http://localhost:3000`

### 🎨 Configurando o Frontend
```bash
# Em outro terminal, entre na pasta do frontend
cd frontend

# Instale as dependências
npm install

# Inicie o servidor de desenvolvimento
npm run dev
```

O frontend estará rodando em `http://localhost:5173`

## 🔌 Endpoints da API

| Método | Endpoint | Descrição |
|--------|----------|-----------|
| `GET` | `/usuarios` | Lista todos os usuários |
| `GET` | `/usuarios?name=nome&age=idade&email=email` | Filtra usuários |
| `POST` | `/usuarios` | Cria um novo usuário |
| `PUT` | `/usuarios/:id` | Atualiza um usuário |
| `DELETE` | `/usuarios/:id` | Deleta um usuário |

### Exemplo de Body para POST/PUT
```json
{
  "name": "João Silva",
  "age": "25",
  "email": "joao@email.com"
}
```

## 💡 Conceitos Aprendidos

Durante o desenvolvimento deste projeto, foram praticados:

- **RESTful API**: Criação de uma API seguindo os princípios REST
- **CRUD Operations**: Implementação completa de Create, Read, Update e Delete
- **React Hooks**: Uso de useState, useEffect e useRef
- **Prisma ORM**: Modelagem e manipulação de dados
- **Axios**: Requisições HTTP assíncronas
- **Query Params e Route Params**: Diferentes formas de passar parâmetros
- **CORS**: Configuração para permitir requisições cross-origin
- **ES6 Modules**: Uso de import/export
- **Async/Await**: Programação assíncrona moderna
