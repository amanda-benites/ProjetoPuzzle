// Importa as configurações do banco de dados na variável connection
const connection = require('../config/db');

// Função que retorna todos usuários no banco de dados
async function listArticles(request, response) {
    connection.query('SELECT * FROM articles', (err, results) => { 
        try {  
            if (results) {  // Se tiver conteúdo 
                response.status(200).json({
                    success: true,
                    message: 'Retorno de posts com sucesso!',
                    data: results
                });
            } else {  // Retorno com informações de erros
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Não foi possível retornar os posts.`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) {  // Caso aconteça qualquer erro no processo na requisição, retorna uma mensagem amigável
            response.status(400).json({
                succes: false,
                message: "Ocorreu um erro. Não foi possível realizar sua requisição!",
                query: err.sql,
                sqlMessage: err.sqlMessage
            })
        }   
    });
}


// Função que cria um novo post
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
        });
    } catch (err) {
        response.status(400).json({
            success: false,
            message: "Não foi possível criar o post",
            query: query,
            sqlMessage: err.sqlMessage
        });
    }
}


async function findArticle(request, response) {
    const articleId = request.params.article_id;
    console.log('-----------articleId :', articleId);
  
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
  


module.exports = {
    listArticles,
    newArticle,
    findArticle
}