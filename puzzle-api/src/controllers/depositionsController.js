const connection = require('../config/db');
require("dotenv").config();

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

// Função que cria um novo depoimento
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

  
module.exports = {
    findDepositions,
    findDepositionsToUser,
    newTestimony
}