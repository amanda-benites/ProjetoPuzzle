// Configurações do banco de dados
const connection = require('../config/db');

// Gerenciador de variáveis de ambiente
require("dotenv").config();


// ------------------ CRIAÇÃO DE POSTAGEM ------------------
async function createPost(request, response) {
    const query = 'INSERT INTO posts (user_id, img_post, legend_post) VALUES (?, ?, ?)'

    const params = [
      request.body.userId,
      request.file.filename, 
      request.body.legend
  ];
    connection.query(query, params, (error, result) => {
        if(error) {
            console.error('Error to criate the post: ', error.message);
            return response.status(500).json({error: 'Error to criate the post'});
        }
        response.json({message: 'Success to create post', post_id: result.insertId});
    });
}


// ------------------ LISTAGEM DE TODAS AS POSTAGENS ------------------
async function getAllPosts(req, res) {
    const query = `
    SELECT
      posts.post_id AS post_id,
      posts.user_id AS user_id,
      posts.img_post AS img_post,
      posts.legend_post AS legend_post,
      users.user_name AS user_name,
      users.img_profile AS img_profile
    FROM
      posts
    JOIN
      users ON posts.user_id = users.user_id
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


  // ------------------ LISTA AS INFORMAÇÕES DE UM POST PELO ID ------------------
  async function getPostInformations(request, response) {
    const postId = request.params.post_id;
    
    const query = `
    SELECT
      posts.post_id AS post_id,
      posts.user_id AS user_id,
      posts.img_post AS img_post,
      posts.legend_post AS legend_post,
      users.user_name AS user_name,
      users.img_profile AS img_profile
    FROM
      posts
    JOIN
      users ON posts.user_id = users.user_id
    WHERE
      posts.post_id = ?
    `;
  
    connection.query(query, [postId], (error, results) => {
      if (error) {
        console.error('Erro ao recuperar as informações do post: ' + error.message);
        return response.status(500).json({ error: 'Erro ao recuperar as informações do post' });
      }
  
      response.json(results);
    });
  }


  // ------------------ LISTA OS PRIMEIROS 6 POSTS DO USUÁRIO ------------------
  async function getSixtUserPosts (request, response) {
    const postId = request.params.user_id;
    
    const query = `
    SELECT
      posts.post_id AS post_id,
      posts.user_id AS user_id,
      posts.img_post AS img_post,
      posts.legend_post AS legend_post,
      users.user_name AS user_name,
      users.img_profile AS img_profile
    FROM
      posts
    JOIN
      users ON posts.user_id = users.user_id
    WHERE
      posts.user_id = ?
    LIMIT 6
    `;
  
    connection.query(query, [postId], (error, results) => {
      if (error) {
        console.error('Erro ao recuperar as informações do post: ' + error.message);
        return response.status(500).json({ error: 'Erro ao recuperar as informações do post' });
      }
 
      response.json(results);
    });
  }


  // ------------------ LISTA TODOS OS POSTS DO USUÁRIO ------------------
  async function getUserPosts (request, response) {
    const postId = request.params.user_id;
    
    const query = `
    SELECT
      posts.post_id AS post_id,
      posts.user_id AS user_id,
      posts.img_post AS img_post,
      posts.legend_post AS legend_post,
      users.user_name AS user_name,
      users.img_profile AS img_profile
    FROM
      posts
    JOIN
      users ON posts.user_id = users.user_id
    WHERE
      posts.user_id = ?
    `;
  
    connection.query(query, [postId], (error, results) => {
      if (error) {
        console.error('Erro ao recuperar as informações do post: ' + error.message);
        return response.status(500).json({ error: 'Erro ao recuperar as informações do post' });
      }
  
      response.json(results);
    });
  }


  // ------------------ PEGA A IMAGEM DA POSTAGEM CONFORME O ID ------------------
  async function getImagePost (request, response) {
    const postId = request.params.post_id;
    
    const query = `SELECT img_post FROM posts WHERE post_id = ?`;
  
    connection.query(query, [postId], (error, results) => {
      if (error) {
        console.error('Erro ao recuperar a imagem do post: ' + error.message);
        return response.status(500).json({ error: 'Erro ao recuperar a imagem do post' });
      }
  
      response.json(results);
    });
  }


  // ------------------ ATUALIZAÇÃO DA POSTAGEM ------------------
  async function updatePost(request, response) {
    if(request.file) { // Caso a imagem seja atualizada
        const query = `UPDATE posts
        SET img_post = ?, legend_post = ?
        WHERE post_id = ?;`;
        const params = Array(
            request.file.filename,
            request.body.postLegend,
            request.body.postId
            );

            connection.query(query, params, (err, results) => {
                    try {
                        if (results.affectedRows > 0) {
                            response.status(200).json({
                                success: true,
                                message: `Sucesso! Post atualizado.`,
                                data: results
                            });
                        } else {
                            response.status(400).json({
                                success: false,
                                message: `Não foi possível realizar a atualização. Verifique os dados informados`,
                                query: err,
                                sqlMessage: err
                            });
                        }
                    } catch (e) {
                        response.status(400).json({
                            success: false,
                            message: "Ocorreu um erro. Não foi possível atualizar post!",
                            query: err,
                            sqlMessage: err
                        });
                    }
                });
    } else { // Caso a imagem não for atualizada
        const query = `UPDATE posts
        SET legend_post = ?
        WHERE post_id = ?;`;
        const params = Array(
            request.body.postLegend,
            request.body.postId
        );
            connection.query(query, params, (err, results) => {
                    try {
                        if (results.affectedRows > 0) {
                            response.status(200).json({
                                success: true,
                                message: `Sucesso! Post atualizado.`,
                                data: results
                            });
                        } else {
                            response.status(400).json({
                                success: false,
                                message: `Não foi possível realizar a atualização. Verifique os dados informados`,
                                query: err,
                                sqlMessage: err
                            });
                        }
                    } catch (e) {
                        response.status(400).json({
                            success: false,
                            message: "Ocorreu um erro. Não foi possível atualizar post!",
                            query: err,
                            sqlMessage: err
                        });
                    }
            });
    }
}
  
  
  // ------------------ EXPORTAÇÃO DAS FUNÇÕES QUE VÃO SER ACESSADAS NAS ROTAS ------------------
  module.exports = {
      createPost,
      getAllPosts,
      getPostInformations,
      getSixtUserPosts,
      getUserPosts,
      getImagePost,
      updatePost
  }