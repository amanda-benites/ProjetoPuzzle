// Importa as configurações do banco de dados na variável connection
const connection = require('../config/db');

async function findDepositions(request, response) {
    const followerId = request.params.followerId;
    console.log('-----------followerId :', followerId);
  
    connection.query('SELECT d.testimony_content, d.user_id, d.follower_id, d.testimony_date, d.testimony_id, u.user_name nome_comentou FROM depositions d, users u WHERE d.follower_id = ? AND u.user_id = d.user_id', [followerId], (err, results) => {
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
    findDepositions
}