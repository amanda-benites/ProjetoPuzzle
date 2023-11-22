// Configurações do banco de dados
const connection = require('../config/db');

// Gerenciador de variáveis de ambiente
require("dotenv").config();


// ------------------ EXCLUSÃO DE POSTAGENS ------------------
async function deletePost(request, response) {
  const postId = parseInt(request.params.post_id, 10);

  // Início da transação no banco de dados para excluir uma série de informações como uma unidade
  connection.beginTransaction(async function (err) {
      if (err) {
          response.status(500).json({
              success: false,
              message: "Erro ao iniciar transação",
              error: err
          });
          return;
      } // Se ocorrer erro ao iniciar a transação

      try {
          // Exclusão de registros associados com as postagens
          await executeQuery("DELETE FROM comments WHERE post_id = ?;", [postId]);
          await executeQuery("DELETE FROM postlikes WHERE post_id = ?;", [postId]);

          // Exclusão na tabela principal
          const mainDeleteQuery = "DELETE FROM posts WHERE post_id = ?;";
          const mainResult = await executeQuery(mainDeleteQuery, [postId]);

          // Se todas as ações forem executadas com sucesso a transação é confirmada
          connection.commit(function (err) {
              if (err) {
                  return connection.rollback(function () {
                      response.status(500).json({
                          success: false,
                          message: "Erro ao commitar transação",
                          error: err
                      });
                  });
              } // Se houver erro com alguma ação a transação vai ser revertida
              response.status(200).json({
                  success: true,
                  message: `Sucesso! Usuário e registros associados deletados.`,
                  data: {
                      mainResult
                  }
              }); // Se tudo funcionar
          });
      } catch (error) {
          connection.rollback(function () {
              response.status(500).json({
                  success: false,
                  message: "Erro ao executar exclusão em cascata",
                  error
              });
          }); // Caso ocorra algum erro
      }
  });
}

// Cria uma PROMISE, promentendo um valor em algum momento ou nunca
function executeQuery(query, params) {
  return new Promise((resolve, reject) => {
      connection.query(query, params, (err, result) => {
          if (err) {
              reject(err); // Caso ocorra erro a PROMISE é rejeitada
          } else {
              resolve(result); // Se tudo funcionar a PROMISE é resolvida
          }
      });
  });
}


// ------------------ EXPORTAÇÃO DAS FUNÇÕES QUE VÃO SER ACESSADAS NAS ROTAS ------------------
module.exports = {
    deletePost
};
