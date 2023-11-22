// Configurações do banco de dados
const connection = require('../config/db');

// Gerenciador de variáveis de ambiente
require("dotenv").config();


// ------------------ SEGUIR USUÁRIO ------------------
async function followUser(request, response) {
  const values = [
    request.body.userIdLogin,
    request.body.contactId
  ];

  try {
    const [existingFollow] = await connection.query('SELECT * FROM follows WHERE user_id = ? AND follower_id = ?', values);

    if (existingFollow.length > 0) {
      await connection.query('UPDATE follows SET isFollowed = 1 WHERE user_id = ? AND follower_id = ?', values);
      return response.status(200).json({
        success: true,
        message: 'User is already being followed.',
        data: existingFollow[0]
      });
    }

    if (!request.body.userIdLogin || !request.body.contactId) {
      return response.status(400).json({ error: 'Invalid data. Check your information.' });
    }

    connection.query(
      'INSERT INTO follows (user_id, follower_id, isFollowed) VALUES (?, ?, 1)', values, (err, results) => {
        if (err) {
          response.status(400).json({
            success: false,
            message: "An error has occurred. Unable to follow user.",
            query: err.sql,
            sqlMessage: err.sqlMessage
          });
        } else if (results.affectedRows > 0) {
          response.status(200).json({
            success: true,
            message: 'Success in follow user.',
            data: results
          });
        } else {
          response.status(400).json({
            success: false,
            message: `Unable to follow user.`,
          });
        }
      }
    );
  } catch (error) {
    response.status(500).json({
      success: false,
      message: `Internal Server Error.`,
      error: error.message,
    });
  }
}


// ------------------ UNFOLLOW ------------------
async function unfollowUser(request, response) {
  const values = [
    request.body.userIdLogin,
    request.body.contactId
  ];

  try {
    connection.query(
      'UPDATE follows SET isFollowed = 0 WHERE user_id = ? AND follower_id = ?', values, (err, results) => {
        if (err) {
          response.status(400).json({
            success: false,
            message: "An error has occurred. Unable to unfollow user.",
            query: err.sql,
            sqlMessage: err.sqlMessage
          });
        } else if (results.affectedRows > 0) {
          response.status(200).json({
            success: true,
            message: 'Success in unfollow user.',
            data: results
          });
        } else {
          response.status(400).json({
            success: false,
            message: `Unable to unfollow user.`,
          });
        }
      }
    );
  } catch (error) {
    response.status(500).json({
      success: false,
      message: `Internal Server Error.`,
      error: error.message,
    });
  }
}


// ------------------ SELEÇÃO DAS INFORMAÇÕES DO CONTATO ------------------
async function selectFollowContact(request, response) {
  const values = [
    request.body.user_id,
    request.body.follower_id
  ];

  try {
    const [results] = await connection.query('SELECT * FROM follows WHERE user_id = ? AND follower_id = ?', values);

    if (results.length > 0) {
      response.status(200).json({
        success: true,
        message: 'Success in returning follow informations.',
        data: results[0]
      });
    } else {
      response.status(400).json({
        success: false,
        message: `Unable to return follow informations.`,
      });
    }
  } catch (error) {
    response.status(400).json({
      success: false,
      message: "An error has occurred. Unable to return follow informations.",
      error: error.message
    });
  }
}


// ------------------ SELEÇÃO DAS PESSOAS QUE O USUÁRIO SEGUE ------------------
async function selectAllFollows(request, response) {
  const userId = parseInt(request.params.user_id, 10)

  try {
    const [results] = await connection.query('SELECT f.user_id, f.follower_id, f.isFollowed, u.user_id, u.user_name, u.img_profile FROM follows f, users u WHERE f.user_id = ? AND u.user_id = f.follower_id AND f.isFollowed = 1;', userId);

    if (results.length > 0) {
      response.status(200).json({
        success: true,
        message: 'Success in returning follow informations.',
        data: results
      });
    } else {
      response.status(400).json({
        success: false,
        message: `Unable to return follow informations.`,
      });
    }
  } catch (error) {
    response.status(400).json({
      success: false,
      message: "An error has occurred. Unable to return follow informations.",
      error: error.message
    });
  }
}


// ------------------ EXPORTAÇÃO DAS FUNÇÕES QUE VÃO SER ACESSADAS NAS ROTAS ------------------
module.exports = {
  followUser,
  unfollowUser,
  selectFollowContact,
  selectAllFollows
};
