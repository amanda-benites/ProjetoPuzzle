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
    const query = 'INSERT INTO posts (user_id, img_post, legend_post) VALUES (?, ?, ?)'

    console.log('------------image :', request.file.filename);

    const params = [
      request.body.user_id,
      // Pega o fileName do arquivo para inserir no BD.
      request.file.img_post, 
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

// -------------- Get posts --------------------

var fs = require('fs');

// Função que rcebe dois argumentos: base64str, que é uma string em formato base64 a ser decodificada, e fileName, que é o nome do arquivo onde a decodificação será salva.
function base64_decode(base64str,fileName){
  var bitmap = Buffer.from(base64str, 'base64');

  // O conteúdo decodificado é escrito no arquivo especificado por fileName.
  fs.writeFileSync(img_post+'',bitmap, 'binary', function (err){
    if(err){
      console.log('Conversao com erro');
    }
  } );
}

// Consultar todos os posts com JOIN para obter informações do autor
async function getAllPosts(req, res) {
    const query = `
      SELECT
        posts.post_id AS post_id
        posts.user_id AS post_id,
        posts.img_post AS post_image,
        posts.legend_post AS legend_post,
        users.user_name AS user_name,
        users.user_email AS user_email
      FROM
        posts
      JOIN
        users ON posts.userId = users.user_id
      ORDER BY posts.date_post DESC
    `;
  
    connection.query(query, (error, results) => {
      if (error) {
        console.error('Erro ao recuperar os posts: ' + error.message);
        return res.status(500).json({ error: 'Erro ao recuperar os posts' });
      }

      results.forEach((post) => {
        if (post.post_image) {
          const base64Data = post.post_image;
          // Define o nome do arquivo.
          const postImg = `post_${post.post_id}.jpeg`; 
          base64_decode(base64Data, postImg);
        }
      });
  
      res.json(results);
    });
  }
  
  
  module.exports = {
      createPost,
      getAllPosts
  }