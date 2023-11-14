const connection = require('../config/db').promise();

async function followUser(request, response) {
  const values = [
    request.body.user_id,
    request.body.follower_id
  ];

  console.log(values)

  try {
    // Verificar se a relação de seguidor já existe
    const [existingFollow] = await connection.query('SELECT * FROM follows WHERE user_id = ? AND follower_id = ?', values);

    if (existingFollow.length > 0) {
      return response.status(400).json({ error: 'Already following this user.' });
    }

    if (!request.body.user_id || !request.body.follower_id) {
      return response.status(400).json({ error: 'Invalid data. Check your information.' });
    }

    // Criar a nova relação de seguidor
    const query = 'INSERT INTO follows (user_id, follower_id) VALUES (?, ?)';
    const [results] = await connection.query(query, values);

    response.status(201).json({
      success: true,
      message: `Success! User followed.`,
      data: results
    });
  } catch (error) {
    response.status(400).json({
      success: false,
      message: `Unable to follow user. Check your information.`,
      error: error.message,
    });
  }
}

module.exports = {
  followUser
};
