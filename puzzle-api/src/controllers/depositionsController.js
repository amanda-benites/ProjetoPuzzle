// Configurações do banco de dados
const connection = require('../config/db');

// Gerenciador de variáveis de ambiente
require("dotenv").config();


// ------------------ LISTA DOS DEPOIMENTOS CONFORME O ID DO CONTATO ------------------
async function findDepositions(request, response) {
    const followerId = request.params.followerId;
  
    connection.query('SELECT d.testimony_content, d.user_id, d.follower_id, d.testimony_date, d.testimony_id, u.user_name nome_comentou FROM depositions d, users u WHERE d.follower_id = ? AND u.user_id = d.user_id', [followerId], (err, results) => {
      if (err) {
        response.status(400).json({
          success: false,
          message: "An error has occurred. Unable to return article informations.",
          query: err.sql,
          sqlMessage: err.sqlMessage
        });
      } else {
        response.status(200).json({
          success: true,
          message: 'Success in returning article informations.',
          data: results
        });
      } 
    });
}


// ------------------ LISTA DOS DEPOIMENTOS CONFORME O ID DO USUÁRIO ------------------
async function findDepositionsToUser(request, response) {
  const userId = request.params.userId;

  connection.query('SELECT d.testimony_content, d.user_id, d.follower_id, d.testimony_date, d.testimony_id, u.user_name nome_comentou FROM depositions d, users u WHERE d.follower_id = ? AND u.user_id = d.user_id', [userId], (err, results) => {
    if (err) {
      response.status(400).json({
        success: false,
        message: "An error has occurred. Unable to return article informations.",
        query: err.sql,
        sqlMessage: err.sqlMessage
      });
    } else {
      response.status(200).json({
        success: true,
        message: 'Success in returning article informations.',
        data: results
      });
    } 
  });
}


// ------------------ LISTA DAS INFORMAÇÕES DO DEPOIMENTO ------------------
async function selectTestimonyInfos (request, response) {
  const testimonyId = request.params.testimonyId;

  connection.query('SELECT d.testimony_content, d.user_id, d.follower_id, d.testimony_date, d.testimony_id, u.user_name FROM depositions d JOIN users u ON u.user_id = d.user_id WHERE d.testimony_id = ?;', [testimonyId], (err, results) => {
    if (err) {
      response.status(400).json({
        success: false,
        message: "An error has occurred. Unable to return article informations.",
        query: err.sql,
        sqlMessage: err.sqlMessage
      });
    } else {
      response.status(200).json({
        success: true,
        message: 'Success in returning article informations.',
        data: results
      });
    } 
  });
}


// ------------------ CRIAÇÃO DE DEPOIMENTO ------------------
async function newTestimony(request, response) {
  
  const values = [
    request.body.userId,
    request.body.followerId,
    request.body.testimony_content
  ];

  const query = "INSERT INTO depositions (user_id, follower_id, testimony_content) VALUES (?, ?, ?)";

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
        message: "Success! Created testimony",
        data: results
    });
    } catch (err) {
        response.status(400).json({
            success: false,
            message: "Unable to create testimony.",
            query: query,
            sqlMessage: err.sqlMessage
        });
    }
}


// ------------------ ATUALIZAÇÃO DE DEPOIMENTO ------------------
async function updateTestimony(request, response) {
  
  const values = [
    request.body.testimonyContent,
    request.body.testimonyId,
  ];

    try {
      connection.query('UPDATE depositions SET testimony_content = ? WHERE testimony_id = ?', values, (err, results) => {
        if (err) {
          response.status(400).json({
            success: false,
            message: "An error has occurred. Unable to update testimony.",
            query: err.sql,
            sqlMessage: err.sqlMessage
          });
        } else if (results.affectedRows > 0) {
          response.status(200).json({
            success: true,
            message: 'Success to update testimony.',
            data: results
          });
        } else {
          response.status(400).json({
            success: false,
            message: `Unable to update testimony.`,
          });
        }
      });
    } catch (error) {
      response.status(500).json({
        success: false,
        message: `Internal Server Error.`,
        error: error.message,
      });
    }
}

  
// ------------------ EXPORTAÇÃO DAS FUNÇÕES QUE VÃO SER ACESSADAS NAS ROTAS ------------------
module.exports = {
    findDepositions,
    findDepositionsToUser,
    newTestimony,
    selectTestimonyInfos,
    updateTestimony
}