// Configurações do banco de dados
const connection = require('../config/db');

// Gerenciador de variáveis de ambiente
require("dotenv").config();


// ------------------ LISTA DE TODOS OS ARTIGOS ------------------
async function listArticles(request, response) {
    connection.query('SELECT * FROM articles', (err, results) => { 
        try {  
            if (results) {  // Se houver retorno de resultados
                response.status(200).json({
                    success: true,
                    message: 'Retorno de posts com sucesso!',
                    data: results
                });
            } else {  // Se houver resultado com erro
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Não foi possível retornar os posts.`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) {  // Se ocorrer qualquer erro na requisição
            response.status(400).json({
                succes: false,
                message: "Ocorreu um erro. Não foi possível realizar sua requisição!",
                query: err.sql,
                sqlMessage: err.sqlMessage
            })
        }   
    });
}


// ------------------ CRIAÇÃO DE ARTIGOS ------------------
async function newArticle(request, response) {
    const values = [
        request.body.article_name,
        request.body.article_link
    ];

    const query = "INSERT INTO articles (article_name, article_link) VALUES (?, ?)";

    try {
        const results = await new Promise((resolve, reject) => {
            connection.query(query, values, (err, results) => {
                if (err) {
                    reject(err);
                } else {
                    resolve(results);
                }
            });
        });
        response.status(201).json({
            success: true,
            message: "Sucesso! Post criado",
            data: results
        }); // Se o artigo for criado com sucesso
    } catch (err) {
        response.status(400).json({
            success: false,
            message: "Não foi possível criar o post",
            query: query,
            sqlMessage: err.sqlMessage
        }); // Se houver erro para criar o artigo
    }
}


// ------------------ LISTA DE INFORMAÇÕES DE UM ARTIGO CONFORME O ID ------------------
async function findArticle(request, response) {
    const articleId = request.params.articleId;
  
    connection.query('SELECT * FROM articles WHERE article_id = ?', [articleId], (err, results) => {
      if (err) {
        response.status(400).json({
          success: false,
          message: "An error has occurred. Unable to return article informations.",
          query: err.sql,
          sqlMessage: err.sqlMessage
        });
      } else if (results.length > 0) {
        response.status(200).json({
          success: true,
          message: 'Success in returning article informations.',
          data: results[0] 
        });
      } else {
        response.status(400).json({
          success: false,
          message: `Unable to return article informations. User not found.`,
        });
      }
    });
  }
  

// ------------------ EXPORTAÇÃO DAS FUNÇÕES QUE VÃO SER ACESSADAS NAS ROTAS ------------------
module.exports = {
    listArticles,
    newArticle,
    findArticle
}