// Importa as configurações do banco de dados na variável connection
const connection = require('../config/db');
const mysql = require('mysql2/promise');
// Importar o pacote dotenv, gerenciador de variáveis de ambiente
require("dotenv").config();

async function likePost(request, response) {
  const values = [
    request.body.postId,
    request.body.userId
  ];

  console.log('aaaaaaaaaaa', values)

  try {
    // Verificar se a relação de like já existe
    connection.query('SELECT * FROM postlikes where post_id = ? and user_id = ?', values, (err, results) => {
      if (results.length > 0) {
        connection.query('UPDATE postlikes SET isLiked = 1 WHERE post_id = ? AND user_id = ?', values);
        // Se já estiver curtido, retornar um sucesso sem fazer mais nada
        return response.status(200).json({
          success: true,
          message: 'Post is already being liked.',
          data: results
        });
      } else {
        const query = 'INSERT INTO postlikes (post_id, user_id) VALUES (?, ?);';

        connection.query(query, values, (err, results) => {
          console.log('e ' + err);
          console.log('r ' + results);

          if (err) {
              response.status(400).json({
                success: false,
                message: "An error has occurred. Unable to like post.",
                query: err.sql,
                sqlMessage: err.sqlMessage
              });
          } else if (results.affectedRows > 0) {
              response.status(200).json({
                success: true,
                message: 'Success to like post.',
                data: results
            });
          } else {
              response.status(400).json({
                success: false,
                message: `Unable to like post.`,
              });
            }
          }
        );
      }
    })    
  } catch (error) {
    response.status(500).json({
      success: false,
      message: `Internal Server Error.`,
      error: error.message,
    });
  }
}

async function isLiked(request, response) {
    const params = [
        request.params.postId,
        request.params.userId
    ];

    const query = "SELECT * FROM postlikes WHERE post_id = ? AND user_id = ?;";

    try {
        const [results] = await connection.execute(query, params);

        response.status(200).json({
            success: true,
            message: 'Retorno de usuários com sucesso!',
            data: results
        });
    } catch (error) {
        response.status(500).json({
            success: false,
            message: "Ocorreu um erro. Não foi possível realizar sua requisição!",
            error: error.message
        });
    }
}



module.exports = {
    likePost,
    isLiked
}

