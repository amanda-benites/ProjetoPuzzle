// Importa as configurações do banco de dados na variável connection
const connection = require('../config/db');
// Importar o pacote dotenv, gerenciador de variáveis de ambiente
require("dotenv").config();

async function deletePost(request, response) {
  const postId = parseInt(request.params.post_id, 10);

  // Iniciar a transação
  connection.beginTransaction(async function (err) {
      if (err) {
          response.status(500).json({
              success: false,
              message: "Erro ao iniciar transação",
              error: err
          });
          return;
      }

      try {
          // Consultar e excluir registros associados em outras tabelas
          await executeQuery("DELETE FROM comments WHERE post_id = ?;", [postId]);
          await executeQuery("DELETE FROM postlikes WHERE post_id = ?;", [postId]);
          // Adicione mais consultas conforme necessário para outras tabelas

          // Excluir o usuário da tabela principal
          const mainDeleteQuery = "DELETE FROM posts WHERE post_id = ?;";
          const mainResult = await executeQuery(mainDeleteQuery, [postId]);

          // Commit a transação se todas as consultas foram bem-sucedidas
          connection.commit(function (err) {
              if (err) {
                  return connection.rollback(function () {
                      response.status(500).json({
                          success: false,
                          message: "Erro ao commitar transação",
                          error: err
                      });
                  });
              }

              response.status(200).json({
                  success: true,
                  message: `Sucesso! Usuário e registros associados deletados.`,
                  data: {
                      mainResult
                      // Adicione mais resultados conforme necessário
                  }
              });
          });
      } catch (error) {
          // Rollback da transação em caso de erro
          connection.rollback(function () {
              response.status(500).json({
                  success: false,
                  message: "Erro ao executar exclusão em cascata",
                  error
              });
          });
      }
  });
}

// Função utilitária para executar consultas
function executeQuery(query, params) {
  return new Promise((resolve, reject) => {
      connection.query(query, params, (err, result) => {
          if (err) {
              reject(err);
          } else {
              resolve(result);
          }
      });
  });
}

module.exports = {
    deletePost
};
