// Importa as configurações do banco de dados na variável connection
const connection = require('../config/db');

// Pacote para criptografar a senha do usuário
const bcrypt = require('bcrypt');

// Função que remove usuário no banco
async function deleteUser(request, response) {
  // Recebimento de parâmetro da rota
  const userId = parseInt(request.params.user_id, 10);
  console.log('userId :', userId);

  try {
    // Iniciar a transação
    await beginTransaction();

    // Executar o bloco de código SQL dentro da transação
    await executeSQLTransaction(userId);

    // Confirmar a transação
    await commitTransaction();

    // Responder ao cliente
    response.status(200).json({
      success: true,
      message: `Success! Deleted user.`
    });
  } catch (error) {
    // Desfazer a transação em caso de erro
    await rollbackTransaction();

    // Responder ao cliente com o erro
    response.status(500).json({
      success: false,
      message: `An error has occurred. Unable to delete user.`,
      error: error.message
    });
  }
}

// Função para iniciar a transação
function beginTransaction() {
  return new Promise((resolve, reject) => {
    connection.beginTransaction((err) => {
      if (err) reject(err);
      else resolve();
    });
  });
}

// Função para confirmar a transação
function commitTransaction() {
  return new Promise((resolve, reject) => {
    connection.commit((err) => {
      if (err) {
        connection.rollback(() => {
          reject(err);
        });
      } else {
        resolve();
      }
    });
  });
}

// Função para desfazer a transação
function rollbackTransaction() {
  return new Promise((resolve, reject) => {
    connection.rollback(() => {
      resolve();
    });
  });
}

// Função para executar o bloco de código SQL dentro da transação
// Função para executar o bloco de código SQL dentro da transação
async function executeSQLTransaction(userId) {
    const sqlTransaction = `
      START TRANSACTION;
  
      DELETE FROM postlikes WHERE user_id = ?;
  
      DELETE FROM comments WHERE user_id = ?;
  
      DELETE FROM articles WHERE user_id = ?;
  
      DELETE FROM depositions WHERE user_id = ?;
  
      DELETE FROM follows WHERE user_id = ?;
  
      DELETE FROM posts WHERE user_id = ?;
  
      DELETE FROM depositions WHERE follower_id = ?;
  
      DELETE FROM follows WHERE follower_id = ?;
  
      DELETE FROM users WHERE user_id = ?;
  
      COMMIT;
    `;
  
    return new Promise((resolve, reject) => {
      connection.query(sqlTransaction, [userId, userId, userId, userId, userId, userId, userId, userId, userId], (err, results) => {
        if (err) reject(err);
        else resolve(results);
      });
    });
  }
  
// Substitua os detalhes de conexão com seu próprio config

module.exports = {
  deleteUser
};
