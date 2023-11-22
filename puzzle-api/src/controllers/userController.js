// Configurações do banco de dados
const connection = require('../config/db');

// Pacote para criptografar a senha de usuario
const bcrypt = require('bcrypt');


// ------------------ LISTAR TODOS OS USUÁRIOS QUE NÃO ESTIVEREM LOGADOS ------------------
async function listUsers(request, response) {
    const userId = request.params.user_id;
    connection.query('SELECT * FROM users WHERE user_id != ?', [userId], (err, results) => { 
        try { 
            if (results) { 
                response.status(200).json({
                    success: true,
                    message: 'Success in returning users.',
                    data: results
                });
            } else { 
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Unable to return users.`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) {  
            response.status(400).json({
                succes: false,
                message: "An error has occurred. Unable to return user.",
                query: err.sql,
                sqlMessage: err.sqlMessage
            })
        }   
    });
}

// ------------------ LISTAR INFORMAÇÕES DO USUÁRIO LOGADO ------------------
async function listUserInfos(request, response) {
    const userId = request.params.user_id;
  
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
          data: results[0]
        });
      } else {
        response.status(400).json({
          success: false,
          message: `Unable to return user informations. User not found.`,
        });
      }
    });
  }

  // ------------------ PEGAR IMAGEM DE PERFIL DO USUÁRIO ------------------
  async function getUserImage(request, response) {
    const userId = request.params.user_id;
  
    connection.query('SELECT img_profile FROM users WHERE user_id = ?', [userId], (err, results) => {
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
          data: results[0]
        });
      } else {
        response.status(400).json({
          success: false,
          message: `Unable to return user informations. User not found.`,
        });
      }
    });
  }


  // ------------------ LISTAR AS INFORMAÇÕES DO USUÁRIO ------------------
  async function listPeopleInfos(request, response) {
    const userId = request.params.user_id;
  
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
          data: results[0]
        });
      } else {
        response.status(400).json({
          success: false,
          message: `Unable to return user informations. User not found.`,
        });
      }
    });
  }
  

  // ------------------ CRIAÇÃO DE NOVO USUÁRIO ------------------
async function storeUser(request, response) {
    const query = 'INSERT INTO users(user_name, user_email, user_password) VALUES(?, ?, ?);';

    const params = Array(
        request.body.user_name,
        request.body.user_email,
        bcrypt.hashSync(request.body.user_password, 10)
    );

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
        } catch (e) { 
            response.status(400).json({
                    succes: false,
                    message: "An error has occurred. Unable to register user.",
                    query: err.sql,
                    sqlMessage: err.sqlMessage
                });
        }
    });
}


// ------------------ ATUALIZAÇÃO DE INFORMAÇÕES DO USUÁRIO ------------------
async function updateUser(request, response) {
    if(request.file) {
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


// ------------------ EXPORTAÇÃO DAS FUNÇÕES QUE VÃO SER ACESSADAS NAS ROTAS ------------------
module.exports = {
    listUsers,
    listUserInfos,
    getUserImage,
    listPeopleInfos,
    storeUser,
    updateUser
}