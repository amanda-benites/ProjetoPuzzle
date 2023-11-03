// Importa as configurações do banco de dados na variável connection
const connection = require('../config/db');
// Importar o pacote dotenv, gerenciador de variáveis de ambiente
require("dotenv").config();
// Pacote para criptografar a senha de usuario
const bcrypt = require('bcrypt');
// Importar pacote que implementa o protocolo JSON Web Token
const jwt = require('jsonwebtoken');

// Create post

async function createPost(request, response) {
    console.log('======================================================================')
    const query = 'INSERT INTO posts (user_id, img_post, legend_post) VALUES (?, ?, ?)'

    if (results.length === 0) {
        return response.status(404).json({error: 'Post não encontrado'});
    }

    const params = [
        request.body.user_id,
        request.body.img_post,
        request.body.legend_post
    ];
    connection.query(query, params, (error, result) => {
        if(error) {
            console.error('Error to criate the post: ', error.message);
            return response.status(500).json({error: 'Error to criate the post'});
        }
        response.json({message: 'Success to create post', post_id: result.insertId});
    });
}

// Consultar todos os posts com JOIN para obter informações do autor
async function getAllPosts(req, res) {
    const query = `
      SELECT
        posts.user_id AS post_id,
        posts.img_post AS post_image,
        posts.legend_post AS legend_post
      FROM
        posts
      JOIN
        users ON posts.userId = users.user_id
    `;
  
    connection.query(query, (error, results) => {
      if (error) {
        console.error('Erro ao recuperar os posts: ' + error.message);
        return res.status(500).json({ error: 'Erro ao recuperar os posts' });
      }
  
      res.json(results);
    });
  }
  
  
  module.exports = {
      createPost,
      getAllPosts
  }