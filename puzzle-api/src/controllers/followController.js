const connection = require('../config/db');

async function followUser(request, response) {
  try {

    const values = [
        request.body.user_id,
        request.body.follower_id
      ];

    // Verificar se a relação de seguidor já existe
    const existingFollow = await connection.query('SELECT * FROM follows WHERE user_id = ? AND follower_id = ?', values);

    if (existingFollow.length > 0) {
      return response.status(400).json({ error: 'Already following this user.' });
    }

    // Criar a nova relação de seguidor
    const query = 'INSERT INTO follows (user_id, follower_id) VALUES (?, ?)';

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
        message: 'Success! User followed',
        data: results,
      });
    } catch (err) {
      response.status(400).json({
        success: false,
        message: 'Unable to follow user.',
        query: query,
        sqlMessage: err.sqlMessage,
      });
    }
  } catch (error) {
    console.error(error);
    response.status(500).json({ error: 'Internal server error.' });
  }
}

module.exports = {
  followUser
};
