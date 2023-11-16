// Importa as configurações do banco de dados na variável connection
const connection = require('../config/db');
// Importar o pacote dotenv, gerenciador de variáveis de ambiente
require("dotenv").config();

async function likePost(request, response) {
    const params = [
        request.body.PostID,
        request.body.UserID
    ]

    const query = "CALL LikeAction(?, ?);";

    connection.query(query, params, (error, results) => {
        try {
            if (!error) {
                response.status(200).json({
                    success: true,
                    message: 'Retorno de usuários com sucesso!',
                    data: results
                });
            } else {
                response.status(400).json({
                    success: false,
                    message: `Não foi possível retornar os usuários.`,
                    query: error.sql,
                    sqlMessage: error.sqlMessage
                });
            }
        } catch (error) {
            response.status(500).json({
                success: false,
                message: "Ocorreu um erro. Não foi possível realizar sua requisição!",
                error: error
            });
        }
    });
}

async function isLiked(request, response) {
    const params = [
        request.body.PostID,
        request.body.UserID
    ]

    const query = "SELECT isEnabled FROM Likes WHERE PostID = ? AND UserID = ?;";

    connection.query(query, params, (error, results) => {
        try {
            if (!error) {
                response.status(200).json({
                    success: true,
                    message: 'Retorno de usuários com sucesso!',
                    data: results
                });
            } else {
                response.status(400).json({
                    success: false,
                    message: `Não foi possível retornar os usuários.`,
                    query: error.sql,
                    sqlMessage: error.sqlMessage
                });
            }
        } catch (error) { // Caso aconteça qualquer erro no processo na requisição, retorna uma mensagem amigável
            response.status(500).json({
                success: false,
                message: "Ocorreu um erro. Não foi possível realizar sua requisição!",
                error: error
            });
        }
    });
}


module.exports = {
    likePost
}

