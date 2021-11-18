//regras de negócio do sistema de artigos

const database = require("../models")
const tabelaArtigos = database.artigos

//Cria um novo artigo
exports.create = (request, response) =>  {
    const artigo = {
        titulo: request.body.titulo,
        descricao: request.body.descricao,
        publicado: request.body.publicado
    }

    tabelaArtigos.create(artigo)
    .then(() => response.send("Artigo criado com sucesso"))
    .catch(() => response.status(500).send("Ocorreu um erro ao salvar o artigo"))
}