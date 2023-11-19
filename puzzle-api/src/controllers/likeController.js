
const connection = require('../config/db');
const mysql = require('mysql2/promise');

require("dotenv").config();

async function likePost(request, response) {
  const values = [
    request.body.postId,
    request.body.userId
  ];

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
      request.body.post_id,
      request.body.user_id
  ];

  const query = "SELECT isLiked FROM postlikes WHERE post_id = ? AND user_id = ?;";

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

async function unlikePost(request, response) {
  const values = [
    request.body.postId,
    request.body.userId
  ];

  try {
    connection.query('UPDATE postlikes SET isLiked = 0 WHERE post_id = ? AND user_id = ?', values, (err, results) => {
      if (err) {
        response.status(400).json({
          success: false,
          message: "An error has occurred. Unable to update post like status.",
          query: err.sql,
          sqlMessage: err.sqlMessage
        });
      } else if (results.affectedRows > 0) {
        response.status(200).json({
          success: true,
          message: 'Success to unlike post.',
          data: results
        });
      } else {
        response.status(400).json({
          success: false,
          message: `Unable to unlike post.`,
        });
      }
    });
  } catch (error) {
    response.status(500).json({
      success: false,
      message: `Internal Server Error.`,
      error: error.message,
    });
  }
}

module.exports = {
    likePost,
    isLiked,
    unlikePost
}

