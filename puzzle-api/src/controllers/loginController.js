// Configurações do banco de dados
const connection = require('../config/db');
// Gerenciador de variáveis de ambiente
require("dotenv").config();
// Pacote para criptografar a senha de usuario
const bcrypt = require('bcrypt');
// Pacote que implementa o protocolo JSON Web Token
const jwt = require('jsonwebtoken');


// ------------------ LOGIN ------------------
async function login(request, response) {
    const query = "SELECT * FROM Users WHERE `user_email` = ?";
    console.log(request.body);
    console.log(request.body.user_email);
    const params = Array(
        request.body.user_email
    );

    connection.query(query, params, (err, results) => {
        console.log(err, results);
        try {            
            if (results.length > 0) {                
                bcrypt.compare(request.body.user_password, results[0].user_password, (error, result) => {
                    console.log(error, result);
                    if (err) {                        
                        return response.status(401).send({
                          msg: 'Email or password is incorrect!'
                        });
                    } else if(result) {
                        const id = results[0].user_id;
                        const token = jwt.sign({ userId: id },'the-super-strong-secrect',{ expiresIn: 300 });
                        results[0]['token'] = token; 
                        
                        response
                        .status(200)
                        .json({
                            success: true,
                            message: `Success! Connected user.`,
                            data: results
                        });
                    }
                })
                
            } else {
                response
                    .status(400)
                    .json({
                        success: false,
                        message: `Unable to connect user. Check your informations.`,
                        query: err.sql,
                        sqlMessage: err.sqlMessage
                    });
            }
        } catch (e) { 
            response.status(400).json({
                    succes: false,
                    message: "An error has occurred. Unable to connect user.",
                    query: err,
                    sqlMessage: err
                });
        }
    });
}

// ------------------ EXPORTAÇÃO DAS FUNÇÃO QUE VAI SER ACESSADA NAS ROTAS ------------------
module.exports = {
    login
}