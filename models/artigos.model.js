//model da tabela de artigos

const { Sequelize } = require("sequelize/types")

//titulo, descrição, publicado
module.exports = (sequelizeDatabase) => {
    const Artigo = sequelizeDatabase.define("artigos", {
        titulo: {
            type: Sequelize.STRING
        },
        descricao: {
            type: Sequelize.STRING
        },
        publicado: {
            type: Sequelize.BOOLEAN
        }
    })

    return Artigo
}