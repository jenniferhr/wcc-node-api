//rotas do sistema de artigos

/*
    GET
    - Obter todos os artigos
    - Obter um artigo específico
    - Obter todos os artigos publicados

    POST
    - Criar um novo artigo

    PUT
    - Publicar meu artigo

    DELETE
    - Deletar um artigo
*/

module.experts = (app) => {
    const artigosController = require("../controllers/artigos.controller.js")
    let router = require("express").Router()

    router.post("/", artigosController.create)

    app.use("/artigos", router)
}