// Importa as configurações do banco de dados na variável connection
const connection = require('../config/db');

// Pacote para criptografar a senha de usuario
const bcrypt = require('bcrypt');

// Função que retorna todos usuários no banco de dados
async function listUsers(request, response) {
    const userId = request.params.user_id;// Recupere o email do parâmetro da rota
    // Preparar o comando de execução no banco
    connection.query('SELECT * FROM users WHERE user_id != ?', [userId], (err, results) => { 
        try {  // Tenta retornar as solicitações requisitadas
            if (results) {  // Se tiver conteúdo 
                response.status(200).json({
                    success: true,
                    message: 'Success in returning users.',
                    data: results
                });
            } else {  // Retorno com informações de erros
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Unable to return users.`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) {  // Caso aconteça qualquer erro no processo na requisição, retorna uma mensagem amigável
            response.status(400).json({
                succes: false,
                message: "An error has occurred. Unable to return user.",
                query: err.sql,
                sqlMessage: err.sqlMessage
            })
        }   
    });
}

async function listUserInfos(request, response) {
    const userId = request.params.user_id;// Recupere o email do parâmetro da rota
  
    // Preparar o comando de execução no banco
    connection.query('SELECT * FROM users WHERE user_id = ?', [userId], (err, results) => {
      if (err) {
        response.status(400).json({
          success: false,
          message: "An error has occurred. Unable to return user informations.",
          query: err.sql,
          sqlMessage: err.sqlMessage
        });
      } else if (results.length > 0) {
        response.status(200).json({
          success: true,
          message: 'Success in returning user informations.',
          data: results[0] // Suponhamos que você deseja retornar apenas o primeiro resultado
        });
      } else {
        response.status(400).json({
          success: false,
          message: `Unable to return user informations. User not found.`,
        });
      }
    });
  }


  async function listPeopleInfos(request, response) {
    const userId = request.params.user_id;// Recupere o email do parâmetro da rota
  
    // Preparar o comando de execução no banco
    connection.query('SELECT * FROM users WHERE user_id = ?', [userId], (err, results) => {
      if (err) {
        response.status(400).json({
          success: false,
          message: "An error has occurred. Unable to return user informations.",
          query: err.sql,
          sqlMessage: err.sqlMessage
        });
      } else if (results.length > 0) {
        response.status(200).json({
          success: true,
          message: 'Success in returning user informations.',
          data: results[0] // Suponhamos que você deseja retornar apenas o primeiro resultado
        });
      } else {
        response.status(400).json({
          success: false,
          message: `Unable to return user informations. User not found.`,
        });
      }
    });
  }
  

// Função que cria um novo usuário 
async function storeUser(request, response) {
    // Preparar o comando de execução no banco
    const query = 'INSERT INTO users(user_name, user_email, user_password) VALUES(?, ?, ?);';

    // Recuperar os dados enviados na requisição
    const params = Array(
        request.body.user_name,
        request.body.user_email,
        bcrypt.hashSync(request.body.user_password, 10)
    );

    // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
    connection.query(query, params, (err, results) => {
        try {
            if (results) {
                response
                    .status(201)
                    .json({
                        success: true,
                        message: `Success! User registered.`,
                        data: results
                    });
            } else {
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Unable to register user. Check your informations.`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) { // Caso aconteça algum erro na execução
            response.status(400).json({
                    succes: false,
                    message: "An error has occurred. Unable to register user.",
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    });
}

// Função que remove usuário no banco
async function deleteUser(request, response) {
    // Preparar o comando de execução no banco
    const query = "DELETE FROM users WHERE `id_user` = ?";

    // Recebimento de parametro da rota
    const params = Array(
        request.params.id
    );

    // Executa a ação no banco e valida os retornos para o client que realizou a solicitação
    connection.query(query, params, (err, results) => {
        try {
            if (results) {
                response
                    .status(200)
                    .json({
                        success: true,
                        message: `Success! Deleted user.`,
                        data: results
                    });
            } else {
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Unable to delete user. Check your information.`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) { // Caso aconteça algum erro na execução
            response.status(400).json({
                    succes: false,
                    message: "An error has occurred. Unable to delete user.",
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    });
}

async function updateUser(request, response) {
    // Preparar o comando de execução no banco

    // Recuperar os dados enviados na requisição respectivamente

    if(request.file) {
        const passwordToHash = request.body.userPassoword || ''; // Use um valor padrão se for undefined
        const query = `UPDATE users
        SET user_name = ?, user_email = ?, img_profile = ?
        WHERE user_id = ?;`;
        const params = Array(
            request.body.userEditName,
            request.body.userEditEmail, 
            request.file.filename,
            request.body.userId
            );

            connection.query(query, params, (err, results) => {
                console.log('params :', params);
                console.log('query :', query);
                    try {
                        if (results.affectedRows > 0) {
                            response.status(200).json({
                                success: true,
                                message: `Sucesso! Usuário atualizado.`,
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
                            message: "Ocorreu um erro. Não foi possível atualizar usuário!",
                            query: err,
                            sqlMessage: err
                        });
                    }
                });
    } else {
        const query = `UPDATE users
        SET user_name = ?, user_email = ? WHERE user_id = ?;`;
        const params = Array(
            request.body.userEditName,
            request.body.userEditEmail, 
            request.body.userId
            );

            connection.query(query, params, (err, results) => {
                console.log('params :', params);
                console.log('query :', query);
                    try {
                        if (results.affectedRows > 0) {
                            response.status(200).json({
                                success: true,
                                message: `Sucesso! Usuário atualizado.`,
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
                            message: "Ocorreu um erro. Não foi possível atualizar usuário!",
                            query: err,
                            sqlMessage: err
                        });
                    }
                });
    }
}

module.exports = {
    listUsers,
    listUserInfos,
    listPeopleInfos,
    storeUser,
    deleteUser,
    updateUser
}