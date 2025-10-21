// importa o express e o prisma client
import express from 'express'
import cors from 'cors'
import pkg from '@prisma/client'
const { PrismaClient } = pkg

// variável do prisma
const prisma = new PrismaClient()
// configura o servidor para usar o express como função
const app = express()
// configura o cors
app.use(cors())
// configura o express no servidor para usar o json
app.use(express.json())


// rota tipo post para criar usuário
app.post('/usuarios', async (req, res) => {

    // a requisição cria o usuário usando o que foi passado pelo body
    await prisma.user.create({
        data:{
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    // responde com o status, dizendo que o usuário foi criado e devolve os usuários
    res.status(201).json(req.body)
})

// rota tipo get para listar usuários
app.get('/usuarios', async (req, res) => {
    let users = []
    // filtro usando query params, se existe query, retorna os usuários com os filtros
    if (req.query){
        users = await prisma.user.findMany({
            where:{
                name: req.query.name,
                age: req.query.age,
                email: req.query.email
            }
        })
    } else {
        // se não tiver nenhum filtro, apenas retorna todos os usuários
        users = await prisma.user.findMany()
    }
    // manda a resposta dizendo que a requisição funcionou (status 200) e devolve em json o resultado da consulta
    res.status(200).json(users)
})

// rota tipo put para editar usuário (usando route params)
app.put('/usuarios/:id', async (req, res) => {

    // a requisição edita o usuário usando o que foi passado pelo params
    await prisma.user.update({
        where: {
            id: req.params.id
        },
        data:{
            email: req.body.email,
            name: req.body.name,
            age: req.body.age
        }
    })

    // responde com o status, dizendo que o usuário foi editado e devolve os usuários
    res.status(201).json(req.body)
})

// rota tipo delete para excluir usuário (usando route params)
app.delete('/usuarios/:id', async (req, res) => {
    // exclui o usuário cujo id é passado pelo params
    await prisma.user.delete({
        where: {
            id: req.params.id
        }
    })

    res.status(200).json({ message: 'Usuário excluído com sucesso!'})
})

// porta que vai rodar a api
app.listen(3000)

// criar API de usuários:
// 1 - criar um usuário
// 2 - listar todos os usuários e listar usuários com filtro
// 3 - editar um usuário
// 4 - deletar um usuário

// métodos http:
// get -> listar
// post -> criar
// put -> editar vários
// patch -> editar um
// delete -> deletar

// http status:
// 2xx -> sucesso
// 4xx -> erro cliente (frontend)
// 5xx -> erro servidor (backend)


// as rotas precisam de:
// 1 - tipo de rota (método http)
// 2 - endereço (www.exemplo/users)

// requisições:
// req query params: informações no url 'servidor.com/usuarios?estado=pernambuco&cidade=recife' (informações menores)

// route params (get/put/delete) = servidor.com/usuarios/22 (id especifico)

// body params (post e put) = {"nome":"Gabriel",+"id":22} (enviar informações pelo body, feito para informações mais delicadas, ou grande volume de informações)